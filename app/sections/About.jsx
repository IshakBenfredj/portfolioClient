import { MdOutlineSimCardDownload } from "react-icons/md";
import Title from "../components/Title";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="section overflow-visible pb-20">
      <div className="container">
        <Title
          title="about me"
          description="a passionate developer who loves to code"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:justify-around justify-center items-center gap-8">
          <div className="flex lg:justify-end justify-center gap-11 relative lg:mb-0 mb-8">
            <BsFillInfoSquareFill size={80} className="text-primary" />
            <div className="w-6/12 relative">
              <img src="/about1.jpg" alt="" className="w-full rounded-xl" />
              <img
                src="/about2.jpg"
                alt=""
                className="absolute w-80 rounded-xl -bottom-10 -left-2/3"
              />
            </div>
          </div>
          <div className="">
            <p className="leading-8 capitalize md:w-10/12 w-full text-gray-800 dark:text-gray-200">
              I'm Ishak Djilali Benfredj, I Work As A <span className="text-secondary">software engineer</span> and
              <span className="text-secondary"> content creator</span> . When you work with me, I will be keen to
              fulfill your requests. I will try to provide <span className="text-secondary">wonderful additions </span>
              to your project and help you with <span className="text-secondary">awesome marketing ideas</span> for the
              success of your business. What are you waiting for?  <Link href={'/contact'} className="text-primary underline">Contact me</Link> to
              work and you can also <span className="text-secondary">download my CV</span> via the button:
            </p>
            <a href="" className="fillBtn md:w-1/3 w-2/3 mx-auto md:mx-0 mt-6">
              <MdOutlineSimCardDownload size={22} />
              <span>download cv</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
