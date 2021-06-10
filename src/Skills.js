import './Skills.css'

const skills = [
  'HTML5',
  'CSS3',
  'Pug',
  'Sass',
  'JavaScript',
  'TypeScript',
  'CoffeeScript',
  'React',
  'Node.js',
  'Webpack',
  'Rollup',
  'Gulp',
  'Python',
  'Flask',
  'Ruby',
  'C#',
  'Java',
  'C/C++',
  'PHP',
  'Linux',
  'Terminal',
  'MySQL',
  'SQLite',
  'Firebase',
  'Git',
  'GitHub',
  'Heroku',
]

function SkillView({ skill }) {
  return (
    <div className="SkillView">
      {skill}
    </div>
  )
}

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="SkillList">
        {skills.map(skill => (
          <SkillView skill={skill} key={skill} />
        ))}
      </div>
    </section>
  )
}
