'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';

import Select from '@/_components/SelectType';
import { selectValues } from '@/_lib/constants';

import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const type = searchParams.get('type') || '';
  const router = useRouter();

  const [formQuery, setFormQuery] = useState(query);
  const [formType, setFormType] = useState(type);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trim the input and replace multiple spaces with a single space
    const trimmedQuery = formQuery.trim().replace(/\s+/g, ' ');
    if (!trimmedQuery) return alert('Please enter a search phrase');
    const formattedQuery = trimmedQuery
      .split(' ')
      .map(encodeURIComponent)
      .join('+');

    router.push(`/?query=${formattedQuery}&type=${formType}`);
  };

  return (
    <header>
      <form className='flex gap-4' onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Search...'
          onChange={(e) => setFormQuery(e.target.value)}
        />
        <Select
          placeholder='Select type'
          selectLabel='Types:'
          selectValues={selectValues}
          onChange={setFormType}
        />
        <Button type='submit'>Search</Button>
      </form>
    </header>
  );
};

export default Header;
