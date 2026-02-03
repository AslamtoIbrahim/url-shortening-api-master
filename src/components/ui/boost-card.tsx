import { cn } from "@/lib/utils";
import { Button } from "./button";

type BootsCardProps = React.ComponentProps<'div'> & { className?: string; }


function BootsCard({ className, ...props }: BootsCardProps) {
    return <div className={cn('bg-boost md:bg-boost-desk flex flex-col justify-center items-center gap-4 px-6 py-18 space-y-4', className)} {...props}>
        <h3 className="font-bold text-2xl text-background">Boost your links today</h3>
        <Button className="rounded-3xl text-lg px-8 py-6 font-semibold">
            Get Started
        </Button>
    </div>
}


export default BootsCard;