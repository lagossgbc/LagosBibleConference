import classes from "./Video.module.scss";

const Video = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Inner}>
        <video
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/intro-lbc.mp4"
          controls
        ></video>
      </div>
    </div>
  );
};

export default Video;
