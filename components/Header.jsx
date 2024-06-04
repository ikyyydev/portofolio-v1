import Link from "next/link";
import React from "react";

// Components
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Ikyy<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Dekstop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
