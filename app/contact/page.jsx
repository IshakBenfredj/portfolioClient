'use client'
import Title from "../components/Title";
import ContactComp from "../components/ContactComp";
import Link from "next/link";
import { useContext } from "react";
import { Lang } from "../providers";

export default function page() {
  const { data } = useContext(Lang)
  return (
    <div className="min-h-screen section md:pt-16 pt-20 text-white">
      <div className="container">
        <div className="-mb-10">
          <Title
            title={data.contact.title}
            description={data.contact.subtitle1}
          />
        </div>
        <h4 className="mb-10 capitalize leading-8 text-gray-800 dark:text-gray-200 md:text-base text-xs">
        {data.contact.note1}
          <span className="text-secondary font-semibold">
          {data.contact.note2}
          </span>
          {data.contact.note3}
          <span className="text-secondary font-semibold">
          {data.contact.note4}
          </span>
          {data.contact.note5}
          <Link
            href={"terms_of_work"}
            className="text-primary font-semibold underline"
          >
            {data.contact.note6}
          </Link>
          {data.contact.note7}
        </h4>
        <ContactComp />
      </div>
    </div>
  );
}
