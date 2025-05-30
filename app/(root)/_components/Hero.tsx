// app/(root)/_components/Hero.tsx

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { anton, geistMono, geistSans, nunito } from "../layout";

const Hero = () => (
  <section
    id="home"
    className="relative h-[70vh] flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 z-10  pointer-events-none" />
    <Image
      src="/arvhee-hero-3.png"
      alt="Filipino bakery storefront"
      fill
      className="object-cover"
      style={{ zIndex: 1 }}
      sizes="(max-width: 768px) 100vw, 1200px"
    />
    <div
      className="relative z-20 text-center px-4 max-w-4xl"
      style={{ color: "var(--color-background)" }}
    >
      <h2
        className={` text-4xl md:text-6xl mb-4 leading-tight text-[var(--color-accent)]`}
      >
        Freshly Baked Filipino Favourites in London
      </h2>
      <p className=" text-lg font-light md:text-xl mb-8 opacity-90 text-[var(--color-primary)]">
        Bringing the warmth of a traditional panaderia to your neighborhood
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className=" bg-[var(--color-accent)] text-[var(--color-secondary)]
            hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] "
        >
          Order Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border border-white bg-white  text-[var(--color-accent)] hover:text-[var(--color-secondary)] "
        >
          View Menu
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
