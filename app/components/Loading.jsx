import React from "react";

export default function Loading({ text, Element }) {
  return (
    <>
      {text ? (
        <div className="md:text-3xl text-lg text-secondary font-bold capitalize text-center">
          {text}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {[0, 1, 2].map((e) => (
            <Element key={e} />
          ))}
        </div>
      )}
    </>
  );
}