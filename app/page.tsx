"use client";

import { fetchMovies } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface IMovies {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  Ar = "ar",
  En = "en",
  Ja = "ja",
  Mn = "mn",
}

export default function Home() {
  const { isLoading, data } = useQuery<IMovies>({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  return (
    <>
      <h1 className="my-4 px-4 font-bold text-lg">Home</h1>
      <div className="px-4 grid grid-cols-2 gap-5 p-5">
        {isLoading || !data?.results ? (
          <h4>Loading...</h4>
        ) : (
          data?.results?.map((movie) => (
            <Link key={movie.id} href={`/${movie.id}`}>
              <img
                className="rounded-2xl shadow-poster transition-transform ease-in hover:scale-105 hover:-translate-y-2"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
              <h4 className="mt-1 ßtext-center text-lg">
                {movie.original_title}
              </h4>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
