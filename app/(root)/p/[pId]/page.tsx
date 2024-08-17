"use client";

import axios, { AxiosError } from "axios";
import { notFound, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import ErrorBox from "@/app/_components/error";
import Loader from "@/app/_components/loading";
import ProDuctDetail from "@/app/_components/product-page/productDetail";
import api from "@/app/api";

export default function ProductDetail() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    // setError(false);
    const fetchData = async () => {
      setLoading(true);
      abortController.current = new AbortController();
      setError(false);
      try {
        const res = await api.get(`/api/p/${params.pId}`, {
          signal: abortController.current?.signal,
        });
        const data = await res.data;
        setData(data);
        window.document.title =
          await `${data?.prodName} - ${data?.prodInfo} | Ikea`;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Axios error
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            setError(true);
            // Handle 404 error
            console.error("Product not found:", axiosError.message);
            // Display a user-friendly message or handle the error appropriately
          } else {
            // Handle other Axios errors
            console.error("Request failed:", axiosError.message);
          }
        } else {
          // Non-Axios error (e.g., network error)
          console.error("Network error:", error);
        }
        if (error) {
          notFound();
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
  }, [params.pId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorBox msg={`Product detail could not be found for ${params.pId}`} />
    );
  }

  return (
    <>
      <ProDuctDetail prodInfo={data} />
    </>
  );
}
