"use server";

import { EmailTemplate } from "@/app/components/Email/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get("from_name") || "name not given",
    userEmail: formData.get("user_email") || "email not given",
    phoneNumber: formData.get("user_phone_number") || "phone number not given",
    subject: formData.get("subject") || "",
    message: formData.get("message") || "no message provided",
  };

  // mutate data
  // revalidate cache
  console.log(rawFormData);

  try {
    const { data, error } = await resend.emails.send({
      from: "The Bees Knees Website <noreplycontactform@contact.beeskneesband.co.uk>",
      to: "stu_cowley@hotmail.com", // replace with real address in .env
      subject: "Code test",
      react: EmailTemplate({
        name: rawFormData.name.toString(),
        subject: "test subject",
        message: "some message",
        contactNumber: "123456789",
        emailAddress: "alice@bob.com",
      }),
    });

    console.log(error);

    if (error) {
      return JSON.parse(JSON.stringify(error));
    }

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return error;
  }
}
