import { cn } from "@/lib/utils";
// import { Backlight } from "./ui/backlight";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { HeroVideoDialog } from "./ui/hero-video-dialog";
import { BorderBeam } from "./ui/border-beam";
import { RiGithubLine, RiLinksLine, RiPlayLine } from "@remixicon/react";

interface ProjectCardProps {
    title?: string;
    description?: string;
    videoSrc: string;
    thumbnailSrc: string;
    thumbnailAlt?: string;
    right?: boolean;
}

export function ProjectCard({
    title = "Project Title",
    description = "Project description...",
    videoSrc,
    thumbnailSrc,
    thumbnailAlt = "Project thumbnail",
    right = false,
}: ProjectCardProps) {
    return (
        <Card className="relative z-0 hover:z-10 focus-within:z-40 w-full h-[50vh] bg-transparent text-white/80 grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-4 p-4">
            <div className="glass absolute inset-0 -z-10 pointer-events-none" />
            {right && (
                <Card className="bg-transparent max-h-[85%] flex items-center justify-center">
                    <HeroVideoDialog
                        className="block dark:hidden w-[105%]"
                        animationStyle="from-center"
                        videoSrc={videoSrc}
                        thumbnailSrc={thumbnailSrc}
                        thumbnailAlt={thumbnailAlt}
                    />
                </Card>
            )}
            <div id="proj-details" className="h-full flex flex-col gap-2">
                <div className="w-full flex-1 p-2">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-justify py-2">
                        {description}
                    </p>
                </div>
                <div className={cn(
                    "w-full flex-end flex gap-2 px-2",
                    right && "justify-end",
                )}>
                    <Button variant="outline" className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"><RiPlayLine /></Button>
                    <Button variant="outline" className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"><RiLinksLine /></Button>
                    <Button variant="outline" className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"><RiGithubLine className="h-4 w-4" /></Button>
                </div>
            </div>
            {!right && (
                <Card className="bg-transparent max-h-[85%] flex items-center justify-center">
                    <HeroVideoDialog
                        className="block dark:hidden w-[105%]"
                        animationStyle="from-center"
                        videoSrc={videoSrc}
                        thumbnailSrc={thumbnailSrc}
                        thumbnailAlt={thumbnailAlt}
                    />
                </Card>
            )}
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