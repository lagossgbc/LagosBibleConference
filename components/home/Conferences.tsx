import Image from "next/image";
import Button from "../shared/form/Button";
import MobileConf from "./MobileConf";

import { lastFourConf, lastThreeConf } from "../../data/conferences";
import { inter } from "../../fonts";

import classes from "./Conferences.module.scss";
import Link from "next/link";

const Conferences = () => {
  return (
    <section className={classes.Container}>
      <h3 className="text-center">PAST CONFERENCES</h3>
      {/* Desktop */}
      <div className={classes.Conferences}>
        {lastThreeConf.map((item) => (
          <div key={item.year} className={classes.Inner}>
            <Link
              href={
                item.playlistId
                  ? "/archive/" + item.playlistId
                  : "/construction"
              }
            >
              <div className={classes.Image}>
                <Image src={item.img} alt={item.year} fill sizes="300px" />
              </div>
            </Link>
            <h4 className={inter.className}>LBC {item.year}</h4>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <MobileConf
        data={lastFourConf}
        autoSlide
        className={classes.MobileConf}
      />
      <Button
        text="CONFERENCE ARCHIVE"
        className={classes.Btn}
        mode="pry"
        to="/archive"
        size="small"
      />
    </section>
  );
};

export default Conferences;
