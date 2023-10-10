import { useState } from "react";

import Image from "next/image";
import classes from "./Video.module.scss";

const Video = () => {
  const [Mode, setMode] = useState("image");
  //   let content;

  //   if (Mode === "image") {
  //     content = (
  //       <figure onClick={() => {}} className={classes.Figure}>
  //         <Image
  //           src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/video-placeholder.webp"
  //           alt="Video place-holder"
  //           fill
  //         />
  //       </figure>
  //     );
  //   } else {
  //     content = (
  //       <div className={classes.Container}>
  //         <div className={classes.Inner}>
  //           <video
  //             src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/intro-lbc.mp4"
  //             controls
  //           ></video>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return content;
  // };
  return (
    <div className={classes.Container}>
      <video
        controls
        className={Mode === "video" ? classes.ShowVideo : classes.HideVideo}
        onClick={() => setMode("image")}
      >
        <source
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/intro-lbc.mp4"
          type="video/mp4"
        />
      </video>
      <figure
        className={`${
          Mode === "image" ? classes.ShowImage : classes.HideImage
        } ${classes.Figure}`}
        onClick={() => setMode("video")}
      >
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/video-placeholder.webp"
          fill
          alt="Video Thumbnail"
        />
      </figure>
    </div>
  );
};

export default Video;
