import React from 'react';
import { GrProjects } from 'react-icons/gr';
import { WobbleCard } from './ui/wobble-card';
import { ProjectsData } from '@/lib/data';
import { LinkPreview } from './ui/link-preview';

const Projects = () => {
  return (
    <div id="projects" className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-10 flex items-center justify-center text-3xl font-bold">
        Projects
        <span className="pl-3">
          <GrProjects size={26} color="#fbd38d" />
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {ProjectsData.map((project, index) => (
          <WobbleCard key={index} containerClassName="col-span-1 lg:w-full">
            <div className="">
              <h2 className="text-balance bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-left text-base font-semibold tracking-[-0.015em] md:text-xl lg:text-3xl">
                <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                  {project.name}
                </span>
              </h2>
              <p className="mt-4 text-left text-base/6 text-white">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap justify-between">
                <div className="flex flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="mb-2 mr-4">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <LinkPreview url={project.liveLink} width={120} height={60}>
                    Live Demo
                  </LinkPreview>
                </div>
              </div>
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
