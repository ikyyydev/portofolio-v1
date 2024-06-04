"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Components
import Stairs from "./Stairs";
const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none flex z-40">
          <Stairs />
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
          }}
          className="h-screen w-screen bg-primary fixed top-0 pointer-events-none"
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
