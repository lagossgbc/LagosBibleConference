import Image from "next/image";
import Transition from "../../components/shared/ui/Transition";
import conferences from "../../data/conferences";
import { poppins } from "../../fonts";

import classes from "./Archive.module.scss";
import Link from "next/link";

const Archives = () => {
  return (
    <Transition className={classes.Container}>
      <h3 className={poppins.className}>Conference Archive</h3>

      <p>Search for a sermon</p>
      <div className={classes.Archives}>
        {conferences.map((item) => (
          <Link key={item.year} href={"/archive/" + item.year}>
            <div className={classes.Image}>
              <Image src={item.img} alt={item.year} fill sizes="250px" />
            </div>
            <h6 className={poppins.className}>LBC {item.year}</h6>
          </Link>
        ))}
      </div>
    </Transition>
  );
};

export default Archives;
