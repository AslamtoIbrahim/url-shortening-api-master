import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Button } from "./button";

type ShortenCardProps = React.ComponentProps<'div'> & { className?: string; }


function ShortenCard({ className, ...props }: ShortenCardProps) {
    return <div className={cn('flex flex-col md:flex-row md:p-8  bg-shorten  gap-4 m-4 p-4  rounded-lg ', className)} {...props}>
        <Input placeholder="Shorten a link here..." className="py-5 bg-background font-medium" />
        <Button className="py-5 font-medium text-lg">Shorten It!</Button>
    </div>
}


export default ShortenCard;