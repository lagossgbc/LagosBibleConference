import Image from "next/image";
import expectData from "../../data/expectData";

import MySlider from "../shared/slider/MySlider";

import CountDown from "../shared/ui/CountDown";

import { eb_garamond, quicksand } from "../../fonts";

import classes from "./Mid.module.scss";

const Mid = () => {
  return (
    <section className={classes.Container}>
      {/* Add padding bottom to speakers */}
      {/* <div className={classes.YoutubeVideo}>
        <div className={classes.Inner}></div>
      </div> */}
      <CountDown date={new Date("Nov 2 2023")} />

      <div className={classes.Expect}>
        <h3>WHAT TO EXPECT</h3>
        <div className={classes.Inner}>
          <div className={classes.Images}>
            {expectData.map((item, index) => (
              <div key={index}>
                <Image src={item.img} alt={item.title} fill sizes="500px" />
                <article>
                  <h4 className={eb_garamond.className}>{item.title}</h4>
                  <p className={quicksand.className}>{item.details}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
        <MySlider
          data={expectData}
          chevrons={true}
          className={classes.Slider}
        />
      </div>
    </section>
  );
};

export default Mid;
