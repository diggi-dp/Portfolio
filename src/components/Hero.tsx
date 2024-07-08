import React from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/magic-button';
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Spotlight } from './ui/Spotlight';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="pb-4 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.1]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="mx-auto max-w-80 text-xs uppercase tracking-widest text-blue-100">
            WELCOME TO MY DIGITAL SPACE
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting Intuitive and Engaging User Experiences"
          />
          <p className="mb-4 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-sm text-transparent md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Digpal Singh Mandloi - Your Go-to Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap">
            <MagicButton
              title="Contact me Here"
              icon={<FaArrowRightLong size={22} />}
              position="right"
            />
            <MagicButton
              title="Download CV"
              icon={<FaCloudDownloadAlt size={22} />}
              position="left"
            />
            <Link
              className="h-13 w-13 borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:200%_100%] p-4 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 md:mt-9 dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/digpal-singh-mandloi-91b865268/"
              target="_blank"
            >
              <FaLinkedin size={22} color="#3178C6" />
            </Link>
            <Link
              className="h-13 w-13 borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:200%_100%] p-4 text-gray-700 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 md:mt-9 dark:bg-white/10 dark:text-white/60"
              href="https://github.com/diggi-dp"
              target="_blank"
            >
              <FaGithub size={22} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
