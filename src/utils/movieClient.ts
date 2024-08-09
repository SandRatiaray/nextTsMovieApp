// Library who send error if we import it in a client component
import 'server-only';

export const getMovieByPath = (path: string, language: string = 'fr-Fr') => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);

  url.searchParams.append('api_key', process.env.TMDB_API_KEY!);
  url.searchParams.append('language', language);

  return fetch(url).then((res) => res.json());
};
