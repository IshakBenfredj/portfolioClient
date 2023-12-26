'use client'
import Link from "next/link";
import { useContext } from "react";
import { BsSendPlus } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { Lang } from "../providers";

export default function Service({ service }) {
  const { data } = useContext(Lang)

  return (
    <div
      key={service._id}
      className="lg:w-1/4 md:w-1/3 w-full dark:bg-gray-950/80 bg-gray-200 p-4 pt-12 rounded-xl cardBoxShadow relative overflow-hidden
                before:w-1/3 before:absolute before:bg-primary before:rounded-full before:h-6 before:-top-3 before:left-1/2 before:-translate-x-1/2 before:transition-all
                hover:before:w-1/2 hover:scale-[1.06] transition-all"
    >
      <img
        src={service.image}
        alt=""
        className="w-16 mb-6 mx-auto select-none"
      />
      <h4 className="dark:text-gray-200 text-gray-800 font-bold text-center capitalize md:text-xl">
        {service.title}
      </h4>
      <div className="flexCenter gap-3 mt-6">
        <Link
          href={"/contact"}
          className="flexCenter gap-3 rounded-xl p-3 text-primary border-[1px] border-primary capitalize transition-all hover:text-white hover:bg-primary"
        >
          <BsSendPlus />
          <span>{data.services.buying}</span>
        </Link>
        <Link
          href={`/${service.title}/${service._id}`}
          className="rounded-xl p-4 text-secondary border-[1px] border-secondary transition-all hover:text-white hover:bg-secondary"
        >
          <FaInfo />
        </Link>
      </div>
    </div>
  );
}

export const LoadingServices = ({ keyy }) => {
  return (
    <div
      key={keyy}
      className="lg:w-1/4 md:w-1/3 w-full dark:bg-gray-950/80 bg-gray-200 p-4 pt-12 rounded-xl cardBoxShadow relative overflow-hidden
                before:w-1/3 before:absolute before:bg-slate-200 dark:before:bg-slate-700 before:rounded-full before:h-6 before:-top-3 before:left-1/2 before:-translate-x-1/2 before:transition-all
                hover:before:w-1/2 hover:scale-[1.06] transition-all animate-pulse"
    >
      <div className="mb-6 mx-auto select-none h-20 rounded bg-slate-200 dark:bg-slate-700 w-2/3"></div>
      <h4 className="bg-slate-200 dark:bg-slate-700 h-4 rounded"></h4>
      <div className="flexCenter gap-3 mt-6 ">
        <div className="rounded-xl p-3 bg-slate-200 dark:bg-slate-700 h-6 w-1/2"></div>
        <div className="rounded-xl p-3 bg-slate-200 dark:bg-slate-700 h-6 w-1/2"></div>
      </div>
    </div>
  );
};
