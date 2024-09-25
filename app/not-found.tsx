import Link from 'next/link';

import { Button } from './_components/ui/button';

const NotFoundPage = () => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center gap-6'>
      <h1 className='text-3xl font-semibold'>404 - Page not found</h1>
      <Button asChild className='mx-auto max-w-max'>
        <Link href='/'>Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
