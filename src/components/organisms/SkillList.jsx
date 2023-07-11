import React from 'react';
import SkillCard from '../molecules/SkillCard';

const SkillList = ({skills}) => {
    return(
        <div className="px-16 grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-8">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
    );
};

export default SkillList