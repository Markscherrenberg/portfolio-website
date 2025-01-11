"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import ControlledInput from "@/components/ui/forms/controlled/ControlledInput";
import Button from "@/components/ui/Button";
import { send } from "@/components/actions/contact";
import { useState } from "react";
import InlineLoading from "@/components/InlineLoading";
import Done from "@/components/icons/Done";
import { logEvent } from "@/lib/gtag";

export interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: IContactForm) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      await send(data);
      setSuccess(true);
    } catch {}
    setLoading(false);
  };

  if (success) {
    return (
      <div
        className={
          "bg-box/70 p-6 rounded-lg shadow-box mt-7 min-h-[545px] flex justify-center items-center"
        }
      >
        <div className={"h-full flex flex-col items-center justify-center"}>
          <Done className={"w-24 h-24 text-primary-50"} />
          <h2
            className={
              "text-xl font-semibold font-display text-primary-50 mt-4 mb-1"
            }
          >
            Bedankt voor je bericht
          </h2>
          <p className={"text-lg text-primary-300"}>
            Ik neem zo snel mogelijk contact met je op.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/*<div className="bg-box p-4 lg:p-6 rounded-lg shadow-box lg:mt-10">*/}
      {/*  <div className={"flex justify-center"}>*/}
      {/*    <Button*/}
      {/*      block={true}*/}
      {/*      as={"button"}*/}
      {/*      onClick={() => {*/}
      {/*        window.open(`${process.env.NEXT_PUBLIC_BOOK_URL}`, "_blank");*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <div className={"flex justify-center items-center space-x-2"}>*/}
      {/*        <span>Plan een gratis consult</span>{" "}*/}
      {/*        <CalendarIcon className={"w-6 h-6"} />*/}
      {/*      </div>*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="bg-box/70 lg:p-4 p-6 rounded-lg shadow-box mt-7 min-h-[545px]">
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 lg:space-y-5">
            <div className={"grid lg:grid-cols-2 gap-4 lg:gap-5"}>
              <ControlledInput
                control={control}
                name="firstName"
                label="Naam"
                placeholder="John"
                color={"darker"}
                rules={{
                  required: true,
                }}
              />
              <ControlledInput
                control={control}
                label="Achternaam"
                name="lastName"
                placeholder="Sinai"
                color={"darker"}
                rules={{
                  required: true,
                }}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
              <ControlledInput
                control={control}
                name="email"
                label="Email"
                placeholder={"john@company.com"}
                color={"darker"}
                rules={{
                  required: true,
                }}
              />
              <ControlledInput
                control={control}
                name="phone"
                label="Telefoonnummer"
                placeholder={"+31 (0) 85 333 24 33"}
                color={"darker"}
                rules={{
                  required: true,
                }}
              />
            </div>
            <ControlledInput
              type={"textarea"}
              control={control}
              name="message"
              label="Bericht"
              placeholder={"Hoe kunnen we je helpen?"}
              color={"darker"}
              rows={8}
              rules={{
                required: true,
              }}
            />
            <Button
              as="button"
              variant="secondary"
              block={true}
              disabled={loading}
            >
              {loading ? <InlineLoading /> : <>Contact opnemen</>}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
