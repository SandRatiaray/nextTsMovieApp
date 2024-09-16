export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
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

export interface IProduction_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProduction_countries {
  iso_3166_1: string;
  name: string;
}

export interface ISpoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IBelong_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBelong_to_collection | null;
  budget: number;
  genres: IGenresMovies;
  homepage: string;
  id: string;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProduction_companies[];
  production_countries: IProduction_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpoken_languages[];
  status: string;
  tagline: string;
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



export interface ICast {
  adult: boolean;
  gender: string;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface ICredits {
  id: number;
  cast: ICast[];
  crew: ICrew[];
}

export interface IMovieSimilar {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
