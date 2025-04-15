import {BASE_URL} from "@/api/constants";

export type searchParamsType = Record<string, string | string[]>

export interface IFetchDataProps{
  url: string;
  searchParams?: searchParamsType;
}

export const fetchData = async<T> (
  {
    url,
    searchParams,
  }: IFetchDataProps
):Promise<T> => {
  
  const queryString: string = getQueryString(searchParams)
  
  const response = await fetch(''+BASE_URL + url + queryString, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  
  return await response.json()
}

function getQueryString(searchParams?: searchParamsType): string{
  const urlSearchParams: URLSearchParams = new URLSearchParams();
  urlSearchParams.set('client_id', process.env.JAMENDO_CLIENT_ID ?? '');
  
  if (!searchParams) {
    return `?${urlSearchParams.toString()}`;
  }
  
  for (const [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      value
        .filter((v) => typeof v === 'string' && v.trim() !== '')
        .forEach((v) => urlSearchParams.append(key, v));
    }
    
    if (value && typeof value == 'string' && value.trim() !== '') {
      urlSearchParams.set(key, value);
    }
  }
  
  return '?'+urlSearchParams.toString();
}