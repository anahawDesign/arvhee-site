import { miniMartItems } from "@/app/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MiniMart = () => (
  <section className="py-16 px-4 bg-[var(--color-secondary)]/30">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-4">
          Filipino Mini Mart
        </h3>
        <p className="text-[var(--color-text)] text-lg">
          Stock up on authentic Filipino pantry essentials
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {miniMartItems.map((item, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-md transition-shadow bg-white"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-[var(--color-accent)] text-sm">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardFooter className="pt-2 flex flex-col gap-2">
              <span className="font-bold text-[var(--color-accent)]">
                {item.price}
              </span>
              <Button
                size="sm"
                className=" bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-[var(--color-accent)] w-full"
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

export default MiniMart;
