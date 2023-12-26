"use client";
import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import Loading from "../components/Loading";
import Axios from "../api";
import Project, { LoadingProjects } from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import { Lang } from "../providers";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [activeType, setActiveType] = useState("all");
  const [types, setTypes] = useState([]);
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState("wait for portfolio ...");
  const { data } = useContext(Lang)

  const getPortfolio = async () => {
    const { data } = await Axios.get("/portfolio");
    setPortfolio(data.reverse());
    setLoading(null);
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  useEffect(() => {
    const getUniqueProjectTypes = () => {
      const typesSet = new Set();

      portfolio.forEach((project) => {
        typesSet.add(project.type);
      });

      return Array.from(typesSet);
    };
    const types = getUniqueProjectTypes();
    setTypes(types.reverse());
  }, [portfolio]);

  const incViews = async (id) => {
    await Axios.patch(`/portfolio/incViews/${id}`);
    getPortfolio();
  };

  return (
    <>
      {details && <ProjectDetails details={details} setDetails={setDetails} />}
      <div className="section2">
        <div className="container">
        <Title
          title={data.portfolio.title}
          description={data.portfolio.subtitle}
        />
          {loading ? (
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:justify-around justify-center lg:gap-10 gap-2">
              <Loading Element={LoadingProjects} arr={[1, 2, 3, 4]} />
            </div>
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
                  ? portfolio.map((project) => (
                      <Project
                        setDetails={setDetails}
                        project={project}
                        incViews={incViews}
                      />
                    ))
                  : portfolio.map((project) => (
                      <>
                        {project.type === activeType && (
                          <Project
                            setDetails={setDetails}
                            project={project}
                            incViews={incViews}
                          />
                        )}
                      </>
                    ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
