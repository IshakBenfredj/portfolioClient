import Link from "next/link";
import React from "react";

export default function Logo({ notRes }) {
  return (
    <Link href={"/"} className="py-4">
      <img
        src="/logo/logo_dark.png"
        alt="Logo Dark"
        className="dark:block hidden w-52 logo-regular"
      />
      <img
        src="/logo/logo_light.png"
        alt="Logo Light"
        className="dark:hidden block w-52 logo-regular"
      />
      {/* <img
        src="/logo/logo_res_dark.png"
        alt="Responsive Logo Dark"
        className="hidden dark:block w-20 logo-responsive"
      />
      <img
        src="/logo/logo_res_light.png"
        alt="Responsive Logo Light"
        className="dark:hidden w-20 logo-responsive"
      /> */}
    </Link>
  );
}