import Image from "next/image";

import Synopsis from "../components/home/Synopsis";
import Transition from "../components/shared/ui/Transition";
import Speakers from "../components/home/Speakers";
import Mid from "../components/home/Mid";
import Conferences from "../components/home/Conferences";
import Button from "../components/form/Button";

import classes from "./home.module.scss";

export default function Home() {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Banner}>
        <div className={classes.Img}>
          <Image
            src="/images/2-4 November 2023.webp"
            alt="Banner"
            fill
            className={classes.BG1}
            // blurDataURL="/logo.webp"
            // placeholder="blur"
          />
          <Image
            src="/images/mobile.webp"
            alt="Mobile Banner"
            fill
            className={classes.BG2}
            // blurDataURL="/logo.webp"
            // placeholder="blur"
          />
        </div>
        <div className={classes.Btn}>
          <Button text="REGISTER" to="/register" mode="pry" size="small" />
        </div>
      </div>
      <Synopsis />
      <Speakers />
      <Mid />
      <Conferences />
    </Transition>
  );
}
