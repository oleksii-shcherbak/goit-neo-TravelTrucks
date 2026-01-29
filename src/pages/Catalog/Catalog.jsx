import Header from '../../components/Header/Header';
import AsyncStateHandler from '../../components/AsyncStateHandler/AsyncStateHandler';
import CatalogFilters from './components/CatalogFilters/CatalogFilters';
import CatalogList from './components/CatalogList/CatalogList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCatalog, selectFilters } from '../../redux/selectors';
import { catalogActions } from '../../redux/catalogSlice';
import Button from '../../components/Button/Button';
import { fetchCatalog } from '../../redux/thunks';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { ITEMS_PER_PAGE } from '../../constants/constants';

export default function Catalog() {
  const dispatch = useDispatch();
  const { data, isLoading, isLoadingMore, isLoadMoreAvailable, currentPage } =
    useSelector(selectCatalog);
  const filters = useSelector(selectFilters);

  useDocumentTitle(
    'Catalog - TravelTrucks',
    'Browse our complete catalog of campers and motorhomes available for rent'
  );

  useEffect(() => {
    dispatch(
      fetchCatalog({
        page: currentPage,
        limit: ITEMS_PER_PAGE,
        location: filters.location,
        type: filters.type,
        ...filters.equipment,
      })
    );
  }, [
    currentPage,
    dispatch,
    filters.equipment,
    filters.location,
    filters.type,
  ]);

  const handleFetchMore = () => {
    dispatch(catalogActions.setCurrentPage(currentPage + 1));
  };

  return (
    <>
      <Header />
      <div className="container mt-12 pb-14">
        <div className="flex">
          <CatalogFilters />
          <AsyncStateHandler isLoading={isLoading}>
            {data?.items.length ? (
              <div className="flex-1">
                <CatalogList items={data?.items} />

                {isLoadMoreAvailable ? (
                  <div className="flex justify-center">
                    <Button
                      variant="secondary"
                      className="mt-2"
                      onClick={handleFetchMore}
                      isLoading={isLoadingMore}
                    >
                      Load more
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : (
              'The catalog is empty'
            )}
          </AsyncStateHandler>
        </div>
      </div>
    </>
  );
}
