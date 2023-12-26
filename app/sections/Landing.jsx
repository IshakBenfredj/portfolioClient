"use client";
import Link from "next/link";
import { IoMailUnreadOutline } from "react-icons/io5";
import {
  MdOutlineSimCardDownload,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { Lang } from "../providers";
import { useContext } from "react";

export default function Landing() {
  const { data } = useContext(Lang);

  return (
    <div className="section md:pt-[40px] pb-0">
      <img
        src="/landingBg.png"
        className="object-cover absolute z-10 right-0 top-[52px] w-2/3 md:w-fit md:h-full h-1/2 select-none opacity-70 dark:opacity-100"
        alt=""
      />
      <div className="container py-20 text-center relative z-30">
        <h1 className="md:text-2xl text-lg font-bold text-gray-800 dark:text-gray-200 capitalize">
          {data.landing.name}
        </h1>
        <h1 className="md:text-7xl text-[28px] font-bold text-gray-800 dark:text-gray-200">
          {data.landing.job}
        </h1>
        <h1 className="md:text-3xl text-lg font-bold text-secondary capitalize md:my-6 my-3">
          {data.landing.jobDetails}
        </h1>
        <p className="md:w-3/5 md:font-semibold mx-auto text-gray-800 dark:text-gray-200 leading-7 md:leading-9 capitalize">
          {data.landing.about} &nbsp;
          <span className="text-primary">{data.landing.about1}</span> &nbsp;
          {data.landing.about2} &nbsp;
          <span className="text-primary">{data.landing.about3}</span> &nbsp;
          {data.landing.about4}
        </p>
        <div className="flexCenter md:flex-row flex-col gap-3 my-6 mx-auto md:w-2/3 lg:w-1/3 w-4/5">
          <a href="" className="fillBtn">
            <MdOutlineSimCardDownload size={22} />
            <span>{data.landing.dowCv}</span>
          </a>
          <Link href="contact" className="outlineBtn">
            <IoMailUnreadOutline size={22} />
            <span>{data.landing.contact}</span>
          </Link>
        </div>
        <a
          href="#about"
          className="absolute bottom-3 w-full flexCenter left-0 text-gray-800 dark:text-gray-200 animate-bounce md:text-5xl text-4xl"
        >
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </div>
  );
}
