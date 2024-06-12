"use client";
import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import AllComments from "../components/AllComments";
import Axios from "../api";
import { Lang } from "../providers";
import LoadingPage from "../loading";

export default function page() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const { data } = useContext(Lang);

  const getComments = async (e) => {
    const { data } = await Axios.get("/comments");
    setComments(data.reverse());
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  // if (loadingPage) {
  //   return <LoadingPage />;
  // }
  return (
    <div className="section min-h-screen pt-20">
      <div className="container">
        <Title
          title={data.comments.title}
          description={data.comments.subtitle2}
        />
        <AllComments all comments={comments} loading={loading} />
      </div>
    </div>
  );
}
