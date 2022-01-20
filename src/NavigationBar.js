// Copyright (c) 2021-2022 Ivan Teplov

import './NavigationBar.scss'

export default function NavigationBar() {
  return (
    <nav className="background-background">
      <h2 className="shown">Ivan Teplov</h2>

      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a className="button-primary" href="#contact">Contact</a>
    </nav>
  )
}

