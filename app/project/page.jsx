"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack Web",
    title: "project 1",
    description:
      "MERN stack-based job portal for easily searching, applying, and finding your dream job quickly and efficiently.",
    stack: [
      { name: "node js" },
      { name: "express js" },
      { name: "Javascript" },
      { name: "react js" },
      { name: "mongo db" },
      { name: "tailwind css" },
    ],
    image: "/assets/projects/01-fullstack.png",
    live: "https://mern-jobportal.netlify.app/",
    github: "https://github.com/ikyyydev/mern-jobportalapp",
  },
  {
    num: "02",
    category: "frontend Web",
    title: "project 2",
    description:
      "a simple blogging platform with an attractive interface, perfect for users who want to share content easily.",
    stack: [{ name: "react js" }, { name: "javascript" }, { name: "css 3" }],
    image: "/assets/projects/02-frontend.png",
    live: "https://ikyy-blogapp.netlify.app/",
    github: "",
  },
  {
    num: "03",
    category: "frontend Web",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim laboriosam asperiores voluptates praesentium, numquam laudantium.",
    stack: [{ name: "wordpress" }, { name: "elementor" }],
    image: "/assets/projects/03-frontend.png",
    live: "https://ikyy-wp-mekanik.netlify.app/",
    github: "",
  },
  {
    num: "04",
    category: "frontend Web",
    title: "project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim laboriosam asperiores voluptates praesentium, numquam laudantium.",
    stack: [
      { name: "next js" },
      { name: "tailwind css" },
      { name: "typescript" },
      { name: "framer-motion" },
    ],
    image: "/assets/projects/04-frontend.png",
    live: "https://ikyy-works.netlify.app/",
    github: "https://github.com/ikyyydev/works-company",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* ouline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* project stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent capitalize">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] hover:cursor-pointer">
            <Swiper
              spaceBetween={30}
              slider
              slidesPerView={1}
              className="xl:h-[512px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-slate-200">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all xl:rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
