import auroras from '@/assets/images/Auroras_sig.png'
import { InteractiveGridPattern } from './ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'

export function Hero() {
    return (
        <div className="isolate min-h-screen flex w-full items-center justify-start overflow-hidden px-8 pb-32 md:px-16 lg:px-32">
            <div
                style={{ backgroundImage: `url(${auroras})` }}
                className={cn(
                    "[mask-image:linear-gradient(0deg,transparent,black)]",
                    "absolute inset-0 min-h-screen blur-xs z-10 bg-background bg-cover bg-center bg-[100%_100%] bg-no-repeat"
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
            <h1 className="relative z-30 text-white text-4xl font- md:text-6xl !text-white">Welcome to my Portfolio!</h1>
        </div>
    )
}