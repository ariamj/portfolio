import { Hero } from '@/components/hero'
import { ProjectCard } from '@/components/project-card'
import { Brush, PlayIcon, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

import fish_animation from '@/assets/images/Fish_Animation.gif'
import jellyfish_animation from '@/assets/images/Jellyfish_Animation.gif'
import harmonic_hustle_thumbnail from '@/assets/images/harmonic_hustle_thumbnail.png'
import portfolio_thumbnail from '@/assets/images/portfolio_thumbnail.png'
import cat_animation_thumbnail from '@/assets/images/cat_animation_thumbnail.png'
import ceramics_timeline_thumbnail from '@/assets/images/ceramics_timeline_thumbnail.png'
import big_2_thumbnail from '@/assets/images/big_2_thumbnail.png'
import { Marquee } from '@/components/ui/marquee'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

function Home() {

//   const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const projects = [
    {
      title: "Harmonic Hustle",
      description: "A team-developed rhythm-based game built with C++ and OpenGL using the Entity-Component-System (ECS) pattern. The game features multiple interactive scenes, key mapping, audio integration, and theme-consistent user interfaces. My contributions focused primarily on implementing dynamic text rendering with the FreeType library, developing game logic, and helping plan and map out UI scenes. I also contributed to JSON-based game state persistence and other gameplay functionality.",
      mediaSrc: "https://youtube.com/embed/lfx6yT8nD4E",
      thumbnailSrc: harmonic_hustle_thumbnail,
      thumbnailAlt: "Harmonic Hustle Trailer",
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
      title: "Cat Animation",
      description: "An interactive 3D animation created with Three.js as part of an animation course. The project features a 3D cat with animations for standing, sitting, and walking, culminating in the cat pushing a ball off a cliff. I explored materials, textures, 3D rendering, and animation while learning how interactive 3D content can be created for the web.",
      mediaSrc: "https://youtube.com/embed/x448crcECJ8",
      thumbnailSrc: cat_animation_thumbnail,
      thumbnailAlt: "Cat Animation",
      image: false,
    },
    {
      title: "Ceramics Timeline Website",
      description: "An interactive website exploring key moments in the history of ceramics through a visual timeline. I designed the UI/UX and used AI-assisted development tools to accelerate the frontend implementation. I iteratively refined both the design and code manually to match my intended visual direction and user experience, exploring how AI can be incorporated into a modern frontend development workflow.",
      mediaSrc: ceramics_timeline_thumbnail,
      thumbnailSrc: ceramics_timeline_thumbnail,
      thumbnailAlt: "Ceramics Timeline thumbnail",
      image: true,
      links: ["https://ceramics-timeline.netlify.app/"],
      githubLink: "https://github.com/ariamj/Annoted-Ceramics-Timeline",
    },
    {
      title: "Big 2 Game",
      description: "A Java implementation of the card game Big 2 with a custom graphical interface built using Swing. The project involved designing an interactive interface for two-player gameplay, including turn management, visual card tracking, and game state transitions. Implemented JSON-based data persistence to allow players to save and resume games, and used JUnit to test the game logic across different possible outcomes.",
      mediaSrc: "https://youtube.com/embed/UtmRNijrMRI",
      thumbnailSrc: big_2_thumbnail,
      thumbnailAlt: "Big 2 Game Demo",
      image: false,
      githubLink: "https://github.com/ariamj/Big2-Game",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website designed and developed to showcase my projects, technical experience, and artwork. Built with React, Vite, and TypeScript, with a focus on creating a visually engaging and responsive experience while maintaining clear navigation and presentation.",
      mediaSrc: portfolio_thumbnail,
      thumbnailSrc: portfolio_thumbnail,
      thumbnailAlt: "Portfolio Website thumbnail",
      image: true,
      links: ["https://ariaj-portfolio.vercel.app/"],
      githubLink: "https://github.com/ariamj/portfolio",
    },
    {
      title: "Fish Animation",
      description: "A hand-drawn animation created in Procreate exploring frame-by-frame animation and movement. The animation depicts a koi fish swimming through an underwater environment.",
      mediaSrc: fish_animation,
      thumbnailSrc: fish_animation,
      thumbnailAlt: "Fish Animation",
      image: true,
    },
    {
      title: "Jelly Fish Animation",
      description: "A hand-drawn animation created in Procreate exploring a continuous looping animation. Multiple jellyfish float and drift across an underwater scene in different directions, creating a continuous looping animation.",
      mediaSrc: jellyfish_animation,
      thumbnailSrc: jellyfish_animation,
      thumbnailAlt: "Jelly Fish Animation",
      image: true,
    },
  ]

  const artfolioFeatures = [
    {
      src: "/images/art_gallery/roses_wc.jpeg",
      alt: "Roses Watercolor"
    },
    {
      src: "/images/art_gallery/forest_wc.jpeg",
      alt: "Forest Watercolor"
    },
    {
      src: "/images/art_gallery/river_wc.jpeg",
      alt: "River Watercolor"
    },
    {
      src: "/images/art_gallery/birds_wc.jpeg",
      alt: "Birds Watercolor"
    },
    {
      src: "/images/art_gallery/bedroom_marker.jpeg",
      alt: "Bedroom Marker"
    },
    {
      src: "/images/art_gallery/xmas_card.jpeg",
      alt: "Christmas Card"
    },
    {
        src: "images/art_gallery/red_glitter_gown.png",
        alt: "Red Glitter Gown"
    }
  ]

  const artfolioBentoGrid = {
    Icon: Brush,
    name: "Artfolio",
    description: "A collection of my art and design work, including digital and traditional illustrations, graphic design projects, and more.",
    href: "/artfolio",
    cta: "View Artfolio",
    className: "glass col-span-3 mx-16 my-8",
    background: (
      <Marquee
        pauseOnHover
        className="absolute bg-transparent top-10 [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] [--duration:20s]"
      >
        {artfolioFeatures.map((img, index) => (
          <figure
            key={index}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
            >
              <figcaption className="sr-only">{img.alt}</figcaption>
              <div className={cn(
                "mb-4 break-inside-avoid overflow-hidden rounded-xl",
                "border-gray-950/[.1] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              )}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-auto w-full object-cover transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </figure>
        ))}
      </Marquee>
    )
  }

  return (
    <div>
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
      <div className="relative h-64 overflow-visible">
        <InteractiveGridPattern
          className={cn(
              "[mask-image:radial-gradient(450px_circle_at_center,black,transparent)]",
              "inset-x-[-25%] inset-y-[-40%] -skew-y-12",
              "absolute -inset-y-32 -inset-x-64 h-[calc(100%+16rem)]"
          )}
          width={60}
          height={60}
          squaresClassName="hover:fill-white/20"
        />
      </div>
      <BentoGrid>
        <BentoCard {...artfolioBentoGrid} />
      </BentoGrid>
    </div>
  )
}

export default Home
