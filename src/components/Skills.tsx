import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { SiGraphql, SiNestjs, SiRedux } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={22} /> },
    { name: 'React', icon: <FaReact color="#61DAFB" size={22} /> },
    { name: 'Redux', icon: <SiRedux color="#764ABC" size={22} /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#000000" size={22} /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" size={22} /> },
    { name: 'GraphQL', icon: <SiGraphql color="#E10098" size={22} /> },
    { name: 'Nest.js', icon: <SiNestjs color="#E0234E" size={22} /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={22} /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={22} /> },
    { name: 'CSS', icon: <FaCss3 color="#1572B6" size={22} /> },
    { name: 'GIT', icon: <FaGitAlt color="#F05032" size={22} /> },
  ];

  return (
    <div className="mx-auto max-w-md px-4 py-12 md:max-w-3xl">
      <h2 className="mb-4 flex items-center justify-center text-3xl font-bold">
        Technical Skills{' '}
        <span className="pl-2">
          <GiSkills size={30} color="white" />
        </span>
      </h2>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:200%_100%] p-4 px-6 font-medium text-slate-400"
          >
            {skill.icon}
            <span className="ml-2 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
