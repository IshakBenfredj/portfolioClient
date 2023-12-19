import {
  FaFacebook,
  FaFontAwesomeFlag,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

export default function SocialMedia({ classes, size }) {
  const socialMedia = [
    {
      icon: <FaFacebook />,
      path: "https://web.facebook.com/profile.php?id=100012679398775",
    },
    {
      icon: <FaFontAwesomeFlag />,
      path: "https://web.facebook.com/IshakBenfredjdevloper",
    },
    {
      icon: <RiInstagramFill />,
      path: "https://www.instagram.com/ishak_benfredj/",
    },
    {
      icon: <IoMdMail />,
      path: "mailto:ishakbanfradje@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/ishak-benfredj-20a4b4226/",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/IshakBenfredj",
    },
    {
      icon: <FaYoutube />,
      path: "https://www.youtube.com/c/IshakBenfredj",
    },
  ];
  return (
    <div className={`flex gap-3 dark:text-white text-gray-800 mt-8 ${classes}`}>
      {socialMedia.map((item) => (
        <Link key={item.path} target={"_blank"} href={item.path} className="cursor-pointer text-2xl">
          {item.icon}
        </Link>
      ))}
    </div>
  );
}