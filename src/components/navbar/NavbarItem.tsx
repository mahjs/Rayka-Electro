// Import necessary hooks from react-router-dom
import { FC } from "react";

interface Props {
  onClick?: () => void;
  href?: string;
  text: string;
}

/**
 * Navbar item for the navbar component.
 *
 * @param onClick - onClick handler for the navbar item.
 * @param href - The destination address for navigating to.
 * @param text - Text for the item.
 */
const NavbarItem: FC<Props> = ({ onClick, href, text }) => {
  // Use useLocation hook to get the current location

  return (
    <li
      onClick={onClick}
      className={`text-white flex-col text-center text-[1rem]`}
    >
      {/* Use a regular anchor tag or a Link component from react-router-dom */}
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavbarItem;
