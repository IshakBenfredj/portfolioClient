import Link from "next/link";
import { FiLink, FiInfo } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { Lang } from "../providers";
import { useContext } from "react";

export default function Project({ project, setDetails, incViews }) {
  const { data } = useContext(Lang)

  return (
    <div
      key={project._id}
      className="relative select-none bg-white/80 dark:bg-gray-800/80 pt-2 pb-4 px-2 rounded-xl"
    >
      <div className="lg:h-52 h-28 overflow-hidden rounded-xl relative">
        <div className="shadow"></div>
        <img src={project.image} alt="" className="w-full" />
      </div>
      <div className="flex justify-between items-center capitalize my-3">
        <h2
          className="font-bold text-primary lg:text-base text-xs"
          style={{ textWrap: "no-wrap" }}
        >
          {project.title}
        </h2>
        <div className="flexCenter gap-1 text-secondary cursor-pointer lg:text-xs text-[10px]">
          <FaEye />
          <span>{project.views}</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-400 lg:text-sm text-[10px] capitalize">
        <Link
          target="_blank"
          href={project.link}
          className="flexCenter gap-1 hover:text-primary hover:underline capitalize"
          onClick={() => incViews(project._id)}
        >
          <FiLink />
          <span>{data.portfolio.browse}</span>
        </Link>
        <div
          className="flexCenter gap-1 hover:text-secondary cursor-pointer capitalize"
          onClick={() => setDetails(project.details)}
        >
          <FiInfo />
          <span>{data.portfolio.details}</span>
        </div>
      </div>
    </div>
  );
}

export function LoadingProjects({ keyy }) {
  return (
    <div
      key={keyy}
      className="relative animate-pulse bg-white/80 dark:bg-gray-800/80 pt-2 pb-4 px-2 rounded-xl"
    >
      <div className="lg:h-52 h-28 overflow-hidden rounded-xl relative">
        <div className="shadow"></div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-700 "></div>
      </div>
      <div className="flex justify-between items-center capitalize my-3">
        <h2
          className="w-2/5 h-5 bg-slate-200 dark:bg-slate-700"
          style={{ textWrap: "no-wrap" }}
        ></h2>
        <div className="w-2/5 h-3 bg-slate-200 dark:bg-slate-700 "></div>
      </div>
      <div className="flex justify-between items-center text-gray-400 lg:text-sm text-[10px] capitalize">
        <div className="bg-slate-200 dark:bg-slate-700 h-3 w-1/3"></div>
        <div className="bg-slate-200 dark:bg-slate-700 h-3 w-1/3"></div>
      </div>
    </div>
  );
}
