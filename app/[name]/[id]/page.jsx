"use client";
import React, { useContext, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Axios from "@/app/api";
import Title from "@/app/components/Title";
import { Lang } from "@/app/providers";

export default function page({ params }) {
  const name = decodeURIComponent(params.name);
  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);
  const { data } = useContext(Lang)

  useEffect(() => {
    const getServiceById = async () => {
      try {
        const { data } = await Axios.get(`/services/${params.id}`);
        setService(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getServiceById();
  }, []);
  return (
    <div className="min-h-screen section pt-20 text-white">
      <div className="container lg:w-1/2 mx-auto md:w-2/3 w-full">
        {loading ? (
          <LoadingDetails />
        ) : service ? (
          <>
            <Title
              title={name}
              description={data.services.detailsTitle}
            />
            <pre dangerouslySetInnerHTML={{ __html: service.details }}></pre>
          </>
        ) : (
          notFound()
        )}
      </div>
    </div>
  );
}

const LoadingDetails = () => {
  return (
    <div className="w-full animate-pulse flex-col gap-4 flex">
      <div className="w-full mb-16">
        <h4 className="dark:bg-slate-700 bg-purple-200 h-8"></h4>
        <h2 className=" dark:bg-slate-700 bg-purple-200 mt-3 h-16"></h2>
      </div>
      <div className="dark:bg-slate-700 bg-purple-200 h-7 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-7 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-4 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-7 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-4 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
      <div className="dark:bg-slate-700 bg-purple-200 h-3 rounded"></div>
    </div>
  );
};
