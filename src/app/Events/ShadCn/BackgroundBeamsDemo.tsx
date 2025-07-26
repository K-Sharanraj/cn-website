'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ParticleEffectWrapper } from "@/components/magicui/cool-mode";
import { Particles } from "@/components/magicui/particles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (

    <>
      <div className="relative flex lg:h-[460px] h-[20rem] mt-[70px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
        <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
          <div className="relative justify-center">
          </div>
        </span>

        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <ParticleEffectWrapper>
          <Button className="p-0 w-full h-full flex flex-col bg-white text-black hover:bg-white hover:text-black shadow-none cursor-pointer">
            <h1 style={{ lineHeight: 1.2 }} className="text-2xl text-black leading-9 md:text-8xl font-bold text-center">
              <div  className="flex items-center justify-center">
              <TextGenerateEffect
                words="Coming"
                className="lg:text-8xl md:text-2xl text-md text-black"
              />
              
              <TextGenerateEffect
                words="Soon"
                className="lg:text-8xl md:text-2xl text-md text-blue-500"
              />
             
              </div>
              

              
            </h1>
          </Button>
        </ParticleEffectWrapper>
      </div>
    </>
  );
}


