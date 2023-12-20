"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Loading from "./Loading";

export default function AllComments({ all, comments, loading }) {
  const [length, setLength] = useState(10);

  useEffect(() => {
    all && setLength(comments.length);
  }, [comments]);
  return (
    <>
      {loading ? (
        <Loading Element={LoadingComment} />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className="my-5"
        >
          <Masonry gutter="10px">
            {comments.slice(0, length).map((comment) => (
              <div
                key={comment._id}
                className="bg-gray-800 dark:bg-gray-100 p-3 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="bg-primary uppercase text-white p-2 w-10 h-10 text-lg flexCenter rounded-full font-bold">
                    {comment.name.split(" ")[1]
                      ? `${comment.name.split(" ")[0].slice(0, 1)}${comment.name
                          .split(" ")[1]
                          .slice(0, 1)}`
                      : comment.name.slice(0, 2)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="capitalize font-semibold dark:text-gray-800 text-gray-200">
                      {comment.name}
                    </h3>
                    <Link
                      href={`mailto:${comment.email}`}
                      className="text-sm text-gray-200 dark:text-gray-600"
                    >
                      {comment.email}
                    </Link>
                  </div>
                </div>
                <p className="mt-3 dark:text-gray-900 text-gray-200">
                  {comment.comment}
                </p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
}

const LoadingComment = ({ key }) => {
  return (
    <div
      key={key}
      className="bg-gray-800 dark:bg-gray-100 p-3 rounded-xl w-full h-32 animate-pulse"
    >
      <div className="flex items-center gap-3">
        <div className="dark:bg-slate-200 bg-slate-700 p-2 w-10 h-10 flexCenter rounded-full"></div>
        <div className="flex-1 flex-col">
          <h3 className="dark:bg-slate-200 bg-slate-700 h-3 capitalize font-semibold"></h3>
          <div className="dark:bg-slate-200 bg-slate-700 h-3"></div>
        </div>
      </div>
      <p className="mt-3 dark:bg-slate-200 bg-slate-700 h-6"></p>
    </div>
  );
};
