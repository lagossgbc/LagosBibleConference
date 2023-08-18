import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { findOneConf } from "../../data/conferences";

import { eb_garamond } from "../../fonts";
import VideoList from "../../components/videos/VideoList";

import classes from "./SingleArchive.module.scss";

const SingleArchive: React.FC<any> = (props) => {
  const archiveId = useRouter().query?.archiveId as string;

  const currentArchive = findOneConf(archiveId);
  // const
  // const finalData = { ...props, ...currentArchive };
  console.log(props);

  const videos = props.items.map((video: any) => {
    return {
      videoId: video.snippet.resourceId.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.medium.url,
      date: video.snippet.publishedAt,
    };
  });

  if (!currentArchive) return null;

  return (
    <div className={classes.Container}>
      <h3>LAGOS BIBLE CONFERENCE {currentArchive?.year}</h3>

      <section>
        <div className={classes.Left}>
          <div className={classes.Img}>
            <Image
              src={currentArchive.img}
              alt={"LBC-" + currentArchive.year}
              fill
            />
          </div>
          <ul>
            {currentArchive.speakers.map((s, i) => (
              <li key={i}>{s + " "} </li>
            ))}
          </ul>
        </div>
        <article>
          <h4 className={eb_garamond.className}>Synopsis</h4>
          <div>
            {currentArchive.synopsis.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <ul className={classes.Speakers}>
              <b>Speakers: &nbsp;</b>
              {currentArchive.speakers.map((speaker, index) => (
                <li key={index}>
                  {index !== currentArchive.speakers.length - 1
                    ? speaker + " |"
                    : speaker}{" "}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <VideoList videos={videos} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${context.params?.archiveId}&maxResults=20&key=${process.env.YOUTUBE_API_KEY}`;

  const res = await fetch(YOUTUBE_API_URL);
  const data = await res.json();

  if (!data) {
    return {
      props: { notFound: true },
    };
  }

  return {
    props: data,
  };
};

export default SingleArchive;
