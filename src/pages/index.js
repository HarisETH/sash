import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import * as Icon from "react-feather";

import resume from "./resume";
import React, { PropsWithChildren } from "react";

const Home = () => {
  return (
    <main className="flex flex-col w-full text-gray-400 items-center gap-10 justify-center h-full py-24">
      <div className="h-48 text-black w-52 rounded-full">
        <img src="https://i.pinimg.com/originals/97/05/7c/97057c70bc6dfcd8706a6dc4b2f811d2.png" alt="" />
      </div>
      <h3 className="text-3xl font-bold">0xp4atcher</h3>
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Welcome to my portfolio & blog website!</p>
        <div className="icon-group flex justify-between ">

          <a href=""><Icon.Mail /></a>
          <a href=""><Icon.GitHub /></a>
          <a href=""><Icon.Twitter /></a>
          <a href=""><Icon.Linkedin /></a>
          <a href=""><Icon.Instagram /></a>
          

        </div>
      </div>

      <div className="flex justify-center gap-6 ">
        <Link href="/resume" className="hover:text-green-600">resume.md</Link>
        <Link href="/whoami" className="hover:text-green-600">whoami.md </Link>
        <Link href="/projects" className="hover:text-green-600">projects.md</Link>
      </div>
    </main>
  );
};
export default Home;
