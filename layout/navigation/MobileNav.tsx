import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

import { alfa_slab_one } from "../../fonts";

import classes from "./MobileNav.module.scss";

const MobileNav: React.FC<{ handleHamburgerClick: () => void }> = ({
  handleHamburgerClick,
}) => {
  return (
    <div className={classes.Container}>
      <Link href="/" className={classes.Img}>
        <Image src="/logo.webp" alt="LBC Logo" width={60} height={60} />

        <h3 className={alfa_slab_one.className}>
          <div>Lagos Bible</div>
          <div>Conference</div>
        </h3>
      </Link>
      <BiMenu onClick={handleHamburgerClick} />
    </div>
  );
};

export default MobileNav;
