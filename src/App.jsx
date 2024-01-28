import React,{useState, useEffect} from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './components/header/navItems.scss'
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
  const [mode,setMode] = useState('dark');
  
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <Header mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route path="/" element={<Home mode={mode} projects={projects}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/blog" element={<Blog mode={mode}/>} />
        <Route path="/skills" element={<Skills mode={mode}/>} />
        <Route path="/projects" element={<Projects mode={mode} projects={projects}/>} />
        <Route path="/contact" element={<Contact mode={mode}/>} />
      </Routes>
      <Footer mode={mode}/>
    </BrowserRouter>
  )
}

export default App
