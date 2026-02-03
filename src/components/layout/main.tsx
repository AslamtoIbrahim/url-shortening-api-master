import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import ShortenCard from "../ui/shorten-card";
import StaticsCard from "../ui/statics-card";
import BootsCard from "../ui/boost-card";

type MainProps = React.ComponentProps<'main'> & { className?: string; }


function Main({ className, ...props }: MainProps) {
  return <main className={cn('py-4', className)} {...props}>
    <section className="overflow-x-hidden  flex flex-col md:flex-row-reverse gap-8 md:gap-x-12 ml-6">
      <div className="w-114 h-80 md:w-120 md:h-96 pl-4" >
        <img src="/public/images/illustration-working.svg" alt="working" />
      </div>
      <div className="text-center md:text-start space-y-6 px-4 pb-32">
        <h1 className="text-4xl lg:text-5xl font-sans font-black">More than just shorter links</h1>
        <p className="text-foreground/50 font-medium">
          Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>

        <Button className="rounded-3xl text-lg px-8 py-6 font-semibold">
          Get Started
        </Button>
      </div>
    </section>

    <section className="bg-foreground/10 pt-32 relative">
      <section className="absolute m-auto -top-20  w-full">
        <ShortenCard />
      </section>
      <div className="text-center space-y-6 px-4 pb-22">
        <h2 className="text-2xl font-sans font-black">Advanced Statistics</h2>
        <p className="text-foreground/50 font-medium md:w-md md:m-auto">
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>
        <div className="flex flex-col gap-24 mt-16 md:flex-row md:gap-12 md:w-full md:justify-center">
          <StaticsCard
            className="relative z-20"
            src="/public/images/icon-brand-recognition.svg"
            title="Brand Recognition"
            description=" Boost your brand recognition with each click. Generic links don’t 
                         mean a thing. Branded links help instil confidence in your content." />
          <div className="relative">
            <div className="absolute md:hidden w-2 h-20 bg-primary -top-26 left-1/2 -translate-x-1/2" />
            {/* <div className="hidden md:absolute w-120 h-2 bg-primary top-1/2 -translate-y-1/2 " /> */}

            <StaticsCard
              className="mt-12"
              src="/public/images/icon-detailed-records.svg"
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />

            <div className="absolute md:hidden w-2 h-20 bg-primary -bottom-20 left-1/2 -translate-x-1/2" />
          </div>
          <StaticsCard
            className="mt-24"
            src="/public/images/icon-fully-customizable.svg"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
        </div>
      </div>
      <BootsCard />
    </section>
  </main>
}


export default Main;