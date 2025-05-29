import { products } from "@/app/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const OrderOnline = () => (
  <section id="products" className="py-16 px-4 bg-[var(--color-background)]">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-4">
          Order Online
        </h3>
        <p className="text-[var(--color-text)] text-lg">
          Fresh baked goods available for pickup or delivery
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <Button
          variant="outline"
          className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
        >
          All Items
        </Button>
        <Button
          variant="outline"
          className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
        >
          Sweet
        </Button>
        <Button
          variant="outline"
          className="border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)]"
        >
          Savory
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className="hover:shadow-md transition-shadow bg-white"
          >
            <CardHeader>
              <CardTitle className="text-[var(--color-accent)] text-lg">
                {product.name}
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                {product.category}
              </Badge>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <span className="text-xl font-bold text-[var(--color-accent)]">
                {product.price}
              </span>
              <Button
                size="sm"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-[var(--color-secondary)]"
              >
                Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default OrderOnline;
