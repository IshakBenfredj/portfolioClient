import Link from "next/link";
import { IoMailUnreadOutline } from "react-icons/io5";
import {
  MdOutlineSimCardDownload,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";

export default function Landing() {
  return (
    <div className="section pt-[52px] pb-0">
      <img
        src="/landingBg.png"
        className="object-cover absolute z-10 right-0 top-[52px] w-2/3 md:w-fit md:h-full h-1/2 select-none opacity-70 dark:opacity-100"
        alt=""
      />
      <div className="container py-20 text-center relative z-30">
        <h1 className="md:text-2xl text-lg font-bold text-gray-800 dark:text-gray-200 capitalize">
          Hi I'm Ishak djilali benfredj
        </h1>
        <h1 className="md:text-7xl text-[28px] font-bold text-gray-800 dark:text-gray-200">
          MERN Stack Developer
        </h1>
        <h1 className="md:text-3xl text-lg font-bold text-secondary capitalize md:my-6 my-3">
          Web & Mobile Developer, Content creator
        </h1>
        <p className="md:w-3/5 md:font-semibold mx-auto text-gray-800 dark:text-gray-200 leading-7 md:leading-9 capitalize">
          Your destination for{" "}
          <span className="text-primary">developing your program</span> with{" "}
          <span className="text-primary">modern technologies </span>
          and <span className="text-primary">designs</span>, and consulting us
          about <span className="text-primary">awesome additions</span> to your
          idea so that it keeps pace with the technological development taking
          place.
        </p>
        <div className="flexCenter md:flex-row flex-col gap-3 my-6 mx-auto md:w-2/3 lg:w-1/3 w-4/5">
          <a href="" className="fillBtn">
            <MdOutlineSimCardDownload size={22} />
            <span>download cv</span>
          </a>
          <Link href="" className="outlineBtn">
            <IoMailUnreadOutline size={22} />
            <span>contact</span>
          </Link>
        </div>
        <a href="#about" className="absolute bottom-3 w-full flexCenter left-0 text-gray-800 dark:text-gray-200 animate-bounce md:text-5xl text-4xl">
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </div>
  );
}