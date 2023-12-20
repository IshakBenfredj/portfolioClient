"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import AllComments from "../components/AllComments";
import Axios from "../api";

export default function page() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getComments = async (e) => {
    const { data } = await Axios.get("/comments");
    setComments(data.reverse());
    setLoading(false)
  };

  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="section min-h-screen">
      <div className="container">
        <Title title={"Comments"} description={"What people said about us?"} />
        <AllComments all comments={comments} loading={loading} />
      </div>
    </div>
  );
}
