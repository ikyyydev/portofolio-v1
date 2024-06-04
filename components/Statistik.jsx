"use client";

import CountUp from "react-countup";

const statistic = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 16,
    text: "Project complete",
  },
  {
    num: 12,
    text: "Technology mastered",
  },
  {
    num: 246,
    text: "Code commits",
  },
];

const Statistik = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statistic.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="font-extrabold text-4xl xl:text-6xl"
                />
                <p
                  className={`${
                    item.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistik;
