export const selectCatalog = state => state.catalog;
export const selectCatalogData = state => state.catalog.data;
export const selectCatalogLoading = state => state.catalog.isLoading;
export const selectCatalogError = state => state.catalog.error;
export const selectCatalogFilters = state => state.catalog.filters;
export const selectIsLoadMoreAvailable = state => state.catalog.isLoadMoreAvailable;