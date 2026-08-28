import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "./border-beam";
import { cn } from "@/lib/utils";

interface MasonryImageListProps {
  images: { src: string; alt: string }[];
  classname?: string;
}

export function MasonryImageList({ images, classname }: MasonryImageListProps) {

    return (
        <div className={cn(
            "columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [column-fill:_balance]",
            classname
        )}>
        {images.map((img, i) => (
            <BlurFade key={i} delay={0.10 + i * 0.02} inView className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-slate-800">
                <img
                src={img.src}
                alt={img.alt}
                className="h-auto w-full object-cover transition-opacity duration-300 hover:opacity-90"
                />
                <BorderBeam
                    duration={32}
                    size={300}
                    borderWidth={1.5}
                    className="from-transparent via-blue-500 to-transparent"
                />
                <BorderBeam
                    duration={32}
                    size={300}
                    delay={16}
                    borderWidth={1.5}
                    className="from-transparent via-green-500 to-transparent"
                />
            </BlurFade>
        ))}
        </div>
    );
}