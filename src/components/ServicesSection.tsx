"use client";
import ServiceCard from "@/components/ui/ServiceCard";
import { ScrollIn } from "@/components/ScrollAnimations";
import Globe from "@/components/icons/Globe";
import Layers from "@/components/icons/Layers";
import WindowAlt from "@/components/icons/WindowAlt";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Phone from "@/components/icons/Phone";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-4 lg:px-20 py-40 pb-0 flex flex-col lg:flex-row justify-between gap-16 lg:gap-0"
    >
      <div>
        <div className="lg:sticky lg:top-24">
          <h2 className="text-primary-50 font-display font-semibold text-display-2 leading-none">
            Diensten
          </h2>
          <p className="mt-4 lg:text-lg text-primary-300 max-w-sm">
            Als ontwikkelaar met een sterke focus op het creëren van innovatieve
            webapplicaties, websites en mobiele app.
          </p>
        </div>
      </div>
      <div className="space-y-14 lg:space-y-24 lg:w-1/2 overflow-x-hidden">
        <ScrollIn>
          <ServiceCard
            type="Web | Dekstop"
            name="Webapplicaties"
            description="Ontwikkeling van krachtige webapplicaties die bedrijfsprocessen optimaliseren. Met een focus op innovatie en gebruiksvriendelijkheid, maak ik softwareoplossingen die schaalbaar zijn en zich aanpassen aan de groei van je bedrijf."
            href="/services/webapplications"
            icon={<CodeBracketIcon className="text-accent-300 w-10 h-10" />}
          />
        </ScrollIn>

        <ScrollIn>
          <ServiceCard
            type="IOS | Android"
            name="Mobiele apps"
            description="Ontwerp en ontwikkeling van efficiënte en gebruiksvriendelijke mobiele apps voor zowel Android als iOS. Gericht op technische excellentie en intuïtieve gebruikerservaring, bied ik op maat gemaakte oplossingen die naadloos functioneren op verschillende apparaten."
            href="/services/mobiele-apps"
            icon={
              <DevicePhoneMobileIcon className="text-accent-300 w-10 h-10" />
            }
          />
        </ScrollIn>
        <ScrollIn>
          <ServiceCard
            type="Web"
            name="Websites & webshops"
            description="Ontwikkeling van unieke websites die niet alleen esthetisch aantrekkelijk zijn, maar ook technisch geoptimaliseerd voor prestaties en betrouwbaarheid. Met een focus op moderne technologieën en best practices, zorg ik ervoor dat je website naadloos functioneert en klaar is voor de toekomst."
            href="/services/maatwerk-websites"
            icon={<Globe className="text-accent-300 w-10 h-10" />}
          />
        </ScrollIn>
      </div>
    </section>
  );
}
