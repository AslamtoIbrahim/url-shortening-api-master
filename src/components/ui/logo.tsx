import { cn } from "@/lib/utils";

type LogoProps = React.ComponentProps<'div'> & { className?: string;}


function Logo({ className, ...props }: LogoProps) {
  return <div className={cn('', className)} {...props}>
    <img className="w-24 md:w-auto" src="/images/logo.svg" alt="" />
</div>
}


export default Logo;