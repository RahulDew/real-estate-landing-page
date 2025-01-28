import { WelcomeEmail } from "@/components/email-tempates/WelcomeEmail";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const verifiedDomain = process.env.RESEND_VERIFIED_DOMAIN;
// const adminDomain = process.env.ADMIN_DOMAIN;
export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const isSentEmail = await resend.emails.send({
      from: `${verifiedDomain}`, // your verified domain
      to: `${email}`, // the email address you want to send a message
      subject: `From CodeCamber`,
      react: <WelcomeEmail email={email} name={email} />,
    });
    console.log("isSentEmail: ", isSentEmail);
    if (isSentEmail.data) {
      return Response.json({ msg: "Email Sent!", status: 250 });
    }
    return Response.json({ msg: "Email sent failed!", status: 521 });
  } catch (error) {
    // console.log(error);
    return Response.json({ msg: "Email sent failed!", status: 521 });
  }
}
