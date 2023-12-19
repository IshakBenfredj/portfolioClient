"use client";
import { useEffect, useState } from "react";
import Axios from "../api";
import Slider from "react-slick";
import Title from "../components/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../components/Loading";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState("wait for Testimonials ...");

  useEffect(() => {
    const getTestimonials = async () => {
      const { data } = await Axios.get("/testimonials");
      setTestimonials(data);
      setLoading(null);
    };
    getTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // LG screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900, // MD screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700, // Phones (SM)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section">
      <div className="container px-10 lg:px-28">
        <Title
          title={"testimonilas"}
          description={"what people say about me?"}
        />
        {loading ? (
          <Loading text={loading} />
        ) : (
          <Slider {...settings} className="md:px-4">
            {testimonials.map((testimonial) => (
              <div className="bg-gray-200 dark:bg-gray-100 p-2 rounded-xl relative">
                <div className="flex items-center gap-2">
                  {testimonial.gender === "male" ? (
                    <img
                      src="/man.png"
                      className="testimonialImg p-2 border-primary"
                    />
                  ) : (
                    <img
                      src="/woman.png"
                      className="testimonialImg border-secondary"
                    />
                  )}
                  <h4
                    className={`mb-1 font-bold md:text-xl ${
                      testimonial.gender === "male"
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    {testimonial.name}
                  </h4>
                </div>
                <p className="mt-2 text-gray-700 md:text-base text-sm leading-[1.8] font-semibold">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}