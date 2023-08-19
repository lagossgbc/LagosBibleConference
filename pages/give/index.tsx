import Image from "next/image";
import Transition from "../../components/shared/ui/Transition";
import classes from "./Give.module.scss";
import Head from "next/head";

const page = () => {
  return (
    <Transition className={classes.Container}>
      <Head>
        <title>LBC | Donate</title>
      </Head>
      <div className={classes.Img}>
        <Image
          alt="Give"
          src="/images/give.webp"
          fill
          priority
          placeholder="blur"
          blurDataURL="/logo.webp"
        />
      </div>

      <div className={classes.Inner}>
        <h3>Support Lagos bible conference</h3>

        <div>
          <p>
            Thank you for your generosity and your willingness to support Lagos
            Bible Conference. you can send your gifts to:
          </p>
          <p>
            <b>Account Name: </b> SGBC Imprest
          </p>
          <p>
            <b>Account Number: </b> 0678989622
          </p>
          <p>
            <b>Bank: </b> Guaranty Trust Bank Plc
          </p>
        </div>
      </div>
    </Transition>
  );
};

export default page;
