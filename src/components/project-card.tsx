import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { BorderBeam } from "@/components/ui/border-beam";
import { RiGithubLine } from "@remixicon/react";
import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";

interface ProjectCardProps {
    title?: string;
    description?: string;
    mediaSrc: string;
    thumbnailSrc: string;
    thumbnailAlt?: string;
    image?: boolean;
    right?: boolean;
    links?: string[];
    linkIcons?: React.ReactNode[];
    githubLink?: string;
}

export function ProjectCard({
    title = "Project Title",
    description = "Project description...",
    mediaSrc,
    thumbnailSrc,
    thumbnailAlt = "Project thumbnail",
    image,
    right = false,
    links,
    linkIcons,
    githubLink,
}: ProjectCardProps) {
    const [isMediaOpen, setIsMediaOpen] = React.useState(false);

    return (
        <Card className={cn(
            "relative z-0 hover:z-10 focus-within:z-40 w-full md:h-[50vh] bg-transparent text-white/80 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 p-4",
            isMediaOpen ? "z-[90]" : "z-0 hover:z-10"
        )}>
            <div className="glass absolute inset-0 -z-10 pointer-events-none" />
            <CardTitle>
                <div className="order-1 w-full p-2 md:order-none">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
            </CardTitle>
            <Card className={cn(
                "order-2 w-full max-h-[85%] bg-transparent flex items-center justify-center md:order-none",
                right ?  "md:col-start-1 md:row-span-3 md:row-start-1" : "md:col-start-2 md:row-span-3 md:row-start-1"
            )}>
                <CardContent onClick={() => setIsMediaOpen(true)}>
                    <HeroVideoDialog
                    className="block dark:hidden w-[105%]"
                    animationStyle="from-center"
                    mediaSrc={mediaSrc}
                    thumbnailSrc={thumbnailSrc}
                    thumbnailAlt={thumbnailAlt}
                    image={image}
                    />
                </CardContent>
                {isMediaOpen && (
                    <div
                        className="fixed inset-0 z-[-50]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMediaOpen(false);
                        }}
                    >
                    </div>
                )}
            </Card>
            <div className="order-3 w-full p-2 md:order-none">
                <p className="text-justify py-2 text-white/80">
                {description}
                </p>
            </div>
            <div className={cn(
                "order-4 w-full flex gap-2 px-2 md:order-none",
                right ? "justify-end" : "justify-start"
            )}>
                {links && links.map((link, index) => (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        key={index}
                    >
                        <Button
                            variant="outline"
                            className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"
                        >
                            {linkIcons && linkIcons[index] ? linkIcons[index] : <SquareArrowOutUpRight />}
                        </Button>
                    </a>
                ))}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <Button
                            variant="outline"
                            className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"
                        >
                            <RiGithubLine />
                        </Button>
                    </a>
                )}
            </div>

            <BorderBeam
                duration={32}
                size={600}
                className="from-transparent via-blue-500 to-transparent"
            />
            <BorderBeam
                duration={32}
                size={600}
                delay={16}
                className="from-transparent via-green-500 to-transparent"
            />
        </Card>
    )
}