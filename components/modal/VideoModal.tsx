import classes from "./VideoModal.module.scss";

const VideoModal: React.FC<{ currentVideo: string }> = ({ currentVideo }) => {
  console.log(currentVideo);

  return (
    <div className={classes.Container}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${currentVideo}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
