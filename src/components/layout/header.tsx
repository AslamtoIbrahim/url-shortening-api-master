import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import { Sidebar } from "./sidebar";

type HeaderProps = React.ComponentProps<'header'> & { className?: string; }


function Header({ className, ...props }: HeaderProps) {
  return <header className={cn('p-4 max-w-7xl mx-auto md:p-8 flex items-center justify-between md:justify-start md:gap-4', className)} {...props}>
    <Logo />
    <nav className="hidden md:flex md:justify-between w-full">
      <div>
        <Button variant={'link'} className="text-foreground/60 hover:text-foreground">
          Features
        </Button>
        <Button variant={'link'} className="text-foreground/60 hover:text-foreground">
          Pricing
        </Button>
        <Button variant={'link'} className="text-foreground/60 hover:text-foreground">
          Resources
        </Button>
      </div>
      <div>
        <Button variant={'ghost'} className="hover:bg-transparent hover:text-foreground/60 cursor-pointer">
          Login
        </Button>
        <Button className="rounded-3xl cursor-pointer">
          Sign Up
        </Button>
      </div>
    </nav>
    <Sidebar />
  </header>
}


export default Header;