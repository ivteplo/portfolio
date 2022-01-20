// Copyright (c) 2021-2022 Ivan Teplov

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
