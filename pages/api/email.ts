import { NextApiRequest, NextApiResponse } from "next";

import fetchGoogleScore from "../../utils/fetchGoogleScore";
import applyRateLimit from "../../utils/applyRateLimiting";
import SendEmail from "../../utils/sendEmail";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const ValidateEmail = (email: string) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  try {
    await applyRateLimit(req, res);
  } catch {
    return res.status(429).json({ message: "Too many requests" });
  }

  if (method === "POST") {
    const { name, email, phone, message, gReCaptchaToken } = body;

    const isValid = ValidateEmail(email?.trim());
    if (!isValid || !message || !email || !gReCaptchaToken)
      return res.status(400).json({ message: "Invalid inputs" });

    try {
      const reCaptchaRes = await fetchGoogleScore(gReCaptchaToken);

      if (!reCaptchaRes)
        return res.status(401).json({ message: "Google Recaptcha error" });

      await SendEmail({
        from: process.env.EMAIL_USER!,
        html: message + `<br /> ${name}'s phone number: ${phone}`,
        subject: "New message from " + name,
        to: process.env.EMAIL_USER!,
        reply_to: email,
      });

      res.json("ok");
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
};

export default handler;
