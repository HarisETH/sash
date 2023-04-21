import Image from "next/image";

import Nav from "@/components/Nav";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
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

      <footer className="flex justify-between mt-12 w-3/4">
        <p>© 2021 - 2023</p>
        <div className="flex gap-4">
          <a href="">license</a>
          <a href="">rss feed</a>
          
        </div>
      </footer>
    </main>
  );
};
export default Home;
