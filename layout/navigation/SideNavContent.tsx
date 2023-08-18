import navData from "./navData";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

type IProps = {
  handleClose: () => void;
};

const SideNavContent: React.FC<IProps> = ({ handleClose }) => {
  return (
    <nav>
      <p onClick={handleClose}>
        Close <IoClose />
      </p>
      <ul>
        {navData.map((item, index) => (
          <li
            key={index}
            onClick={handleClose}
            style={item.href === "/" ? { order: "-1" } : {}}
          >
            <Link href={item.href} target={item.target || ""}>
              {item.href === "/" ? "Home" : item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavContent;
