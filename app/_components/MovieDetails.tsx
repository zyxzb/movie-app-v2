import Image from 'next/image';

import { PLACEHOLDER_IMAGE } from '@/_lib/constants';

type Rating = {
  Source: string;
  Value: string;
};

type MovieProps = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

const MovieDetails = ({ data }: { data: MovieProps }) => {
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    Type,
    BoxOffice,
    Production,
    Website,
  } = data;
  return (
    <div className='flex flex-col gap-10 lg:flex-row'>
      <div className='relative aspect-square w-full max-w-[500px] border'>
        <Image
          src={Poster !== 'N/A' ? Poster : PLACEHOLDER_IMAGE}
          alt={Title}
          fill
          className='object-contain'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl'>
          {Title} ({Year})
        </h1>
        <p>
          <strong>Rated:</strong> {Rated}
        </p>
        <p>
          <strong>Released:</strong> {Released}
        </p>
        <p>
          <strong>Runtime:</strong> {Runtime}
        </p>
        <p>
          <strong>Genre:</strong> {Genre}
        </p>
        <p>
          <strong>Director:</strong> {Director}
        </p>
        <p>
          <strong>Writer:</strong> {Writer}
        </p>
        <p>
          <strong>Actors:</strong> {Actors}
        </p>
        <p>
          <strong>Plot:</strong> {Plot}
        </p>
        <p>
          <strong>Language:</strong> {Language}
        </p>
        <p>
          <strong>Country:</strong> {Country}
        </p>
        <p>
          <strong>Awards:</strong> {Awards}
        </p>
        <p>
          <strong>IMDb Rating:</strong> {imdbRating} ({imdbVotes} votes)
        </p>
        <p>
          <strong>Metascore:</strong> {Metascore}
        </p>
        <p>
          <strong>Type:</strong> {Type}
        </p>
        <p>
          <strong>Box Office:</strong> {BoxOffice}
        </p>
        <p>
          <strong>Production:</strong> {Production}
        </p>
        <p>
          <strong>Website:</strong>{' '}
          {Website !== 'N/A' ? <a href={Website}>{Website}</a> : 'N/A'}
        </p>

        <h3>Ratings:</h3>
        <ul>
          {Ratings.map((rating: Rating, index: number) => (
            <li key={index}>
              {rating.Source}: {rating.Value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
