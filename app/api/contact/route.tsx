import { WelcomeEmail } from "@/components/email-tempates/WelcomeEmail";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import { ContactEmailTemplate } from "@/components/email-tempates/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const verifiedDomain = process.env.RESEND_VERIFIED_DOMAIN;
const adminDomain = process.env.ADMIN_DOMAIN;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("message: ", name);
  try {
    const isSentTOUser = await resend.emails.send({
      from: `${verifiedDomain}`, // your verified domain
      to: `${email}`, // the email address you want to send a message
      subject: `From CodeCamber.co`,
      react: <WelcomeEmail email={email} name={name} />,
    });
    const isSentTOAdmin = await resend.emails.send({
      from: `${verifiedDomain}`, // your verified domain
      to: `${adminDomain}`, // the email address you want to send a message
      subject: `New Contact from Agency Landing Page`,
      react: (
        <ContactEmailTemplate email={email} name={name} message={message} />
      ),
    });
    if (isSentTOAdmin.data && isSentTOUser.data) {
      return Response.json({ msg: "Email Sent!", status: 250 });
    }
    return Response.json({ msg: "Email sent failed", status: 521 });
  } catch (error) {
    return Response.json({ msg: "Email sent failed", status: 521 });
  }
}
