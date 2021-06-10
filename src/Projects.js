// Copyright (c) 2021 Ivan Zadvornov

import './Projects.css'
import { faHtml5, faCss3, faJsSquare, faReact, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: "PomoDo",
    image: "/pomodo.png",
    description: "Powerful web application (PWA) for pomodoro timers made using pure HTML5, CSS3, and JavaScript",
    badges: [
      faHtml5,
      faCss3,
      faJsSquare,
    ],
    url: "https://ivteplo.github.io/pomodo",
    repo: "https://github.com/ivteplo/pomodo",
  },
  {
    title: "Todo app",
    image: "/todo.png",
    description: "Todo list app made with Firebase (Firestore, Firebase Auth, and Hosting), React, and Typescript",
    badges: [
      faReact,
      faJsSquare
    ],
    url: "https://todo-app-2a468.web.app/",
    repo: "https://github.com/ivteplo/todo"
  },
  {
    title: "Homepage",
    image: "/homepage.png",
    description: "Multiple-page website about me and my hobbies, made in HTML5, CSS3, JavaScript, and Bootstrap",
    badges: [
      faHtml5,
      faCss3,
      faJsSquare,
      faBootstrap,
    ],
    url: "https://ivteplo.github.io/homepage",
    repo: "https://github.com/ivteplo/homepage"
  },
  {
    title: "Snake game",
    image: "/snake.png",
    description: "Simple game, made with Python and PyGame library",
    badges: [
      faPython
    ],
    url: "",
    repo: "https://github.com/ivteplo/snake-pygame"
  },
  {
    title: "Newton's Cradle",
    image: "/newtonscradle.png",
    description: "Newton's cradle simulation using JavaScript, p5.js, and Matter.js",
    badges: [
      faHtml5,
      faJsSquare,
    ],
    url: "https://ivteplo.github.io/NewtonsCradle/",
    repo: "https://github.com/ivteplo/NewtonsCradle"
  },
]

function ProjectView({ project, ...props }) {
  const [isWide, setIsWide] = useState(false)
  const ref = useRef()

  useEffect(() => {
    window.addEventListener('resize', () => {
      const width = ref.current.clientWidth
      setIsWide(width > 600)
    })
  }, [])

  return (
    <div className={"ProjectView " + (isWide ? 'wide' : '')} ref={ref} {...props}>
      <img src={project.image} alt="Project screenshot" className="ProjectImage" />
      <div className="ProjectInfo">
        <h3 className="ProjectTitle">{project.title}</h3>
        <p className="ProjectDescription">{project.description}</p>
        <div className="ProjectBadges">
          {project.badges.map((badge, index) => (
            <FontAwesomeIcon icon={badge} key={index} />
          ))}
        </div>
        <div className="ProjectLinks">
          <a href={project.url} rel="noreferrer" target="_blank" className={"ProjectLink " + (project.url ? '' : 'hidden')}>Open website</a>
          <a href={project.repo} rel="noreferrer" target="_blank" className="ProjectLink">Source Code</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="ProjectList">
        {projects.map(project => (
          <ProjectView project={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}
