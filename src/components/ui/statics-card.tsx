import { cn } from "@/lib/utils";

type StaticsCardProps = React.ComponentProps<'div'> & {
    className?: string;
    src: string;
    title: string;
    description: string
}

function StaticsCard({ className, src, title, description, ...props }: StaticsCardProps) {
    return (
        <div
            className={cn(
                "relative z-10 flex flex-col rounded bg-background p-6 pt-16",
                "min-h-[280px] md:min-h-[260px] max-w-sm",
                "text-center md:text-left",
                className
            )}
            {...props}
        >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-1/3 rounded-full bg-secondary p-5">
                <img src={src} alt={title} />
            </div>

            <h3 className="mb-4 text-xl font-bold">
                {title}
            </h3>

            <p className="text-sm leading-relaxed text-foreground/50 line-clamp-4">
                {description}
            </p>

        </div>
    )
}



export default StaticsCard;