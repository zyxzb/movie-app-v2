import Image from 'next/image';
import Link from 'next/link';

import {
  Table as TableCn,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/_components/ui/table';
import { PLACEHOLDER_IMAGE } from '@/_lib/constants';
import { getMovieCountryById } from '@/_lib/service';

type MovieProps = {
  Title: string;
  Year: string;
  imdbID: string;
  // Country?: string;
  Type: string;
  Poster: string;
};

type TableProps = {
  data: MovieProps[];
  totalResults: string;
};

const Table = ({ data, totalResults }: TableProps) => {
  return (
    <TableCn>
      <TableHeader>
        <TableRow>
          <TableHead>Poster</TableHead>
          <TableHead className='w-[200px]'>Title</TableHead>
          <TableHead className='text-center'>Year</TableHead>
          <TableHead className='text-right'>Type</TableHead>
          <TableHead className='text-right'>Country</TableHead>
          <TableHead className='text-right'>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.imdbID}>
            <TableCell className='w-[190px]'>
              <Image
                src={item.Poster !== 'N/A' ? item.Poster : PLACEHOLDER_IMAGE}
                alt={item.Title}
                width={96}
                height={142}
              />
            </TableCell>
            <TableCell className='font-bold'>{item.Title}</TableCell>
            <TableCell className='text-center'>{item.Year}</TableCell>
            <TableCell className='text-right capitalize'>{item.Type}</TableCell>
            <TableCell className='text-right capitalize'>
              {getMovieCountryById(item.imdbID)}
            </TableCell>
            <TableCell className='text-right capitalize'>
              <Link
                href={`/i/${item.imdbID}`}
                className='text-blue-500 underline underline-offset-2'
              >
                Read more...
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total results:</TableCell>
          <TableCell className='text-right'>{totalResults}</TableCell>
        </TableRow>
      </TableFooter>
      <TableCaption>The Open Movie Database</TableCaption>
    </TableCn>
  );
};

export default Table;
