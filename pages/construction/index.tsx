import Image from "next/image";
import { quicksand } from "../../fonts";
import Button from "../../components/form/Button";

import classes from "./ConstructionPage.module.scss";
import Head from "next/head";

const ConstructionPage = () => {
  return (
    <div className={classes.Container}>
      <Head>
        <title>LBC | Resource unavailable</title>
      </Head>
      <div>
        <Image src="/images/building.webp" alt="Under Construction" fill />
      </div>
      <p className={quicksand.className}>Page Under Construction</p>
      <Button text="BACK" mode="pry" to="/archive" size="small" />
    </div>
  );
};

export default ConstructionPage;
