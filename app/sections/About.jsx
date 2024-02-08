"use client";
import { MdOutlineSimCardDownload } from "react-icons/md";
import Title from "../components/Title";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";
import { useContext } from "react";
import { Lang } from "../providers";

export default function About() {
  const { data, lang } = useContext(Lang);

  return (
    <div id="about" className="section overflow-visible pb-20">
      <div className="container">
        <Title title={data.about.title} description={data.about.subtitle} />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:justify-around justify-center items-center gap-8">
          <div className="flex lg:justify-end justify-center gap-11 relative lg:mb-0 mb-8">
            <BsFillInfoSquareFill size={80} className="text-primary" />
            <div className="w-6/12 relative">
              <img src="/about1.jpg" alt="" className="w-full rounded-xl" />
              <img
                src="/about2.jpg"
                alt=""
                className={`absolute w-80 rounded-xl -bottom-10 ${
                  lang === "en" ? "-left-2/3" : "-right-2/3"
                }`}
              />
            </div>
          </div>
          <div className="">
            <p className="leading-8 capitalize md:w-10/12 w-full text-gray-800 dark:text-gray-200">
              {data.about.about}
              <span className="text-secondary">{data.about.about1}</span>{" "}
              {data.about.about2}
              <span className="text-secondary">{data.about.about3}</span>
              {data.about.about4}
              <span className="text-secondary">{data.about.about5}</span>{" "}
              {data.about.about6}
              <Link href={"/contact"} className="text-primary underline">
                {data.about["contact"]}
              </Link>{" "}
              {data.about.about7}
              <span className="text-secondary">{data.about.about8}</span>{" "}
              {data.about.about9}
            </p>
            <a
              href="/DJILALI BENFREDJ ISHAK CV.pdf"
              download={"DJILALI_BENFREDJ_ISHAK_CV.pdf"}
              className="fillBtn md:w-1/3 w-2/3 mx-auto md:mx-0 mt-6"
            >
              <MdOutlineSimCardDownload size={22} />
              <span>{data.about.dowCv}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
