"use client";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import InputField from "./InputField";
import SocialMedia from "./SocialMedia";
import Axios from "../api";

export default function ContactComp() {
  const [name, setName] = useState("");
  const [isWork, setIsWork] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("/messages/add", {
        isWork,
        name,
        email,
        phone,
        message,
      });
      alert("Message sent successfully");
    } catch (error) {
      alert("Server Erreur");
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/90 w-full flex justify-center md:flex-row flex-col overflow-hidden rounded-xl">
      <div className="relative flex-1 p-5 md:pb-5 overflow-hidden pb-10">
        <span className="absolute z-20 w-40 h-40 border-[20px] border-primary rounded-full opacity-50 right-16 -bottom-20"></span>
        <div className="text-primary capitalize font-bold mb-4 md:text-xl text-lg">
          our social links
        </div>
        <p className="dark:text-gray-200 text-gray-800 font-normal capitalize leading-8 mb-6 =">
          Here you will find some information about me such as email, phone
          number, social networking sites, do not forget to follow us.
        </p>
        <Link
          href="mailto:ishakbanfradje@gmail.com"
          className="flex items-center mb-3 gap-3 text-gray-800 dark:text-gray-200 relative z-30"
        >
          <IoIosMail className="text-secondary" />
          ishakbanfradje@gmail.com
        </Link>
        <Link
          href="tel:0541790205"
          className="flex items-center mb-3 gap-3 text-gray-800 dark:text-gray-200 relative z-30"
        >
          <FaPhoneAlt className="text-secondary" />
          05-41-79-02-05
        </Link>
        <SocialMedia classes={""} size={24} />
      </div>
      <div className="flex-1 p-5 dark:bg-primary/70 bg-primary relative">
        <span className="absolute rounded-full bg-gradient-to-br from-transparent to-[#34a0cfb3] dark:to-primary/80 w-32 h-32 top-32 -right-10 animate-circleOne"></span>
        <span className="absolute rounded-full bg-gradient-to-br from-transparent to-[#34a0cfb3] dark:to-primary/80 w-20 h-20 top-3 right-8 animate-circleTwo"></span>
        <span
          className="absolute border-[25px] border-transparent md:border-r-primary
         md:dark:border-r-primary/70 md:border-b-transparent md:dark:border-b-transparent border-b-primary dark:border-b-primary/70 md:-left-[50px] left-auto md:top-auto -top-[50px]"
        ></span>
        <div className="text-white capitalize font-bold mb-4 md:text-xl text-lg">
          contact me
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="cyberpunk-checkbox-label font-bold capitalize z-30">
            <input
              type="checkbox"
              className="cyberpunk-checkbox"
              onChange={() => setIsWork(!isWork)}
            />
            this message is for work ?
          </label>
          <InputField
            label="Full Name"
            type="text"
            id="name"
            value={name}
            set={setName}
          />

          <InputField
            label="Your Email"
            type="email"
            id="email"
            value={email}
            set={setEmail}
          />
          <InputField
            label="Your Phone"
            type="number"
            id="phone"
            value={phone}
            set={setPhone}
          />
          <InputField
            label="Message"
            type="text"
            id="message"
            value={message}
            set={setMessage}
          />
          <button className="font-bold bg-white px-4 py-3 md:w-fit rounded-full text-secondary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}