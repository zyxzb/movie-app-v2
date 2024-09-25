import { Suspense } from 'react';

import Pagination from '@/_components/Pagination';
import Table from '@/_components/Table';
import { getData } from '@/_lib/service';

const Home = async ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
    type?: string;
  };
}) => {
  const { query = '', page = '1', type = '' } = searchParams || {};
  const data = await getData(query, page, type);

  if (!query) return <p>Enter name and select type (optional)</p>;

  if (data.Error) return <p>{data.Error}</p>;

  if (!data) return <p>No result found 😞</p>;

  const suspenseKey = `${query}-${page}-${type}`;

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl'>
        Search phrase: <span className='font-bold'>{query}</span>
      </h1>
      <Suspense key={suspenseKey} fallback={<p>Loading movies...</p>}>
        <Table data={data.Search} totalResults={data.totalResults} />
        <Pagination page={page} totalResults={data.totalResults} />
      </Suspense>
    </div>
  );
};

export default Home;
