const fetchGoogleScore = async (gReCaptchaToken: string) => {
  const secret = process.env.GOOGLE_CAPTCHA_SECRET_KEY;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secret}&response=${gReCaptchaToken}`,
  });

  const reCaptchaRes = await res.json();

  return reCaptchaRes?.score > 0.5;
};

export default fetchGoogleScore;
