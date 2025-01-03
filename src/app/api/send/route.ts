import { EmailTemplate } from "@/app/components/Email/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "The Bees Knees Website <thebeeskneesband@hotmail.com>",
      to: "stu_cowley@hotmail.com",
      subject: "Code test",
      react: EmailTemplate({
        name: "Alice McBob",
        subject: "test subject",
        message: "some message",
        contactNumber: "123456789",
        emailAddress: "alice@bob.com",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
