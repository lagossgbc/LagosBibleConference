import { useState } from "react";
import Image from "next/image";
import { VideoType } from "./types";
import { BsPlayCircle } from "react-icons/bs";
import { open_sans } from "../../fonts";
import __ from "../utils/formatDate";

import classes from "./VideoList.module.scss";
import Modal from "../modal/Modal";
import VideoModal from "../modal/VideoModal";

const VideoList: React.FC<{ videos: VideoType[] }> = ({ videos }) => {
  const [CurrentVideo, setCurrentVideo] = useState("");

  const split = (str: string) => str.split(" | ");

  return (
    <div className={classes.Container}>
      {CurrentVideo && (
        <Modal
          close={() => setCurrentVideo("")}
          isOpen={!!CurrentVideo}
          className={classes.Modal}
          disableBackgroundClick
        >
          <VideoModal currentVideo={CurrentVideo} />
        </Modal>
      )}

      {videos.map((video, index) => (
        <div key={video.videoId} className={classes.Video}>
          <span>{index + 1}</span>
          <div className={classes.Name}>
            <p>{split(video.title)[0]}</p>
            <small className={open_sans.className}>
              {split(video.title)[1]} - {__(video.date)}
            </small>
          </div>
          <div className={classes.Group}>
            <div className={classes.Img}>
              <Image src={video.thumbnail} alt={video.title} fill />
            </div>
            <BsPlayCircle onClick={() => setCurrentVideo(video.videoId)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
