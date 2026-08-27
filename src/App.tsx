import './App.css'
import { Hero } from './components/hero'
import { ProjectCard } from './components/project-card'
import { NavDock } from './components/nav-dock'

import fish_animation from './assets/images/Fish_Animation.gif'
import jellyfish_animation from './assets/images/Jellyfish_Animation.gif'
import { PlayIcon, Trophy } from 'lucide-react'
import { cn } from './lib/utils'
import { InteractiveGridPattern } from './components/ui/interactive-grid-pattern'

function App() {

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const projects = [
    {
      title: "Harmonic Hustle",
      description: description,
      mediaSrc: "https://youtube.com/embed/lfx6yT8nD4E",
      thumbnailSrc: "src/assets/images/harmonic_hustle_thumbnail.png",
      thumbnailAlt: "Harmonic Hustle Demo thumbnail",
      links: [
        "https://www.students.cs.ubc.ca/~cs-427/games/",
        "https://youtube.com/watch?v=w3rflAO-Phg"
      ],
      linkIcons: [
        <Trophy />,
        <PlayIcon />
      ],
      githubLink: "https://github.com/ariamj/Harmonic-Hustle",
    },
    {
      title: "Portfolio Website",
      description: description,
      mediaSrc: "src/assets/images/portfolio_thumbnail.png",
      thumbnailSrc: "src/assets/images/portfolio_thumbnail.png",
      thumbnailAlt: "Portfolio Website thumbnail",
      image: true,
      links: ["https://ariaj-portfolio.vercel.app/"],
      githubLink: "https://github.com/ariamj/portfolio",
    },
    {
      title: "Cat Animation",
      description: description,
      mediaSrc: "https://youtube.com/embed/x448crcECJ8",
      thumbnailSrc: "src/assets/images/cat_animation_thumbnail.png",
      thumbnailAlt: "Project 2 thumbnail",
      image: false,
    },
    {
      title: "Fish Animation",
      description: description,
      mediaSrc: fish_animation,
      thumbnailSrc: fish_animation,
      thumbnailAlt: "Project 3 thumbnail",
      image: true,
    },
    {
      title: "Jelly Fish Animation",
      description: description,
      mediaSrc: jellyfish_animation,
      thumbnailSrc: jellyfish_animation,
      thumbnailAlt: "Project 4 thumbnail",
      image: true,
    },
    {
      title: "Ceramics Timeline Website",
      description: description,
      mediaSrc: "src/assets/images/ceramics_timeline_thumbnail.png",
      thumbnailSrc: "src/assets/images/ceramics_timeline_thumbnail.png",
      thumbnailAlt: "Ceramics Timeline thumbnail",
      image: true,
      links: ["https://ceramics-timeline.netlify.app/"],
      githubLink: "https://github.com/ariamj/Annoted-Ceramics-Timeline",
    },
    {
      title: "Big 2 Game",
      description: description,
      mediaSrc: "https://youtube.com/embed/UtmRNijrMRI",
      thumbnailSrc: "src/assets/images/big_2_thumbnail.png",
      thumbnailAlt: "Big 2 Game thumbnail",
      image: false,
      githubLink: "https://github.com/ariamj/Big2-Game",
    },
  ]

  return (
    <div className="bg-black">
      <Hero />
      <div className="min-h-32" />
      <div className="grid grid-cols-1 gap-16 p-6 md:p-16">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            mediaSrc={project.mediaSrc}
            thumbnailSrc={project.thumbnailSrc}
            thumbnailAlt={project.thumbnailAlt}
            image={project.image}
            links={project.links}
            linkIcons={project.linkIcons}
            githubLink={project.githubLink}
            key={index}
            right={index % 2 !== 0}
          />
        ))}
      </div>
      <div className="min-h-32">
        <InteractiveGridPattern
          className={cn(
              "[mask-image:radial-gradient(450px_circle_at_center,black,transparent)]",
              "inset-x-[-25%] inset-y-[-40%] -skew-y-12",
              "relative z-20 -top-100"
          )}
          width={60}
          height={60}
          squaresClassName="hover:fill-white/20"
        />
      </div>
      <NavDock />
    </div>
  )
}

export default App
