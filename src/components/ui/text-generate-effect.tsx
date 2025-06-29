// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "motion/react";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
// }) => {
//   const [scope, animate] = useAnimate();
//   let wordsArray = words.split(" ");
//   useEffect(() => {
//     animate(
//       "span",
//       {
//         opacity: 1,
//         filter: filter ? "blur(0px)" : "none",
//       },
//       {
//         duration: duration ? duration : 1,
//         delay: stagger(0.2),
//       }
//     );
//   }, [scope.current]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             <motion.span
//               key={word + idx}
//               className=" opacity-0"
//               style={{
//                 filter: filter ? "blur(10px)" : "none",
//               }}
//             >
//               {word}{" "}
//             </motion.span>
//           );
//         })}
//       </motion.div>
//     );
//   };

//   return (
//     <div className={cn("font-bold", className)}>
//       <div className="mt-4">
//         <div className=" text-2xl leading-snug tracking-wide">
//           {renderWords()}
//         </div>
//       </div>
//     </div>
//   );
// };


// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
// }) => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, {
//     once: true,
//     amount: 0.1,
//   });

//   const wordsArray = words.split(" ");

//   return (
//     <div className={cn("font-bold", className)} ref={containerRef}>
//       <div className="mt-4">
//         <div className=" leading-snug tracking-wide">
//           {wordsArray.map((word, idx) => (
//             <motion.span
//               key={word + idx}
//               initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
//               animate={isInView ? { opacity: 1, filter: filter ? "blur(0px)" : "none" } : {}}
//               transition={{ duration, delay: idx * 0.2 }}
//               className="dark:text-white text-black"
//             >
//               {word}{" "}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.1,
  });

  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
              animate={isInView ? { opacity: 1, filter: filter ? "blur(0px)" : "none" } : {}}
              transition={{ duration, delay: idx * 0.2 }}
              className={cn( className)}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};