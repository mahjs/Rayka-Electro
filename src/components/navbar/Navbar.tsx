import { Link } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';
import Logo from '../../assets/images/Logo.svg';
import Person from '../../assets/images/person.svg';

/**
 * Navbar for the whole app.
 */

const Navbar: FC = () => {
  // const [showNavbar, setShowNavbar] = useState<boolean>(false);

  // const pathname = useLocation();
  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // // Make menu close after choosing one page.
  // useEffect(() => {
  //   setShowNavbar(false);
  // }, [pathname]);

  // // Make body not scrollable after menu opened
  // useEffect(() => {
  //   if (showNavbar) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [showNavbar]);

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const renderLoginButton = () => {
    return (
      <li
        className="flex font-bold gap-2 bg-[#8C39F3] p-5 rounded-full"
        style={{
          opacity: startAnimation ? 1 : 0,
          transform: startAnimation ? 'translateX(-1rem)' : '',
          transition: 'all 1s linear',
        }}
      >
        <img src={Person} className="w-3" />
        <button className="text-white btn">ورود به حساب کاربری</button>
      </li>
    );
  };

  return (
    <header
      className={`absolute z-20 flex w-full items-center justify-between md:py-16 py-6 border-[#ffffff22] px-10 lg:px-20`}
    >
      <nav className="hidden md:block">
        <ul className="hidden gap-16 lg:flex items-center ">
          {renderLoginButton()}
          <NavbarItem href="/" text="صفحه اصلی" delay={200} />
          <NavbarItem href="/financial-support" text="اپلیکیشن و دی‌ان‌اس" delay={400} />
          <NavbarItem href="/prices" text="تعرفه" delay={600} />
          <NavbarItem href="/servers-status" text="وضعیت سرورها" delay={800} />
        </ul>
      </nav>
      {/* <img
        onClick={() => setShowNavbar(!showNavbar)}
        className="h-[17px] w-[25px] lg:hidden"
        src={Menu}
        width={25}
        height={17}
        alt="menu icon"
      /> */}
      <Link to="/" className="mr-auto">
        <img src={Logo} style={{ width: '40px' }} alt="rayka icon" />
      </Link>
    </header>
  );
};

export default Navbar;
