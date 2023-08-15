import Image from "next/image";
import Transition from "../../components/shared/ui/Transition";
import { poppins } from "../../fonts";
import classes from "./Give.module.scss";

const page = () => {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Img}>
        <Image
          alt="Give"
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/lbc/give.webp"
          fill
          // placeholder="blur"
          // blurDataURL="/logo.webp"
        />
      </div>

      <div className={classes.Inner + " " + poppins.className}>
        <h3 className={poppins.className}>Support Lagos bible conference</h3>

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
