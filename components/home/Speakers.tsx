import { useState } from "react";
import speakersData from "../../data/speakersData";

import classes from "./Speakers.module.scss";
import Modal from "../modal/Modal";
import SpeakerModal from "../modal/SpeakerModal";
import Speaker from "./Speaker";
import { SpeakerType } from "./types";

const Speakers = () => {
  const [OpenedSpeaker, setOpenedSpeaker] = useState<SpeakerType | null>(null);

  const handleSpeaker = (name: string) => {
    let speaker = speakersData.find((item) => item.name === name);
    if (!speaker) return;

    setOpenedSpeaker(speaker);
  };

  return (
    <section className={classes.Container}>
      {OpenedSpeaker?.name && (
        <Modal
          close={() => setOpenedSpeaker(null)}
          isOpen={!!OpenedSpeaker}
          className={classes.Modal}
        >
          <SpeakerModal speaker={OpenedSpeaker} />
        </Modal>
      )}
      <h3 className=" text-center">SPEAKERS</h3>
      <div className={classes.Speakers}>
        <div className={classes.Inner}>
          {speakersData.map((item, index) => (
            <Speaker
              {...item}
              handleSpeaker={() => handleSpeaker(item.name)}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
