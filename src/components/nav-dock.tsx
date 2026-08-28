import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Dock, DockIcon } from '@/components/ui/dock'
import { RiBrushLine, RiCloseLargeLine, RiGithubLine, RiLinkedinLine, RiMenuLine } from '@remixicon/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import { House } from 'lucide-react'

export function NavDock() {
    const [openDock, setOpenDock] = React.useState(false)

    const handleDockToggle = () => {
        setOpenDock(!openDock)
    }

    const dockItems = [
        {
            icon: <House className="size-4 text-white" />,
            label: "Home",
            href: "/",
            external: false
        },
        {
            icon: <RiBrushLine className="size-4 text-white" />,
            label: "Artfolio",
            href: "/artfolio",
            external: false
        },
        {
            icon: <RiGithubLine className="size-4 text-white" />,
            label: "GitHub",
            href: "https://github.com/ariamj",
            external: true
        },
        {
            icon: <RiLinkedinLine className="size-4 text-white" />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/arianna-joe",
            external: true
        }
    ]
    
    return (
        <div
            className="fixed top-0 right-0 m-4 px-4 z-100"
            onMouseEnter={() => setOpenDock(true)}
            onMouseLeave={() => setOpenDock(false)}
        >
            <TooltipProvider>
            <Dock
                direction="middle"
                className="transition-all duration-600"
            >
                {openDock && dockItems.map((item) => (
                    <DockIcon key={item.label}>
                        <Tooltip>
                            <a
                                href={item.href}
                                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                            >
                                <TooltipTrigger render={(
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="link"
                                        className={cn(
                                            "size-12 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/10",
                                        )}
                                    >
                                        {item.icon}
                                    </Button>
                                )}>
                                </TooltipTrigger>
                            </a>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger render={(
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="menu"
                                onClick={handleDockToggle}
                                className={cn(
                                    "size-12 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/10",
                                )}
                            >
                                {openDock ? <RiCloseLargeLine className="size-4 text-white" /> 
                                    : <RiMenuLine className="size-4 text-white" />
                                }
                            </Button>
                        )}>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{openDock ? "Close" : "Open"} Menu</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
            </TooltipProvider>
        </div>
    )
}