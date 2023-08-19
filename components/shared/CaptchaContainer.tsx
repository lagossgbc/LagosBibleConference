import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const CaptchaContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeKb7snAAAAAF2qfdsgDezrFOb0_c1kTuXO9Dck"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default CaptchaContainer;
