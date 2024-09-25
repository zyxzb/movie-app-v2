'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

import {
  Pagination as PaginationCn,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/_components/ui/pagination';

type PaginationProps = {
  page: string;
  totalResults: string;
};

const Pagination = ({ page, totalResults: all }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(page);
  const totalResults = Number(all);

  const totalPages = Math.ceil(totalResults / 10);

  const generatePageNumbers = () => {
    const pageNumbers: (number | 'ellipsis')[] = [];

    if (totalPages <= 7) {
      // When the total pages are 7 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show the first 3 pages
      for (let i = 1; i <= 3; i++) {
        pageNumbers.push(i);
      }

      // Show ellipsis if there's a gap between the first 3 pages and the current page range
      if (currentPage > 5) {
        pageNumbers.push('ellipsis');
      }

      // Show pages around the current page
      for (
        let i = Math.max(4, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 3);
        i++
      ) {
        pageNumbers.push(i);
      }

      // Show ellipsis if there's a gap between the current page range and the last 3 pages
      if (currentPage < totalPages - 4) {
        pageNumbers.push('ellipsis');
      }

      // Always show the last 3 pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', page.toString());
      router.push(`/?${params.toString()}`);
    }
  };

  return (
    <PaginationCn>
      <PaginationContent className='flex flex-wrap'>
        {currentPage > 1 && (
          <PaginationPrevious
            className='cursor-pointer'
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}

        {generatePageNumbers().map((pageNumber, index) =>
          pageNumber === 'ellipsis' ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                className='cursor-pointer'
                isActive={pageNumber === currentPage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {currentPage < totalPages && (
          <PaginationNext
            className='cursor-pointer'
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </PaginationContent>
    </PaginationCn>
  );
};

export default Pagination;
