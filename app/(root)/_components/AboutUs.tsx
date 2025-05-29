import Image from "next/image";
import { Star } from "lucide-react"; // adjust the icon import path if needed

const AboutUs = () => (
  <section id="about" className="py-16 px-4 bg-[var(--color-secondary)]/50">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-6">
            A Slice of Home in London
          </h3>
          <p className="text-[var(--color-text)] text-lg mb-6 leading-relaxed">
            Welcome to Kamayan Bakery, where every bite tells a story of
            Filipino heritage and tradition. Our family-owned panaderia brings
            the authentic taste of the Philippines to London, using time-honored
            recipes passed down through generations.
          </p>
          <p className="text-[var(--color-text)] text-lg mb-6 leading-relaxed">
            From our signature ube pandesal to traditional ensaymada, we bake
            with love and pride, creating a warm community space where Filipino
            flavors and culture come alive.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex text-[var(--color-secondary)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-[var(--color-text)] font-semibold">
              4.9/5 from 200+ reviews
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/arvhee-store.png" // replace with your bakery image later
            alt="Filipino bakery interior"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-[var(--color-secondary)] p-4 rounded-lg shadow-lg">
            <p className="text-[var(--color-accent)] font-semibold">
              Est. 2018
            </p>
            <p className="text-[var(--color-accent)] text-sm">Serving London</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
