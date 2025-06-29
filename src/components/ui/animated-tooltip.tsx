"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

/**
 * AnimatedTooltip is a component that displays a list of items with hoverable
 * tooltips. Each item consists of an image, name, and designation. When an
 * item is hovered over, a tooltip appears above it with a spring animation.
 * The tooltip shows the name and designation of the item.
 *
 * Props:
 * - items: An array of objects representing the items to display. Each object
 *   should have the following properties:
 *   - id: A unique identifier for the item.
 *   - name: The name of the item, displayed in the tooltip.
 *   - designation: The designation of the item, displayed in the tooltip.
 *   - image: The URL of the image to display for the item.
 * - prefix (optional): A string to prefix the key for each item.
 *
 * The component uses Framer Motion for animations and provides an interactive
 * experience with hover effects and animated tooltips.
 */

interface Item {
  id: number;
  name: string;
  designation: string;
  image: string | StaticImageData;
}

const AnimatedTooltip = ({
  items,
  prefix = "",
}: {
  items: Item[];
  prefix?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const halfWidth = (event.currentTarget as HTMLElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={`${prefix}-${item.id}`}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-20 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold  text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={200}
            src={item.image}
            alt={item.name}
            className="object-cover cursor-pointer !m-0 !p-0 object-top rounded-full h-10 w-10 border-[5px] group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedTooltip;