// app/(root)/_components/FeaturedProducts.tsx

import Image from "next/image";
import { featuredProducts } from "@/app/data/products";

const FeaturedProducts = () => (
  <section id="featured" className="py-12 bg-[var(--color-background)]">
    <div className="max-w-5xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-8 text-[var(--color-accent)]">
        Featured Products
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={220}
              height={220}
              className="mb-4 object-contain rounded-xl shadow-sm"
            />
            <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-bold bg-[var(--color-accent)] text-[var(--color-secondary)]">
              {product.badge}
            </span>
            <h4 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">
              {product.name}
            </h4>
            <p className="text-sm text-[var(--color-text)] mb-2 text-center">
              {product.description}
            </p>
            <div className="text-md font-bold text-[var(--color-accent)]">
              {product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
