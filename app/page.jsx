/* eslint-disable react/no-unescaped-entities */
import Photo from "@/components/Photo";
import SocialMedia from "@/components/SocialMedia";
import Statistik from "@/components/Statistik";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'am <br />{" "}
              <span className="text-accent">Rifki Jaya Afandi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              I Excel at crafting elegan digital experiences and i am proficient
              in several programming language and technology.
            </p>
            {/* btn and social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href={"/project"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>See project</span>
                  <CiCircleChevRight className="text-2xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <SocialMedia
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Statistik />
    </section>
  );
};

export default Home;
