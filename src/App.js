// Copyright (c) 2021 Ivan Zadvornov

import NavigationBar from './NavigationBar'
import Header from './Header'
import Introduction from './Introduction'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
