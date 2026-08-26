import './App.css'
import { Hero } from './components/hero'
import { ProjectCard } from './components/project-card'
import auroras from './assets/images/Auroras_sig.png'
import { NavDock } from './components/nav-dock'

function App() {

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const projects = [
    {
      title: "Project 1",
      description: description,
      videoSrc: auroras,
      thumbnailSrc: auroras,
      thumbnailAlt: "Project 1 thumbnail",
    },
    {
      title: "Project 2",
      description: description,
      videoSrc: auroras,
      thumbnailSrc: auroras,
      thumbnailAlt: "Project 2 thumbnail",
    },
    {
      title: "Project 3",
      description: description,
      videoSrc: auroras,
      thumbnailSrc: auroras,
      thumbnailAlt: "Project 3 thumbnail",
    }
  ]

  return (
    <div className="bg-black">
      <Hero />
      <div className="min-h-32" />
      <div className="grid grid-cols-1 gap-16 p-16">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            videoSrc={project.videoSrc}
            thumbnailSrc={project.thumbnailSrc}
            thumbnailAlt={project.thumbnailAlt}
            right={index % 2 !== 0}
          />
        ))}
      </div>
      <NavDock />
    </div>
  )
}

export default App
