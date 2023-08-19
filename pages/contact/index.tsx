import Head from "next/head";
import { useState, useEffect } from "react";
import Transition from "../../components/shared/ui/Transition";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Input from "../../components/shared/form/Input";
import Button from "../../components/form/Button";
import {
  ContactFormInputsArray,
  ContactFormInputsType,
} from "../../components/form/contactFormInputs";

import Spin from "../../components/loaders/Spin";

import classes from "./Contact.module.scss";

const ContactPage = () => {
  const ContactFormInputs = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [Values, setValues] =
    useState<ContactFormInputsType>(ContactFormInputs);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [FeedBack, setFeedBack] = useState("");

  const clearForm = () => {
    const inputs = document.querySelectorAll(".myInput");
    inputs.forEach((input) => input.setAttribute("data-focused", "false"));
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (FeedBack) {
      timer = setTimeout(() => {
        setFeedBack("");
        setError(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [FeedBack, Error]);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Values.name?.trim().length < 5 || Values.name?.trim().length > 100) {
      setFeedBack("Name must be between 5 to 100 characters.");
      setError(true);
      return;
    }
    if (Values.phone?.trim().length < 11) {
      setFeedBack("Phone number must be between 11 to 14 characters.");
      setError(true);
      return;
    }
    if (Values.message?.trim().length < 20) {
      setFeedBack("Message must be between 20 to 2000 characters.");
      setError(true);
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Values.email?.trim())) {
      setFeedBack("Invalid email format.");
      setError(true);
      return;
    }
    setLoading(true);

    // @ts-ignore
    executeRecaptcha("SendMail")
      .then((gReCaptchaToken) => {
        fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...Values, gReCaptchaToken }),
        })
          .then((data) => data.json())
          .then((res) => {
            if (res === "ok") {
              setFeedBack(
                "Message sent successfully. Thank you for reaching out."
              );
              setValues(ContactFormInputs);
              clearForm();
            }
            setLoading(false);
          });
      })
      .catch((err) => {
        setFeedBack(err.message);
        setLoading(false);
      });
  };

  return (
    <Transition className={classes.Container}>
      <Head>
        <title>LBC | Contact us</title>
      </Head>
      <div className={classes.Left}>
        <div className={classes.Inner}>
          <h3>For Enquires</h3>
          <h4>Contact Us at:</h4>
          <div>
            <MdLocationOn style={{ fontSize: "6rem", marginTop: "-1.5rem" }} />
            <p>
              Plot 451A Oluwadamilola Fasade Street, Omole Phase 1, Ojodu Berger
              Road Lagos
            </p>
          </div>
          <div>
            <MdCall />
            <p>
              Call: <a href="tel:+2348067526446">+2348067526446</a>
            </p>
          </div>
          <div>
            <MdEmail />
            <p>
              Email: <a href="mailto:info@sgbc.ng">info@sgbc.ng</a>
            </p>
          </div>
          <div>
            <h4 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Hours:</h4>
          </div>
          <div className={classes.Contact}>
            Mondays to Fridays: 10am - 4pm <br />
            Satudray: Closed <br />
            Sunday: 8am -6pm <br />
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        <form onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          {ContactFormInputsArray.map((input) => (
            <Input
              key={input.name}
              // @ts-ignore
              value={Values[input.name]}
              onChange={(e: any) =>
                setValues((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              {...input}
              border
            />
          ))}

          <p
            className={`${classes.FeedBack} ${
              FeedBack.length ? classes.FeedBack : " "
            } ${Error ? classes.Error : ""}`}
          >
            {FeedBack}
          </p>

          <footer>
            {Loading ? (
              <div style={{ width: "15rem" }}>
                <Spin />
              </div>
            ) : (
              <Button
                text="SEND"
                mode="pry"
                size="small"
                type="button"
                // @ts-ignore
                onClick={handleSubmit}
              />
            )}
            <Button text="BACK TO HOMEPAGE" mode="pry" to="/" size="small" />
          </footer>
        </form>
      </div>
    </Transition>
  );
};

export default ContactPage;
