"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Axios from "../api";
import Loading from "../components/Loading";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [hoverSkill, setHoverSkill] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      const { data } = await Axios.get("/skills");
      setSkills(data);
      setLoading(false);
    };
    getSkills();
  }, []);

  return (
    <div className="section2">
      <p className="absolute -bottom-20 left-0 text-[200px] font-bold md:block hidden uppercase select-none z-0 text-primary opacity-50 text-nowrap">
        {hoverSkill}
      </p>
      <div className="container">
        <Title
          title={"skills"}
          description={"i work hard to improve my skills regularly"}
        />
        <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 justify-center gap-3 flex-wrap relative z-30">
          {loading ? (
            <Loading Element={SkillsLoading} arr={[1, 2, 3, 4, 5, 6, 7]} />
          ) : (
            <>
              {skills.map((skill) => (
                <div
                  key={skill._id}
                  className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl cursor-pointer cardBoxShadow dark:shadow-none"
                  onMouseEnter={() => setHoverSkill(skill.name)}
                  onMouseLeave={() => setHoverSkill("")}
                >
                  <p className="text-primary text-center capitalize font-semibold">
                    {skill.name}
                  </p>
                  <img
                    src={skill.image}
                    alt=""
                    className="md:w-12 w-10 mx-auto mt-4"
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const SkillsLoading = ({ keyy }) => {
  return (
    <div
    key={keyy}
      className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl cardBoxShadow dark:shadow-none animate-pulse"
    >
      <p className="w-2/3 h-3 rounded bg-slate-200 dark:bg-slate-700 mx-auto"></p>
      <div className="md:w-12 w-10 mx-auto mt-4 h-12 bg-slate-200 dark:bg-slate-700"></div>
    </div>
  );
};
