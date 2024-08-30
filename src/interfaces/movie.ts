export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IResultApi {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IGenresMovies {
  genres: IGenre[];
}

export interface IParams {
  key: string;
  value: string;
}

export interface ISearchParams {
  sort_by: string;
  release_gte: string;
  release_lte: string;
  whith_genres?: string;
}
