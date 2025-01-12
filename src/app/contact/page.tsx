import Whatsapp from "@/components/icons/Whatsapp";
import ContactCopy from "@/components/ui/ContactCopy";
import Phone from "@/components/icons/Phone";
import Email from "@/components/icons/Email";
import Marker from "@/components/icons/Marker";
import ContactForm from "@/components/ContactForm";
import TeamBubbles from "@/components/TeamBubbles";

export const metadata = {
  title: "Contact",
};

const items = [
  {
    title: "WhatsApp",
    description: "+31 (0) 6 48 98 42 80",
    icon: <Whatsapp className="w-7 h-7" />,
    action: "https://wa.me/+31648984280",
  },
  {
    title: "Telefoon",
    description: "+31 (0) 6 48 98 42 80",
    icon: <Phone className="w-7 h-7" />,
    action: "copy",
  },
  {
    title: "Email",
    description: "mail@markscherrenberg.com",
    icon: <Email className="w-7 h-7" />,
    action: "copy",
  },
  {
    title: "Locatie",
    description: "Utrecht, Nederland",
    icon: <Marker className="w-7 h-7" />,
    action: "https://maps.app.goo.gl/TFLwhoB7GWaR3So2A",
  },
] as IContactItem[];

export interface IContactItem {
  title: string;
  description: string;
  icon: JSX.Element;
  action: string;
}

export default function Page() {
  return (
    <>
      <section className="px-4 pt-10 lg:px-20 pb-16 lg:pt-28">
        <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-10">
          <div className="lg:max-w-lg lg:pr-10">
            <header className="font-medium text-accent-300 leading-none">
              Neem contact op
            </header>
            <h1 className="text-display-4 lg:text-[56px] font-semibold mt-5 leading-[110%] font-display mb-4">
              Ik help je graag
            </h1>
            <p className="text-lg lg:text-xl mt-6 mb-6 text-gray-300">
              Neem vrijblijvend contact op voor al je vragen of opmerkingen.
            </p>

            <div className="space-y-4 mt-7">
              {items.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={
                      "bg-box/70 p-4 rounded-lg flex items-center justify-between shadow-box"
                    }
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <div>
                        <p className="text-primary-50 leading-[160%]">
                          {item.title}
                        </p>
                        <p className="text-primary-300 leading-[160%]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ContactCopy item={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 lg:mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
