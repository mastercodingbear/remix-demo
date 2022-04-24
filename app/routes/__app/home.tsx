import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import { useEffect } from 'react';

// https://github.com/remix-run/remix/discussions/1494
// should be an environment variable that differs per environment (dev, prod)
const ORIGIN = "http://localhost:8000";
export const fetchApi = (pathname: string) => {
  const { href } = new URL(pathname, ORIGIN);
  return fetch(href);
};



export const loader: LoaderFunction = async () => {
  return fetchApi("/users");
};

export default function Home() {
  // const data = useLoaderData();

  useEffect(() => {
    fetchApi("/users").then(res => res.json()).then(data => {
      console.log(data)
    })
  },[])

  return (
    <>
      home page
    </>
  )
}