import Image from "next/image";
import { eb_garamond, quicksand } from "../../fonts";
import { SpeakerType } from "./types";
import classes from "./Speaker.module.scss";

const Speaker: React.FC<SpeakerType> = ({
  handleSpeaker,
  church,
  img,
  index,
  location,
  name,
}) => {
  return (
    <div className={classes.Container} onClick={handleSpeaker}>
      <Image
        src={img}
        alt={name}
        width={500}
        height={300}
        className={index === 1 || index === 3 ? classes.Adjust : ""}
      />
      <div className={classes.Yellow}></div>
      <div className={classes.Name}>
        <h4 className={eb_garamond.className}>{name}</h4>
        <p className={quicksand.className}>{church}</p>
        <p className={quicksand.className}>{location}</p>
      </div>
    </div>
  );
};

export default Speaker;
