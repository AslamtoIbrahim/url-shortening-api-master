import { cn } from "@/lib/utils";

type StaticsCardProps = React.ComponentProps<'div'> & {
    className?: string;
    src: string;
    title: string;
    description: string
}


function StaticsCard({ className, src, title, description, ...props }: StaticsCardProps) {
    return <div className={cn('bg-background rounded p-6 pt-16 relative md:w-60 md:h-60 xl:w-80 xl:h-64', className)} {...props}>
        <div className="bg-secondary size-fit p-4 rounded-full absolute -top-8 left-1/2 -translate-x-1/2">
            <img src={src} alt="statics card" />
        </div>
        <div className="space-y-4">
            <h3 className="font-semibold text-2xl font-sans md:text-xl ">{title}</h3>
            <p className="text-foreground/50 font-medium md:text-sm">{description}</p>
        </div>
    </div>
}


export default StaticsCard;