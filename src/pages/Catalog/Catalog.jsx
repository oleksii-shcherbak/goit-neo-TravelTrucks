import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import CatalogList from './components/CatalogList/CatalogList';
import AsyncStateHandler from '../../components/AsyncStateHandler/AsyncStateHandler';
import Button from '../../components/Button/Button';
import { fetchCampers } from '../../redux/thunks';
import { loadMore } from '../../redux/catalogSlice';
import {
    selectCatalogData,
    selectCatalogLoading,
    selectCatalogError,
    selectCatalogFilters,
    selectIsLoadMoreAvailable,
    selectCatalog,
} from '../../redux/selectors';

function Catalog() {
    const dispatch = useDispatch();
    const data = useSelector(selectCatalogData);
    const isLoading = useSelector(selectCatalogLoading);
    const error = useSelector(selectCatalogError);
    const filters = useSelector(selectCatalogFilters);
    const isLoadMoreAvailable = useSelector(selectIsLoadMoreAvailable);
    const { currentPage } = useSelector(selectCatalog);

    useEffect(() => {
        dispatch(fetchCampers({ page: currentPage, filters }));
    }, [dispatch, currentPage, filters]);

    const handleLoadMore = () => {
        dispatch(loadMore());
    };

    return (
        <>
            <Header />
            <div className="container mt-12 pb-20">
                <div className="flex gap-16">
                    <div className="w-[360px]">
                        <p>Filters will be here</p>
                    </div>

                    <div className="flex-1">
                        <AsyncStateHandler isLoading={isLoading && !data} isError={error}>
                            {data?.items && data.items.length > 0 ? (
                                <>
                                    <CatalogList items={data.items} />
                                    {isLoadMoreAvailable && (
                                        <div className="flex justify-center mt-12">
                                            <Button
                                                onClick={handleLoadMore}
                                                variant="secondary"
                                                isLoading={isLoading}
                                            >
                                                Load more
                                            </Button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-center py-20">No campers found</p>
                            )}
                        </AsyncStateHandler>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;