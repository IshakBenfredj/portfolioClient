"use client";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import Loading from "../components/Loading";
import Axios from "../api";
import Project from "../components/Project";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [activeType, setActiveType] = useState("all");
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState("wait for portfolio ...");

  useEffect(() => {
    const getPortfolio = async () => {
      const { data } = await Axios.get("/portfolio");
      setPortfolio(data);
      setLoading(null);
    };
    getPortfolio();
  }, []);

  useEffect(() => {
    portfolio.reverse().forEach((project) => {
      if (!types.includes(project.type)) {
        setTypes([...types, project.type]);
      }
    });
  }, [portfolio]);
  return (
    <div className="section bg-gray-100 dark:from-gray-950 dark:to-gray-950 relative">
      <div className="container">
        <Title title={"portfolio"} description={"what i do for my clients ?"} />
        {loading ? (
          <Loading text={loading} />
        ) : (
          <>
            <div className="flexCenter md:gap-10 gap-4 mb-10">
              <span
                onClick={() => setActiveType("all")}
                className={`font-bold capitalize md:text-xl cursor-pointer transition-all ${
                  activeType === "all"
                    ? "text-primary"
                    : "hover:text-secondary dark:hover:text-secondary text-gray-800 dark:text-gray-200 "
                }`}
              >
                all
              </span>
              {types.map((type) => (
                <span
                  onClick={() => setActiveType(type)}
                  className={`font-bold capitalize md:text-xl cursor-pointer transition-all ${
                    activeType === type
                      ? "text-primary"
                      : "hover:text-secondary dark:hover:text-secondary text-gray-800 dark:text-gray-200 "
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:justify-around justify-center lg:gap-10 gap-2">
              {activeType === "all"
                ? portfolio.map((project) => <Project project={project} />)
                : portfolio.map((project) => (
                    <>
                      {project.type === activeType && (
                        <Project project={project} />
                      )}
                    </>
                  ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}