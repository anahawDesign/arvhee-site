import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const VisitUs = () => (
  <section id="visit" className="py-16 px-4 bg-[var(--color-background)]">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-4">
          Visit Our Bakery
        </h3>
        <p className="text-[var(--color-text)] text-lg">
          Experience the warmth of our panaderia in person
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card className="p-6 bg-white">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--color-accent)]">
                    Address
                  </h4>
                  <p className="text-[var(--color-text)]">
                    2a Jutland Rd,
                    <br />
                    London E13 8HZ
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--color-accent)]">
                    Opening Hours
                  </h4>
                  <div className="text-[var(--color-text)] space-y-1">
                    <p>Monday: Closed</p>
                    <p>Tuesday: 9:00 AM – 6:00 PM</p>
                    <p>Wednesday: 9:00 AM – 6:00 PM</p>
                    <p>Thursday: 9:00 AM – 6:00 PM</p>
                    <p>Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 5:00 PM</p>
                    <p>Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold text-[var(--color-accent)]">
                    Contact
                  </h4>
                  <p className="text-[var(--color-text)]"> +44 20 1234 5678</p>
                  <p className="text-[var(--color-text)]">
                    hello@kamayanbakery.co.uk
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.instagram.com/arvhee_bakes/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-[var(--color-secondary)] w-full">
                <Instagram className="w-4 h-4 mr-2" />
                Follow Us
              </Button>
            </a>

            <a
              href="https://www.facebook.com/people/ArVhee-Bakes/100063446330479/?locale=cs_CZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-[var(--color-accent)] w-full">
                <Facebook className="w-4 h-4 mr-2" />
                Like Us
              </Button>
            </a>
          </div>
        </div>

        <div>
          <div className="bg-gray-200 rounded-lg h-64 md:h-full flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisitUs;
