import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BlinkDiv = () =>{
   return(
    <div className="h-6 w-3 bg-green-600 animate-pulse z-50"></div>
   )
}


const Nav = ({ inter }) => {
  let variable = "";
  const router = useRouter();
// Add Another condition whenever adding a new page down here
  if (router.pathname === "/resume") {
    variable = "resume.md";
  } else if (router.pathname === "/whoami") {
    variable = "whoami.md";
  }else if (router.pathname === "/projects") {
    variable = "projects.md";
  } else {
    variable = "";
  }
  

  const Mainer = () =>{
    return(
     <div>{`> sashwin /`} <span className="text-red-600">{variable}</span> </div>
    )
 }

  return (
    <nav className={`flex items-start w-full justify-between ${inter.className}`}>
      <Link href="/" className={`text-xl font-semibold flex gap-2 items-center`}> <Mainer /> <BlinkDiv/> </Link>
      
      <div className="gap-3 hidden md:flex">
        <Link href="/resume">Resume</Link>
        <Link href="/whoami">Who Am I </Link>
        <Link href="/">Back</Link>
      </div>

    </nav>
  );
};

export default Nav;
