import React from 'react';

import MovieDetails from '@/_components/MovieDetails';
import { getMovieById } from '@/_lib/service';

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getMovieById(params.id);

  return <MovieDetails data={data} />;
};

export default Page;
