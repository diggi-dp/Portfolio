# Personal Portfolio

Welcome to my personal portfolio website! Here, you can learn more about me, my skills, my work experience, and my projects.

## Table of Contents

- [About](#about)
- [Skills](#skills)
- [Experience](#experience)
- [Projects](#projects)
- [Contact](#contact)

## About

Hi there! I'm a software engineer with a passion for building web applications using modern technologies. I have experience working with a variety of front-end and back-end frameworks, including React, Node.js, and Next.js.

## Skills

Here are some of the skills I have:

<div className="flex flex-wrap gap-4">
  {SkillsData.map((skill) => (
    <div key={skill.name} className="flex items-center gap-2">
      <span>{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  ))}
</div>

## Experience

Here is a list of my work experience:

<div className="flex flex-col gap-4">
  {experiencesData.map((experience) => (
    <div key={experience.title} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>{experience.icon}</span>
        <span>{experience.title}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>{experience.company}</span>
        <span>{experience.date}</span>
      </div>
      <ul className="list-disc list-inside">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

## Projects

Here are some of the projects I've worked on:

<div className="flex flex-col gap-4">
  {ProjectsData.map((project) => (
    <div key={project.name} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>{project.techStack.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}</span>
        <span>{project.name}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>{project.description}</span>
        <span>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </span>
      </div>
      <ul className="list-disc list-inside">
        {project.techStack.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

## Contact

Want to get in touch? You can reach me at [digpalsingh@gmail.com](mailto:digpalsingh@gmail.com).

## License

This project is licensed under the MIT License.
