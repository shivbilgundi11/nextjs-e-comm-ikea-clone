"use client";

import axios, { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import ProductsListing from "@/app/_components/category-page/products-listing";
import ErrorBox from "@/app/_components/error";
import Loader from "@/app/_components/loading";
import api from "@/app/api";

export default function ListingsBySearchQuery() {
  const [fetchedData, setFetchedData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    // setError(false);
    const fetchData = async () => {
      setLoading(true);
      abortController.current = new AbortController();
      setError(false);
      try {
        const res = await api.get(`/api/search/${query}`, {
          signal: abortController.current?.signal,
        });
        const data = await res.data;
        setFetchedData(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Axios error
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            setError(true);
            // Handle 404 error
            console.error(`No Products Found For ${query}`, axiosError.message);
            // Display a user-friendly message or handle the error appropriately
          } else {
            // Handle other Axios errors
            console.error("Request failed:", axiosError.message);
          }
        } else {
          // Non-Axios error (e.g., network error)
          console.error("Network error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current?.abort();
      setError(false);
    };
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorBox msg={`No Products found for ${query}`} />;
  }

  return (
    <>
      {fetchedData && (
        <main className="container flex h-auto min-h-screen w-full flex-col gap-y-7 py-6 md:gap-y-10 md:py-10 lg:py-12">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Products Found For {(query as string).toLocaleLowerCase()}
          </h2>

          <ProductsListing products={fetchedData} />
        </main>
      )}
    </>
  );
}
