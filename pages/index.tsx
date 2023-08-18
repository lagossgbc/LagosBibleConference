import Image from "next/image";

import Synopsis from "../components/home/Synopsis";
import Transition from "../components/shared/ui/Transition";
import Speakers from "../components/home/Speakers";
import Mid from "../components/home/Mid";
import Conferences from "../components/home/Conferences";
import Button from "../components/form/Button";

import { quicksand } from "../fonts";

import classes from "./home.module.scss";

export default function Home() {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Banner}>
        <div className={classes.Inner}>
          <div className={classes.Logo}>
            <Image alt="Logo" src="/images/white-praying.svg" fill />
          </div>
          <div className={classes.Text}>
            <Image alt="Logo" src="/images/communion-text.svg" fill />
          </div>
          <h4 className={quicksand.className + " " + classes.Date}>
            2nd - 4th November, 2023
          </h4>
          <div className={classes.Speakers}>
            <h4>Main Speakers</h4>
            <ul>
              <li>
                <b>Roland Kalifungwa</b> - Lusaka Baptist Church, Zambia |
              </li>
              <li>
                <b> Murungi Igweta</b> - Trinity Baptist Church, Kenya
              </li>
              <li>
                <b>Joe Jacowitz</b> - Christ Bible Church, California, USA |
              </li>
              <li>
                <b>Austin Huggins</b> - First Baptist Church of Bagdad, USA
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.Btn}>
          <Button
            text="REGISTER"
            to="https://lbc2023-register.evenito.site/#rsvp"
            target="__blank"
            mode="pry"
            size="small"
          />
        </div>
      </div>
      <Synopsis />
      <Speakers />
      <Mid />
      <Conferences />
    </Transition>
  );
}
