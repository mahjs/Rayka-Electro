// Import necessary hooks from react-router-dom
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  onClick?: () => void;
  icon?: string;
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
const NavbarItem: FC<Props> = ({ onClick, icon, href, text, delay = 0 }) => {
  // Use useLocation hook to get the current location
  const { pathname } = useLocation();

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
      className={`text-white p-3 rounded-xl whitespace-nowrap flex gap-3 text-center text-[1.2rem] transition-all btn`}
      style={{
        opacity: startAnimation ? 1 : 0,
        transform: startAnimation ? 'translateY(0)' : 'translateY(-.2rem)',
        transition: 'all 1s linear',
        background: pathname === href ? '#fff' : 'initial',
        color: pathname === href ? '#511A79' : '#fff',
      }}
    >
      {icon && <img src={icon} className="w-[20px] h-[20px]" />}
      {/* Use a regular anchor tag or a Link component from react-router-dom */}
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavbarItem;
