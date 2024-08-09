// Library who send error if we import it in a client component
import 'server-only';

interface IParams {
  key: string;
  value: string;
}

export const getMovieByPath = (
  path: string,
  params: IParams[] = [],
  language: string = 'fr-Fr'
) => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);

  url.searchParams.append('api_key', process.env.TMDB_API_KEY!);
  url.searchParams.append('language', language);
  params.forEach((param) => {
    url.searchParams.append(param.key, param.value);
  });

  return fetch(url).then((res) => res.json());
};
