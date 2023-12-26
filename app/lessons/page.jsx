"use client";
import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import Axios from "../api";
import { FaEye } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import Loading from "../components/Loading";
import { Lang } from "../providers";

export default function page() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data } = useContext(Lang)

  const getLessons = async () => {
    const { data } = await Axios.get("/lessons");
    setLessons(data.reverse().reverse());
    setLoading(false);
  };

  useEffect(() => {
    getLessons();
  }, []);

  const incViews = async (id) => {
    await Axios.patch(`/lessons/incViews/${id}`);
    getLessons();
  };
  return (
    <div className="section">
      <div className="container">
        <Title
          title={data.lessons.title}
          description={data.lessons.subtitle}
        />
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
          {loading ? (
            <Loading Element={LoadingLesson} arr={[1, 2, 3, 4]} />
          ) : (
            <>
              { lessons.map((lesson) => (
                <div
                  key={lesson._id}
                  className="dark:bg-gray-950 bg-gray-200 rounded-xl p-3"
                >
                  <div className="w-full rounded-xl overflow-hidden dark:bg-gray-900 bg-gray-300 md:h-40 h-28">
                    <img
                      src={lesson.image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="my-3 md:text-xl text-lg font-bold text-primary capitalize text-center">
                    {lesson.title}
                  </h1>
                  <div className="flex justify-between items-center dark:text-gray-400 text-gray-700 lg:text-sm text-[10px] capitalize">
                    <Link
                      target="_blank"
                      href={lesson.link}
                      className="flexCenter gap-1 hover:text-primary hover:underline"
                      onClick={() => incViews(lesson._id)}
                    >
                      <FiLink />
                      <span>browse</span>
                    </Link>
                    <div className="flexCenter gap-1 text-secondary cursor-pointer">
                      <FaEye />
                      <span>{lesson.views}</span>
                    </div>
                  </div>
                </div>
              )) }
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const LoadingLesson = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-3 animate-pulse w-full">
      <div className="w-full rounded-xl overflow-hidden dark:bg-gray-900 bg-gray-300 h-40"></div>
      <h1 className="my-3 p-2 bg-slate-300 dark:bg-slate-900 rounded w-full h-4"></h1>
      <div className="flex justify-between items-center">
        <div className="w-2/5 p-2 h-3 rounded bg-slate-300 dark:bg-slate-900"></div>
        <div className="w-1/5 p-2 h-3 rounded bg-slate-300 dark:bg-slate-900"></div>
      </div>
    </div>
  );
};
