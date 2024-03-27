import React,{useState, useEffect} from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './components/header/navItems.scss'
import { ThemeProvider } from './Context'
//pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Blog from './pages/blog/Blog'

//components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { projects } from './components/data/Data'

const App =() =>{

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home projects={projects}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects  projects={projects}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
