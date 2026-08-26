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
        <Card className="relative z-0 hover:z-10 focus-within:z-40 w-full md:h-[50vh] bg-transparent text-white/80 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 p-4">
            <div className="glass absolute inset-0 -z-10 pointer-events-none" />
            <div className="order-1 w-full p-2 md:order-none">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <Card className={cn(
                "order-2 w-full max-h-[85%] bg-transparent flex items-center justify-center md:order-none",
                right ?  "md:col-start-1 md:row-span-3 md:row-start-1" : "md:col-start-2 md:row-span-3 md:row-start-1"
            )}>
                <HeroVideoDialog
                className="block dark:hidden w-[105%]"
                animationStyle="from-center"
                videoSrc={videoSrc}
                thumbnailSrc={thumbnailSrc}
                thumbnailAlt={thumbnailAlt}
                />
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
                <Button variant="outline" className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"><RiPlayLine /></Button>
                <Button variant="outline" className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"><RiLinksLine /></Button>
                <Button variant="outline" className="cursor-pointer bg-transparent hover:bg-white/10 hover:text-white"><RiGithubLine className="h-4 w-4" /></Button>
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