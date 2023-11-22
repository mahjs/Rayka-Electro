// Import necessary hooks from react-router-dom
import { FC, useEffect, useState } from 'react';

interface Props {
  onClick?: () => void;
  href?: string;
  text: string;
  delay?: number;
}

/**
 * Navbar item for the navbar component.
 *
 * @param onClick - onClick handler for the navbar item.
 * @param href - The destination address for navigating to.
 * @param text - Text for the item.
 */
const NavbarItem: FC<Props> = ({ onClick, href, text, delay = 0 }) => {
  // Use useLocation hook to get the current location
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <li
      onClick={onClick}
      className={`text-white flex-col text-center text-[1rem] transition-all`}
      style={{
        opacity: startAnimation ? 1 : 0,
        transition: 'all 1s linear',
      }}
    >
      {/* Use a regular anchor tag or a Link component from react-router-dom */}
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavbarItem;
