import React from "react";

export default function Loading({ text }) {
  return (
    <div className="md:text-3xl text-lg text-secondary font-bold capitalize text-center">
      {text}
    </div>
  );
}
