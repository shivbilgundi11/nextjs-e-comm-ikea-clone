'use client';

import axios, { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import ErrorBox from '@/app/_components/error';
import Loader from '@/app/_components/loading';
import api from '@/app/api';

export default function App() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(data, error);

  const params = useParams();

  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    // setError(false);
    const fetchData = async () => {
      setLoading(true);
      abortController.current = new AbortController();
      setError(false);
      try {
        const res = await api.get(`/api/listings/${params.catId}`, {
          signal: abortController.current?.signal,
        });
        const data = await res.data;
        setData(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Axios error
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            setError(true);
            // Handle 404 error
            console.error('Product not found:', axiosError.message);
            // Display a user-friendly message or handle the error appropriately
          } else {
            // Handle other Axios errors
            console.error('Request failed:', axiosError.message);
          }
        } else {
          // Non-Axios error (e.g., network error)
          console.error('Network error:', error);
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
  }, [params.catId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorBox />;
  }

  return (
    <>
      <main className='flex min-h-screen w-full flex-col items-center justify-center gap-5'>
        <h1>Shop by {params.catId}</h1>
      </main>
    </>
  );
}
