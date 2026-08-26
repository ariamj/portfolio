import './App.css'
import { Hero } from './components/hero'
import { ProjectCard } from './components/project-card'
import auroras from '@/assets/images/Auroras_sig.png'

function App() {

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div className="bg-black">
      <Hero />
      <div className="grid grid-cols-1 gap-8 p-8">
        <ProjectCard
          title="Project 1"
          description={description}
          videoSrc={auroras}
          thumbnailSrc={auroras}
          thumbnailAlt="Project 1 thumbnail"
         />
        <ProjectCard
          title="Project 2"
          description={description}
          videoSrc={auroras}
          thumbnailSrc={auroras}
          thumbnailAlt="Project 2 thumbnail"
          right
         />
      </div>
    </div>
  )
}

export default App
