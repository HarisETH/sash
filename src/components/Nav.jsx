import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Icon } from "react-feather";
const BlinkDiv = () => {
  return <div className="h-6 w-3 bg-green-600 animate-pulse z-50"></div>;
};
import { HamburgerIcon } from "@chakra-ui/icons";

const Nav = ({ inter }) => {
  let variable = "";
  const router = useRouter();
  // Add Another condition whenever adding a new page down here
  if (router.pathname === "/resume") {
    variable = "resume.md";
  } else if (router.pathname === "/whoami") {
    variable = "whoami.md";
  } else if (router.pathname === "/projects") {
    variable = "projects.md";
  } else {
    variable = "";
  }

  const Mainer = () => {
    return (
      <div>
        {`> sashwin /`} <span className="text-red-600">{variable}</span>{" "}
      </div>
    );
  };

  return (
    <nav
      className={`flex items-center w-full justify-between ${inter.className}`}
    >
      <Link
        href="/"
        className={`text-xl text-gray-300 font-semibold flex gap-2 items-center`}
      >
        {" "}
        <Mainer /> <BlinkDiv />{" "}
      </Link>

      <Menu>
        <MenuButton className="p-1 rounded-lg hover:bg-gray-950">
          <HamburgerIcon color="white" w={8} h={8} />
        </MenuButton>
        <MenuList>
          <Link href="/resume">
            <MenuItem className="font-medium hover:bg-gray-200 transition-all ease-linear">
              Resume 📃
            </MenuItem>
          </Link>
          <Link href="/whoami">
            <MenuItem className="font-medium hover:bg-gray-200 transition-all ease-linear">
              WhoAmI 🦖
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </nav>
  );
};

export default Nav;
