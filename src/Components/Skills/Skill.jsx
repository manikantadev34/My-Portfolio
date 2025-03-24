import React from 'react';
import './Skill.css';

const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    {name:'Node js',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'},
    {name:'Express js',logo:'https://media.licdn.com/dms/image/v2/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=4jKdvoBWv587Ek7xruyjjOaKoMjvAKw3eAN4MKlJZPc'}
];

export default function Skill() {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className='skills-grid'>
        {skills.map((skill, index) => (
          <div key={index} className='skill-card'>
            <img src={skill.logo} alt={skill.name} className='skill-logo' />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
