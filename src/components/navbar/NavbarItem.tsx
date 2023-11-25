// Import necessary hooks from react-router-dom
import { FC, useEffect, useState } from 'react';

interface Props {
  onClick?: () => void;
  icon?: string;
  href?: string;
  text: string;
  delay?: number;
  selected?: boolean;
}

/**
 * Navbar item for the navbar component.
 *
 * @param onClick - onClick handler for the navbar item.
 * @param href - The destination address for navigating to.
 * @param text - Text for the item.
 */
const NavbarItem: FC<Props> = ({ onClick, icon, href, text, delay = 0, selected = false }) => {
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
      className={`text-white p-3 rounded-2xl cursor-pointer whitespace-nowrap flex gap-3 text-center text-[1.2rem] transition-all btn`}
      style={{
        opacity: startAnimation ? 1 : 0,
        transform: startAnimation ? 'translateY(0)' : 'translateY(-.2rem)',
        transition: 'all 1s linear',
        background: selected ? '#fff' : 'initial',
        color: selected ? '#511A79' : '#fff',
      }}
    >
      {icon && <img src={icon} className="w-[20px] h-[20px]" />}
      {/* Use a regular anchor tag or a Link component from react-router-dom */}
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavbarItem;
