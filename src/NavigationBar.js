// Copyright (c) 2021 Ivan Zadvornov

import './NavigationBar.css'
import { useRef } from 'react'

export default function NavigationBar() {
  const navRef = useRef(null)

  const smoothScroll = (event) => {
    event.preventDefault()
    const href = event.target.getAttribute('href')
    const element = document.querySelector(href)

    if (!element && process.env.NODE_ENV === 'development') {
      console.warning(`Could not find element ${href}`)
    }

    if (element) {
      const navHeight = navRef.current?.offsetHeight
      window.scrollTo({
        top: Math.max(0, document.querySelector(href).offsetTop - navHeight),
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav ref={navRef}>
      <h2 className="shown">Ivan Teplov</h2>
      
      <a onClick={smoothScroll} href="#skills">Skills</a>
      <a onClick={smoothScroll} href="#projects">Projects</a>
      <a onClick={smoothScroll} className="button button-primary" href="#contact">Contact</a>
    </nav>
  )
}

