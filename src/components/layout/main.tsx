import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import ShortenCard from "../ui/shorten-card";
import StaticsCard from "../ui/statics-card";
import BootsCard from "../ui/boost-card";

type MainProps = React.ComponentProps<'main'> & { className?: string; }


function Main({ className, ...props }: MainProps) {
  return <main className={cn('', className)} {...props}>
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-2 pb-30">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl font-black lg:text-5xl">
              More than just shorter links
            </h1>
            <p className="text-foreground/50 max-w-md mx-auto md:mx-0">
              Build your brand’s recognition and get detailed insights
              on how your links are performing.
            </p>
            <Button className="rounded-3xl px-8 py-6 text-lg font-semibold">
              Get Started
            </Button>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/illustration-working.svg"
              alt="working"
              className="w-full max-w-none md:translate-x-24"
            />
          </div>

        </div>
      </div>
    </section>


    <section className="bg-foreground/10 pt-16 relative">
      <section className="absolute left-1/2 -translate-x-1/2 -top-20 lg:-top-16 w-full max-w-7xl px-6">
        <ShortenCard />
      </section>

      <div className=" py-24 px-4">
        <div className="mx-auto max-w-6xl text-center space-y-6">
          <h2 className="text-3xl font-black">
            Advanced Statistics
          </h2>

          <p className="mx-auto max-w-md text-foreground/50">
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>

          {/* Cards wrapper */}
          <div className="relative mt-20 flex flex-col items-center gap-20 md:flex-row md:gap-10">

            {/* LINE */}
            <div
              className="
          absolute
          bg-primary
          w-2 h-full
          md:h-2 md:w-full
          md:top-1/2 md:-translate-y-1/2
        "
            />

            <StaticsCard
              src="/images/icon-brand-recognition.svg"
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />

            <StaticsCard
              className="md:mt-12"
              src="/images/icon-detailed-records.svg"
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />

            <StaticsCard
              className="md:mt-24"
              src="/images/icon-fully-customizable.svg"
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />

          </div>
        </div>
      </div>
      <BootsCard />
    </section>
  </main>
}


export default Main;