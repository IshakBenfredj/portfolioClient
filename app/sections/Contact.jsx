'use client'
import Title from "../components/Title";
import ContactComp from "../components/ContactComp";
import { useContext } from "react";
import { Lang } from "../providers";

export default function Contact() {
  const { data } = useContext(Lang)
  return (
    <div className="section2">
      <div className="container">
        <Title
          title={data.contact.title}
          description={data.contact.subtitle}
        />{" "}
        <ContactComp />
      </div>
    </div>
  );
}
