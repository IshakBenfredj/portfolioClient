import Link from "next/link";
import { FiLink, FiInfo } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";

export default function Project({ project }) {
  return (
    <div className="relative select-none bg-white/80 dark:bg-gray-800/80 pt-2 pb-4 px-2 rounded-xl">
      <div className="lg:h-52 h-28 overflow-hidden rounded-xl relative">
        <div className="shadow"></div>
        <img src={project.image} alt="" className="w-full" />
      </div>
      <div className="flex justify-between items-center capitalize my-3">
        <h2 className="font-bold text-primary lg:text-base text-xs" style={{textWrap: 'no-wrap'}}>
          {project.title}
        </h2>
        <div className="flexCenter gap-1 text-secondary cursor-pointer lg:text-xs text-[10px]">
            <FaEye />
            <span>0</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-400 lg:text-sm text-[10px] capitalize">
        <Link
          target="_blank"
          href={project.link}
          className="flexCenter gap-1 hover:text-primary hover:underline"
        >
          <FiLink />
          <span>browse</span>
        </Link>
        <div className="flexCenter gap-1 hover:text-secondary cursor-pointer">
          <FiInfo />
          <span>details</span>
        </div>
      </div>
    </div>
  );
}
