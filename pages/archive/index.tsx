import Image from "next/image";
import Transition from "../../components/shared/ui/Transition";
import conferences from "../../data/conferences";

import Link from "next/link";
import Input from "../../components/shared/form/Input";
import { poppins } from "../_app";
import { BiSearch } from "react-icons/bi";

import classes from "./Archive.module.scss";

const Archives = () => {
  return (
    <Transition className={classes.Container}>
      <h3>Conference Archive</h3>

      <div className={classes.Input}>
        <BiSearch />
        <Input
          name="search"
          onInput={() => {}}
          placeholder="Search for sermon"
          autoComplete="on"
          className={poppins.className}
        />
      </div>
      <div className={classes.Archives}>
        {conferences.map((item) => (
          <Link key={item.year} href={"/archive/" + item.playlistId}>
            <div className={classes.Image}>
              <Image src={item.img} alt={item.year} fill sizes="250px" />
            </div>
            <h6>LBC {item.year}</h6>
          </Link>
        ))}
      </div>
    </Transition>
  );
};

export default Archives;
