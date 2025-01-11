"use client";
import Scrollable from "@/components/Scrollable";
import { ScrollUp } from "@/components/ScrollAnimations";
import { useMemo } from "react";

const workProcess = [
  {
    num: "01",
    title: "Kennismaking",
    description:
      "Samen duiken we direct in een creatieve sessie, waar we dromen, ideeën en innovatieve oplossingen bespreken. Met een nieuwe dosis inspiratie starten we onze samenwerking, gericht op ambitieuze maar haalbare doelen.",
  },
  {
    num: "02",
    title: "Ontwerp en sprint",
    description:
      "We gaan meteen aan de slag! Na onze inspirerende sessie presenteren we een eerste concept. Zodra jij groen licht geeft, starten we direct met de eerste sprint en zetten we de eerste stappen naar jouw webapplicatie.",
  },
  {
    num: "03",
    title: "Software setup",
    description:
      "We richten een naadloze staging-omgeving in die de overgang van ontwikkeling naar productie vlekkeloos maakt. Hier testen we grondig alle nieuwe features en updates om ervoor te zorgen dat ze voldoen aan de hoogste kwaliteitsnormen voordat we live gaan.",
  },
  {
    num: "04",
    title: "Ontwikkeling",
    description:
      "Ons team van experts stort zich op het ontwerpen en bouwen van een intuïtieve, gebruiksvriendelijke webapplicatie. We zorgen ervoor dat elke functionaliteit precies aansluit op jouw wensen en die van je gebruikers.",
  },
  {
    num: "05",
    title: "Lancering",
    description:
      "Het moment van de waarheid: We gaan live! Na een intensieve testfase lanceren we de webapplicatie, klaar om gebruikers te verrassen met nieuwe functies en mogelijkheden.",
  },
  {
    num: "06",
    title: "Monitoring & updates",
    description:
      "Onze betrokkenheid stopt niet bij de lancering. We blijven de webapplicatie nauwlettend monitoren en voeren continu updates uit om optimale prestaties te garanderen.",
  },
  {
    num: "07",
    title: "Doorontwikkeling",
    description:
      "We blijven verder bouwen! Doorlopende sprints leveren nieuwe resultaten en innovatieve oplossingen op. Jouw webapplicatie groeit mee met je bedrijf en blijft steeds afgestemd op de veranderende behoeften van je gebruikers.",
  },
];

const workProcessMobile = [
  {
    num: "01",
    title: "Kennismaking",
    description:
      "Samen aan de tekentafel in een conceptbespreking. Hier bespreken we dromen, ideeën en innovatieve oplossingen. Met een nieuwe dosis inspiratie starten we onze samenwerking en richten we ons op prachtige en haalbare doelen.",
  },
  {
    num: "02",
    title: "Ontwerp en sprint",
    description:
      "Nu begint het echte werk! Na ons inspirerend contact komen wij met een eerste concept. Als jij akkoord geeft, starten we met onze eerste sprint.",
  },
  {
    num: "03",
    title: "Software setup",
    description:
      "Onze staging zorgt voor een naadloze overgang van ontwikkeling naar productie. Hier testen we alle nieuwe features en updates om ervoor te zorgen dat ze voldoen aan de hoogste kwaliteitsnormen voordat we live gaan.",
  },
  {
    num: "04",
    title: "Ontwikkeling",
    description:
      "Ons team van deskundige ontwerpers en ontwikkelaars gaat aan de slag om een intuïtieve gebruikersinterface te ontwerpen en te ontwikkelen. We zorgen ervoor dat elke functionaliteit perfect is afgestemd op jouw behoeften en die van je gebruikers.",
  },
  {
    num: "05",
    title: "Lancering",
    description:
      "Tijd voor de lancering! Na een grondige testfase wordt de app gelanceerd, zodat gebruikers toegang krijgen tot de app en kunnen profiteren van de nieuwe functies en mogelijkheden.",
  },
  {
    num: "06",
    title: "Monitoring & updates",
    description:
      "We blijven nauw betrokken en bieden voortdurende ondersteuning en updates om ervoor te zorgen dat de app optimaal blijft functioneren.",
  },
  {
    num: "07",
    title: "Doorontwikkeling",
    description:
      "Meer sprints, meer resultaat en meer innovatieve oplossingen. Wij bieden apps die meegroeien met jouw bedrijf en zorgen dat de technologie up-to-date blijft met de behoeftes van de gebruiker in gedachten.",
  },
];

const workProcessWebsites = [
  {
    num: "01",
    title: "Kennismaking",
    description:
      "In een creatieve sessie bespreken we jouw ideeën en behoeften. Met deze nieuwe inspiratie starten we onze samenwerking, gericht op ambitieuze maar haalbare doelen.",
  },
  {
    num: "02",
    title: "Ontwerp en sprint",
    description:
      "Na onze inspirerende sessie komen wij met een eerste ontwerpconcept. Zodra je akkoord geeft, starten we met de eerste ontwikkelsprint om jouw website tot leven te brengen.",
  },
  {
    num: "03",
    title: "Software setup",
    description:
      "We richten een gestroomlijnde ontwikkelomgeving in, waar we nieuwe functies en updates uitvoerig testen voordat ze live gaan. Zo garanderen we de hoogste kwaliteitsstandaarden.",
  },
  {
    num: "04",
    title: "Ontwikkeling",
    description:
      "Ons team van experts gaat aan de slag met het bouwen van een intuïtieve en gebruiksvriendelijke website. We zorgen ervoor dat elke functionaliteit perfect aansluit op jouw wensen en die van je gebruikers.",
  },
  {
    num: "05",
    title: "Lancering",
    description:
      "Na een grondige testfase is het tijd om live te gaan. We lanceren jouw website, klaar om indruk te maken en gebruikers te verrassen met zijn mogelijkheden.",
  },
  {
    num: "06",
    title: "Monitoring & updates",
    description:
      "Ook na de lancering blijven we betrokken. We monitoren de prestaties van de website en voeren regelmatig updates uit om een optimale werking te garanderen.",
  },
  {
    num: "07",
    title: "Doorontwikkeling",
    description:
      "We bouwen verder aan jouw succes. Doorlopende ontwikkelsprints zorgen voor nieuwe functies en innovatieve oplossingen, zodat jouw website altijd blijft meegroeien met jouw bedrijf en de veranderende behoeften van je klanten.",
  },
];

const workProcessWebshops = [
  {
    num: "01",
    title: "Kennismaking",
    description:
      "Samen duiken we in een creatief gesprek waar we jouw ideeën, wensen en innovatieve oplossingen bespreken. Met een frisse dosis inspiratie starten we de samenwerking, gericht op ambitieuze en haalbare doelen.",
  },
  {
    num: "02",
    title: "Ontwerp en sprint",
    description:
      "Na onze inspirerende sessie presenteren we een eerste ontwerp. Zodra je akkoord gaat, starten we met onze eerste ontwikkelingsronde en zetten we de eerste stappen richting jouw webshop.",
  },
  {
    num: "03",
    title: "Software setup",
    description:
      "We richten een staging-omgeving in om een naadloze overgang van ontwikkeling naar productie te waarborgen. Hier testen we alle nieuwe functies en updates grondig om ervoor te zorgen dat ze voldoen aan de hoogste kwaliteitsnormen voordat we live gaan.",
  },
  {
    num: "04",
    title: "Ontwikkeling",
    description:
      "Ons team van deskundige ontwerpers en ontwikkelaars creëert een intuïtieve en gebruiksvriendelijke webshop die perfect is afgestemd op jouw behoeften en die van je klanten.",
  },
  {
    num: "05",
    title: "Lancering",
    description:
      "Na een uitgebreide testfase lanceren we je webshop, zodat je klanten direct kunnen profiteren van de nieuwe functies en mogelijkheden.",
  },
  {
    num: "06",
    title: "Monitoring & updates",
    description:
      "Onze betrokkenheid stopt niet bij de lancering. We blijven je webshop monitoren en bieden voortdurende ondersteuning en updates om optimale prestaties te garanderen.",
  },
  {
    num: "07",
    title: "Doorontwikkeling",
    description:
      "We blijven verder bouwen aan je webshop met doorlopende updates en verbeteringen, zodat je webshop altijd up-to-date blijft en inspeelt op de veranderende behoeften van je klanten.",
  },
];

export default function WorkProcess({
  variant,
}: {
  variant?: "mobile" | "websites" | "webshops";
}) {
  const process = useMemo(() => {
    switch (variant) {
      case "mobile":
        return workProcessMobile;
      case "websites":
        return workProcessWebsites;
      case "webshops":
        return workProcessWebshops;
      default:
        return workProcess;
    }
  }, [variant]);

  return (
    <ScrollUp>
      <Scrollable>
        <div className="mt-4 lg:mt-16 border-t border-primary-900 flex justify-between gap-x-10 relative">
          {process.map((item, index) => (
            <div
              key={item.num}
              className="flex flex-col  -mt-2.5 min-w-[300px] cursor-grab"
            >
              <div className="h-[18px] w-[18px] rounded-full bg-accent-300" />
              <p className="my-6 text-primary-900 text-6xl font-bold leading-none select-none">
                {item.num}
              </p>
              <div>
                <h3 className="text-primary-50 text-2xl font-display font-semibold text-left select-none">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-primary-300 select-none">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Scrollable>
    </ScrollUp>
  );
}
