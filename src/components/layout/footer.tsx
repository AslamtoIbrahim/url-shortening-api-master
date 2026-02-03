import React from "react"
import { cn } from "@/lib/utils"

type FooterProps = React.ComponentProps<"footer"> & {
  className?: string
}

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-foreground text-muted-foreground py-16",
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex flex-col items-center gap-12 text-center md:flex-row md:items-start md:justify-between md:text-left">

        {/* Logo */}
        <h2 className="text-3xl font-bold text-background">
          Shortly
        </h2>

        {/* Links */}
        <div className="flex flex-col gap-10 md:flex-row">

          <div>
            <h3 className="mb-4 font-semibold text-background">
              Features
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-primary">
                Link Shortening
              </li>
              <li className="cursor-pointer hover:text-primary">
                Branded Links
              </li>
              <li className="cursor-pointer hover:text-primary">
                Analytics
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-background">
              Resources
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-primary">
                Blog
              </li>
              <li className="cursor-pointer hover:text-primary">
                Developers
              </li>
              <li className="cursor-pointer hover:text-primary">
                Support
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-background">
              Company
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-primary">
                About
              </li>
              <li className="cursor-pointer hover:text-primary">
                Our Team
              </li>
              <li className="cursor-pointer hover:text-primary">
                Careers
              </li>
              <li className="cursor-pointer hover:text-primary">
                Contact
              </li>
            </ul>
          </div>

        </div>

        {/* Social icons */}
        <div className="flex gap-6">
          <img
            src="/images/icon-facebook.svg"
            alt="facebook"
            className="cursor-pointer brightness-0 invert hover:brightness-100"
          />
          <img
            src="/images/icon-twitter.svg"
            alt="twitter"
            className="cursor-pointer brightness-0 invert hover:brightness-100"
          />
          <img
            src="/images/icon-pinterest.svg"
            alt="pinterest"
            className="cursor-pointer brightness-0 invert hover:brightness-100"
          />
          <img
            src="/images/icon-instagram.svg"
            alt="instagram"
            className="cursor-pointer brightness-0 invert hover:brightness-100"
          />
        </div>

      </div>
    </footer>
  )
}

export default Footer
