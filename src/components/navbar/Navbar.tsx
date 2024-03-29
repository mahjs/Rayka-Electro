import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';
import Logo from '../../assets/images/Logo.svg';
import Menu from '../../assets/images/menu.svg';
import Home from '../../assets/images/home.svg';
import HomeWhite from '../../assets/images/home-white.svg';
import Download from '../../assets/images/download.svg';
import DownloadWhite from '../../assets/images/download-white.svg';
import DNS from '../../assets/images/dns.svg';
import DNSWhite from '../../assets/images/dns-white.svg';
import Crown from '../../assets/images/small-crown.svg';
import CrownWhite from '../../assets/images/small-crown-white.svg';
import Server from '../../assets/images/server.svg';
import ServerWhite from '../../assets/images/server-white.svg';
import ArrowLeft from '../../assets/images/left-arrow.svg';
import Person from '../../assets/images/person.svg';
import Swiper from 'swiper';
import { useAuth } from '../../contexts/authContext';


/**
 * Props for the Navbar component.
 * 
 * @prop {Swiper | null} [swiper] - An optional Swiper instance for navigation control.
 * @prop {number} [currentIndex] - The current index of the selected navbar item.
 */
interface Props {
  swiper?: Swiper | null;
  currentIndex?: number;
}

/**
 * Navbar component for the application.
 * This component renders the main navigation bar and handles user interactions
 * such as navigating between pages and toggling visibility of the navbar in
 * mobile view.
 * 
 * It uses the `useAuth` hook to determine login status and conditionally
 * renders the login or dashboard button.
 * 
 * @component
 * @param {Props} props - The props for the Navbar component.
 * @param {Swiper | null} [props.swiper] - Swiper instance for controlling page navigation.
 * @param {number} [props.currentIndex] - The current active index for highlighting the navbar item.
 * 
 * @returns {React.ReactElement} The rendered Navbar component.
 */
const Navbar: FC<Props> = ({ swiper, currentIndex }) => {
  const { isLogin } = useAuth();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Make menu close after choosing one page.
  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  // Make body not scrollable after menu opened
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showNavbar]);

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);

  /**
 * Renders the login button in the navigation bar.
 *
 * This function creates a list item (`<li>`) that serves as the login button. 
 * The button's behavior changes based on the user's login status. If the user is logged in,
 * clicking the button navigates to the dashboard. If not, it navigates to the login page.
 *
 * The button also has an animation effect controlled by the `startAnimation` state.
 * When `startAnimation` is true, the button becomes fully visible and moves slightly to the left.
 * This animation is applied with a linear transition over 1 second.
 * 
 * @returns {React.ReactElement} The rendered login button as a list item.
 */
  const renderLoginButton = () => {
    return (
      <li
        onClick={() => navigate(isLogin ? '/dashboard' : '/login')}
        className="flex w-[90%] whitespace-nowrap mb-5 lg:mb-0 lg:mr-0 items-center justify-center font-bold gap-2 bg-[#8C39F3] p-5 rounded-full"
        style={{
          opacity: startAnimation ? 1 : 0,
          transform: startAnimation ? 'translateX(-1rem)' : '',
          transition: 'all 1s linear',
        }}
      >
        <img src={Person} className="w-4" loading="lazy" />
        <Link to={isLogin ? '/dashboard' : '/login'}>
          <button className="text-white btn">{isLogin ? 'داشبورد' : 'ورود به حساب کاربری'}</button>
        </Link>
      </li>
    );
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between  border-[#ffffff22] px-5 py-5  transition-all duration-500 `}
    >
      <nav className="hidden lg:block">
        <ul className="hidden gap-10 lg:flex items-center">
          {renderLoginButton()}
          <NavbarItem
            selected={currentIndex === 0}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              swiper?.slideTo(0);
            }}
            text="صفحه اصلی"
            delay={200}
          />
          <NavbarItem
            selected={currentIndex === 1}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              swiper?.slideTo(1);
            }}
            text="اپلیکیشن"
            delay={400}
          />
          <NavbarItem
            selected={currentIndex === 2}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              swiper?.slideTo(2);
            }}
            text="دی‌ان‌اس"
            delay={600}
          />
          <NavbarItem
            selected={currentIndex === 3}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              swiper?.slideTo(3);
            }}
            text="تعرفه"
            delay={800}
          />
          <NavbarItem
            selected={currentIndex === 4}
            onClick={() => {
              navigate('/education');
              swiper?.slideTo(4);
            }}
            text="آموزش"
            delay={1000}
          />
          <NavbarItem
            selected={currentIndex === 4}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              swiper?.slideTo(4);
            }}
            text="وضعیت سرورها"
            delay={1200}
          />
        </ul>
      </nav>
      <nav className="lg:hidden">
        <ul
          className={`fixed ${showNavbar ? 'right-0' : '-right-[100%]'
            } top-0 flex h-full w-[20rem] flex-col justify-start pt-16 px-6 gap-5 bg-[#ffffff22] border-l-[2px] border-[#ffffff43] rounded-tl-3xl rounded-bl-3xl backdrop-blur-[40px] transition-all duration-500 lg:hidden`}
        >
          <button onClick={() => setShowNavbar(false)} className="absolute right-5 top-5 flex items-center gap-2">
            <img loading="lazy" src={ArrowLeft} className="rotate-[180deg]" />
            <p className="btn-3 text-white">بازگشت</p>
          </button>
          <p className="absolute btn-3 z-20 text-white bottom-5 left-[50%] whitespace-nowrap -translate-x-[50%]">
            POWERED BY ELECTRO
          </p>
          {renderLoginButton()}
          <NavbarItem
            icon={currentIndex === 0 ? Home : HomeWhite}
            selected={currentIndex === 0}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              handleLinkClick();
              swiper?.slideTo(0);
            }}
            text="صفحه اصلی"
          />
          <NavbarItem
            onClick={() => {
              if (pathname !== '/') navigate('/');
              handleLinkClick();
              swiper?.slideTo(1);
            }}
            icon={currentIndex === 1 ? Download : DownloadWhite}
            selected={currentIndex === 1}
            text="دانلود اپلیکیشن و دی‌ان‌اس"
          />
          <NavbarItem
            icon={currentIndex === 2 ? DNS : DNSWhite}
            selected={currentIndex === 2}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              handleLinkClick();
              swiper?.slideTo(2);
            }}
            text="دی‌ان‌اس"
          />
          <NavbarItem
            icon={currentIndex === 3 ? Crown : CrownWhite}
            selected={currentIndex === 3}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              handleLinkClick();
              swiper?.slideTo(3);
            }}
            text="پلن‌های الکترو"
          />
          <NavbarItem
            icon={currentIndex === 4 ? Server : ServerWhite}
            selected={currentIndex === 4}
            onClick={() => {
              if (pathname !== '/') navigate('/');
              handleLinkClick();
              swiper?.slideTo(4);
            }}
            text="وضعیت سرور‌ها"
          />
        </ul>
      </nav>
      <img
        onClick={() => setShowNavbar(!showNavbar)}
        className="h-[17px] w-[25px] lg:hidden"
        src={Menu}
        width={25}
        height={17}
        alt="menu icon"
        loading="lazy"
      />
      <Link to="/" className="mr-auto">
        <img
          loading="lazy"
          src={Logo}
          width={50}
          height={50}
          alt="rayka icon"
          className="h-[25px] w-[25px] md:h-[50px] md:w-[50px]"
        />
      </Link>
    </header>
  );
};

export default Navbar;
