import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { listEvents } from "@/graphql/queries";
import { useQuery } from "@/apollo/utils";
import { useEffect, useRef, useState } from "react";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

export default function Home() {
  // const response = useQuery(listEvents);
  //
  // console.log("%c LOG response", "background: #222; color: #bada55", response);

  return (
    <>
      <ErrorBoundary FallbackComponent={() => <>Error happening</>}>
        <Button />
      </ErrorBoundary>
    </>
  );
}

const Button = () => {
  const errorHandler = useErrorHandler();

  const fetchPost = async (e: any) => {
    try {
      fetch("https://jsonplaceholder.typiscode.com/todos/1").then(
        (resp) => resp.json(),
        (error) => errorHandler(error)
      );
    } catch (e: unknown) {
      throw new Error(e as any);
    }
  };

  return (
    <button type="button" onClick={fetchPost}>
      Click
    </button>
  );
};
