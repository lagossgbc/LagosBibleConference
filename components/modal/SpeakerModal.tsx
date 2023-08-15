import Image from "next/image";
import { SpeakerType } from "../home/types";

import classes from "./SpeakerModal.module.scss";
import Speaker from "../home/Speaker";
import { eb_garamond, quicksand } from "../../fonts";

const SpeakerModal: React.FC<{ speaker: SpeakerType }> = ({ speaker }) => {
  return (
    <section className={classes.Container}>
      <div className={classes.Img}>
        <Speaker {...speaker} />
      </div>
      <div className={classes.About}>
        <h3 className={eb_garamond.className}>{speaker.name}</h3>
        <p className={quicksand.className}>{speaker.desc}</p>
      </div>
    </section>
  );
};

export default SpeakerModal;
