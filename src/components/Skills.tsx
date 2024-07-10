import { GiSkills } from 'react-icons/gi';
import BlockRenderer from './ui/block-render';
import { SkillsData } from '@/lib/data';

const Skills = () => {
  return (
    <div id="skills" className="mx-auto max-w-md px-4 py-12 md:max-w-3xl">
      <h2 className="mb-10 flex items-center justify-center text-3xl font-bold">
        Technical Skills
        <span className="pl-3">
          <GiSkills size={30} color="#fbd38d" />
        </span>
      </h2>
      <BlockRenderer Skills={SkillsData} />
    </div>
  );
};

export default Skills;
