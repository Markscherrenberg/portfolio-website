"use server";

import { IContactForm } from "@/components/ContactForm";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function send({
  firstName,
  lastName,
  email,
  phone,
  message,
}: IContactForm) {
  await resend.emails.send({
    from: "Rocksolid <hello@rocksolid.dev>",
    to: ["mail@markscherrenberg.com"],
    subject: "Contact Form Submission (portfolio)",
    html: `<p>
      <strong>Name:</strong> ${firstName} ${lastName}
      <br />
      <strong>Email:</strong> ${email}
      <br />
      <strong>Phone:</strong> ${phone}
      <br />
      <strong>Message:</strong> ${message}
    </p>`,
  });
}
