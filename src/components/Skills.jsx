import React from 'react'
import SkillList from './organisms/SkillList'


const skills = [
    {
      title: 'React',
      description: 'HyperText Markup Language',
      image: 'images/react.png',
    },
    {
      title: 'Tailwind',
      description: 'Cascading Style Sheets',
      image: 'images/tailwind.png',
    },
    {
      title: 'JavaScript',
      description: 'High-level programming language',
      image: 'images/node.png',
    },
    {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/bootstrap.svg',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/js.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/php.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/laravel.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/ci.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/flutter.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/sql.png',
      },
      
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/git.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/github.png',
      },
      {
        title: 'Bootstrap',
        description: 'High-level programming language',
        image: 'images/gitlab.jpg',
      },
    // Tambahkan keterampilan lainnya
  ];

function Skills() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl text-center font-bold mb-10 mt-10">My Skills</h1>
      <SkillList skills={skills} />
    </div>
  )
}

export default Skills