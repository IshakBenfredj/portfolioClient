"use client";
import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import AllComments from "../components/AllComments";
import Axios from "../api";
import { Lang } from "../providers";

export default function page() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data } = useContext(Lang);

  const getComments = async (e) => {
    const { data } = await Axios.get("/comments");
    setComments(data.reverse());
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="section min-h-screen md:pt-16 pt-20">
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
