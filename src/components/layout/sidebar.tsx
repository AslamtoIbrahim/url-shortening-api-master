import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'ghost'} className="md:hidden">
                    <Menu className="size-6" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Shortly</SheetTitle>
                    <Button variant={'link'} className="text-foreground/60 hover:text-foreground">
                        Features
                    </Button>
                    <Button variant={'link'} className="text-foreground/60 hover:text-foreground">
                        Pricing
                    </Button>
                    <Button variant={'link'} className="text-foreground/60 hover:text-foreground">
                        Resources
                    </Button>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">

                </div>
                <SheetFooter>
                    <Button variant={'ghost'} className="hover:bg-transparent hover:text-foreground/60 cursor-pointer">
                        Login
                    </Button>
                    <Button className="rounded-3xl cursor-pointer">
                        Sign Up
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
