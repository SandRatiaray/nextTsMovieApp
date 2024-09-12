export interface IParams {
  params?: {
    id?: string;
    locale?: string;
  };
  key?: string;
  value?: string;
}

export interface ISearchParams {
  sort_by: string;
  release_gte: string;
  release_lte: string;
  whith_genres?: string;
}
