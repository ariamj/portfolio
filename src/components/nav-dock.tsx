import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Dock, DockIcon } from '@/components/ui/dock'
import { RiBrushLine, RiCloseLargeLine, RiGithubLine, RiLinkedinLine, RiMenuLine } from '@remixicon/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

export function NavDock() {
    const [openDock, setOpenDock] = React.useState(false)

    const handleDockToggle = () => {
        setOpenDock(!openDock)
    }

    const dockItems = [
        {
            icon: <RiBrushLine className="size-4 text-white" />,
            label: "Artfolio",
            href: "https://linkedin.com"
        },
        {
            icon: <RiGithubLine className="size-4 text-white" />,
            label: "GitHub",
            href: "https://github.com"
        },
        {
            icon: <RiLinkedinLine className="size-4 text-white" />,
            label: "LinkedIn",
            href: "https://linkedin.com"
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
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger render={(
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    // href=""
                                    aria-label="link"
                                    className={cn(
                                    // buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/10",
                                    )}
                                >
                                    {item.icon}
                                </Button>
                            )}>
                            </TooltipTrigger>
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