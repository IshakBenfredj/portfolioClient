import React from "react";

export default function Title({ title, description }) {
  return (
    <div className="text-center mx-auto md:w-[500px] w-full mb-16">
      <h4 className="uppercase md:text-2xl text-xl font-extrabold text-primary">
        {title}
      </h4>
      <h2 className="title capitalize md:text-4xl text-2xl font-bold text-gray-800 dark:text-gray-300 md:leading-[55px] leading-10 mt-3">
        {description}
      </h2>
    </div>
  );
}