import { MasonryImageList } from "@/components/ui/image-list";
import { VideoText } from "./ui/video-text";

import auroraVideo from "@/assets/images/4910852_Aurora_Borealis_Northern_1280x720.mp4";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Dock, DockIcon } from "./ui/dock";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Artfolio() {
    const artGalleryImages = [
        "Auroras_dig.png",
        "Bulbasaur_dig.png",
        "bedroom_marker.jpeg",
        "bike_mix.jpeg",
        "birds_wc.jpeg",
        "car_interior_char.jpeg",
        "eye_char.jpeg",
        "fashion_green_dress_dig.jpeg",
        "forest_wc.jpeg",
        "gate_charcoal.jpeg",
        "red_glitter_gown.png",
        "grendel_char.jpeg",
        "house_sketch.jpeg",
        "instagram.jpeg",
        "mansion_int_deg.jpeg",
        "mansion_landscape_int_deg.jpeg",
        "marie_antoniette.jpeg",
        "metropolis_ball_char.jpeg",
        "portrait_dig.jpeg",
        "red_flower_wc.jpeg",
        "river_wc.jpeg",
        "rose_cs.jpeg",
        "roses_wc.jpeg",
        "shell_wc.jpeg",
        "small_flowers_wc.jpeg",
        "tower_marker.jpeg",
        "xmas_card.jpeg"
    ];
    
    return (
        <div className="mx-6 md:mx-16">
            <div
                className={cn(
                    "[mask-image:linear-gradient(0deg,transparent,black)]",
                    "absolute inset-0 min-h-[90vh] blur-xs z-10"
                )}
            />
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(650px_circle_at_center,black,transparent)]",
                    "inset-x-[5%] inset-y-[-20%] h-[125%] skew-y-12",
                    "absolute z-20"
                )}
                width={60}
                height={60}
                squaresClassName="hover:fill-white/20"
            />
            <div className="relative w-full overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
                <VideoText src={auroraVideo} className="h-[25vh] md:h-[50vh] w-full object-cover px-6 md:px-16" autoPlay loop muted>
                    ARTFOLIO
                </VideoText>
            </div>
            <MasonryImageList
                images={artGalleryImages.map((img) => ({
                    src: `/images/art_gallery/${img}`,
                    alt: img.split(".")[0].replace(/_/g, " ")
                }))}
            />
            <div className="fixed top-0 left-0 m-4 px-4 z-100 hidden md:flex items-center justify-center">
                <Dock
                    direction="middle"
                    className="border-none rounded-full transition-all duration-600"
                >
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger render={(
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="back"
                                    className={cn(
                                        "size-12 rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/10",
                                    )}
                                >
                                    <Link to="/"><ArrowLeft className="size-4 text-white" /></Link>
                                </Button>
                            )}>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Back</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </div>
        </div>
    )
}