"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Axios from "../api";
import Service from "../components/Service";
import Loading from "../components/Loading";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState("wait for Services ...");

  useEffect(() => {
    const getServices = async () => {
      const { data } = await Axios.get("/services");
      setServices(data);
      setLoading(null);
    };
    getServices();
  }, []);
  return (
    <div className="section">
      <div className="container">
        <Title title={"services"} description={"what i do for my clients ?"} />
        <div className="flexCenter gap-5 flex-wrap">
          {loading ? (
            <Loading text={loading} />
          ) : (
            services.map((service) => <Service service={service} />)
          )}
        </div>
      </div>
    </div>
  );
}
