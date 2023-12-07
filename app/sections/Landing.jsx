import Image from "next/image";

export default function Landing() {
  return (
    <div className="bg-[#fafafa] pt-[52px] relative overflow-hidden bg-gradient-to-r dark:from-gray-800 dark:to-gray-950 w-full h-screen">
      <img
        src="/landingBg.png"
        className="object-cover absolute z-10 right-0 top-[52px] w-2/3 md:w-fit md:h-full h-1/2 select-none"
        alt=""
      />
      <div className="container py-20 text-center relative z-30">
          <h1 className="md:text-7xl text-3xl font-bold text-gray-800 dark:text-gray-200">MERN Stack Developer</h1>
          <h1 className="md:text-3xl text-lg font-bold text-secondary capitalize my-6">Web & Mobile Developer, Content creator</h1>
          <p></p>
      </div>
    </div>
  );
}
