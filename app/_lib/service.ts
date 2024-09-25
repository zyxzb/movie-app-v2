import { notFound } from 'next/navigation';

const baseUrl = 'http://www.omdbapi.com/';

export const getData = async (
  query: string,
  page: string = '1',
  type: string = '',
) => {
  const url = new URL(baseUrl);
  url.searchParams.append('apikey', process.env.NEXT_API_KEY as string);
  url.searchParams.append('s', query);

  if (page) {
    url.searchParams.append('page', page);
  }

  if (type) {
    url.searchParams.append('type', type);
  }

  try {
    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`Error: ${res.statusText}`);
      return notFound();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    notFound();
  }
};

export const getMovieById = async (id: string) => {
  const url = new URL(baseUrl);
  url.searchParams.append('apikey', process.env.NEXT_API_KEY as string);
  url.searchParams.append('i', id);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`Error: ${res.statusText}`);
      return notFound();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export const getMovieCountryById = async (id: string) => {
  const url = new URL(baseUrl);
  url.searchParams.append('apikey', process.env.NEXT_API_KEY as string);
  url.searchParams.append('i', id);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`Error: ${res.statusText}`);
      return 'not found';
    }

    const data = await res.json();
    return data.Country;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
