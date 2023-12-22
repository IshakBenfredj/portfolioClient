"use client";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import Axios from "../api";
import Link from "next/link";
import AllComments from "../components/AllComments";
import Loading from "../components/Loading";

export default function Comments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("/comments/add", { name, email, comment });
      getComments();
      setName("");
      setEmail("");
      setComment("");
      alert("Comment added successfully");
    } catch (error) {
      alert("server error");
    }
  };

  const getComments = async (e) => {
    const { data } = await Axios.get("/comments");
    setComments(data.reverse());
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <Title
          title={"Comments"}
          description={"What can you say about our portfolio ?"}
        />
        <div className="flexCenter">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-950 md:w-3/5 w-full mx-auto p-4 flex md:mb-0 mb-4 flex-col gap-3 rounded-xl cardBoxShadow"
          >
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              className="p-2 w-full rounded-xl bg-white outline-none"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="p-2 w-full rounded-xl bg-white outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="comment"
              id=""
              placeholder="Your Comment *"
              value={comment}
              className="p-2 w-full rounded-xl h-24 bg-white outline-none"
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button className="px-4 py-3 font-bold rounded-full bg-primary w-fit text-white">
              Comment
            </button>
          </form>
          <div className="md:block hidden">
            <img src="/comment.png" alt="" className="w-4/5 object-contain" />
          </div>
        </div>

        <AllComments comments={comments} loading={loading} />
        <Link
          href={"/comments"}
          className="capitalize mt-3 text-white bg-primary hover:bg-primary/80 transition-all px-4 py-3 font-bold block w-fit mx-auto rounded-full"
        >
          all comments
        </Link>
      </div>
    </div>
  );
}