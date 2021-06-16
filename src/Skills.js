// Copyright (c) 2021 Ivan Zadvornov

import './Skills.css'

const skillGroups = {
  'Markup Languages': [
    'HTML5',
    'CSS3',
    'Sass',
    'Pug',
  ],
  'Programming Languages': [
    'JavaScript',
    'TypeScript',
    'CoffeeScript',
    'Python',
    'Ruby',
    'C#',
    'Java',
    'C/C++',
  ],
  'Frameworks': [
    'React',
    'Flask',
  ],
  'JavaScript Tools': [
    'Webpack',
    'Rollup',
    'Gulp',
    'ESLint',
    'Prettier',
  ],
  'Programming Tools': [
    'Git',
    'Linux Terminal',
  ],
  'Cloud Providers and Databases': [
    'Heroku',
    'Firebase',
    'MySQL',
    'SQLite',
    'PostgreSQL',
  ]
}

function SkillView({ skill }) {
  return (
    <div className="SkillView">
      {skill}
    </div>
  )
}

function SkillGroup({ groupName, skills }) {
  return (
    <div className="SkillGroup">
      <h3>{groupName}</h3>
      <div className="SkillList">
        {skills.map(skill => (
          <SkillView key={skill} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="SkillGroupList">
        {Object.keys(skillGroups).map(groupName => (
          <SkillGroup
            skills={skillGroups[groupName]}
            groupName={groupName}
            key={groupName}
          />
        ))}
      </div>
    </section>
  )
}
