import Link from "next/link";
import Image from "next/image";

import gallery from "../../data/gallery";
import Transition from "../../components/shared/ui/Transition";

import classes from "./About.module.scss";

const About = () => {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Banner}>
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/people.webp"
          alt="Banner"
          fill
          sizes="500px"
        />
        <h3>about lagos bible conference</h3>
      </div>
      <h3>What is LBC About ?</h3>
      <div className={classes.Inner}>
        <article>
          <p>
            The Lagos Bible Conference (LBC) is the annual flagship conference
            of Sovereign Grace Bible Church (and partners) dedicated to
            promoting the Bible as God's inerrant and infallible Word through a
            faithful exposition of it.
          </p>
          <p>
            The need for such a gathering in Lagos was apparent, given the
            ignorance and lack of faithfulness in handling God's holy word.
          </p>
          <p>
            This endeavor was set in motion by Pastor Joe Jacowitz (Christ Bible
            Church, CA, United States), Pastor Tony Okoroh (Sovereign Grace
            Bible Church, Lagos), Pastor Abiodun Longe (Upper Room Baptist
            Church, Lagos) and the pastor of the then Lagos Tabernacle, a church
            planted by the London Metropolitan Tabernacle.
          </p>
          <p>
            From its inception in 2002, LBC was committed to equipping pastors
            (from a range of denominations… mostly pentecostal and charismatic)
            in Lagos through a faithful exposition of the Scriptures, in a bid
            to establish them properly in the faith in the hope of bringing true
            revival and reformation to their respective local churches.
          </p>
          <p>
            Over time, the conference's reputation grew, and the interest from
            participants grew exponentially, prompting its transformation into a
            fully inclusive event accessible to all.
          </p>
          <p>
            The conference carries an evangelistic essence, actively
            disseminating the life-saving knowledge of the gospel of Christ to
            all attendees, because of the falsehood that pervades the land;
            while at the same time providing a platform for those yearning for
            sound biblical churches to find such.
          </p>
        </article>
        <section>
          <h3>PICTURES FROM PAST CONFERENCES</h3>

          <div className={classes.Gallery}>
            {gallery.map((item) => (
              <div key={item.id}>
                <Image src={item.img} alt="Past Pictures" fill sizes="250px" />
              </div>
            ))}
          </div>
        </section>

        <section className={classes.FirstLove}>
          <h3>OUR PARTNER</h3>
          <hr />
          <Link href="https://www.missionsfirstlove.org/" target="__blank">
            <Image
              src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/hires-missions-horiz_orig.webp"
              alt="First Love Missions"
              fill
              sizes="200px"
            />
          </Link>
        </section>
      </div>
    </Transition>
  );
};

export default About;
