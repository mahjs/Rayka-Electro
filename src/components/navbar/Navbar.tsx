import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import NavbarItem from "./NavbarItem";
import Menu from "../../assets/images/menu.svg";
import electroIcon from "../../assets/images/electro.png";
/**
 * Navbar for the whole app.
 */

const Navbar: FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const pathname = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Make menu close after choosing one page.
  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  // Make body not scrollable after menu opened
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNavbar]);

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <header
      className={` flex w-full items-center justify-between md:py-16 py-6 bg-black border-[#ffffff22]  `}
    >
      <nav className="hidden lg:block">
        <ul className="hidden gap-16 lg:flex">
          <NavbarItem href="/" text="صفحه اصلی" />
          <NavbarItem href="/Financial-support" text="حمایت مالی" />
          <NavbarItem href="/status" text="وضعیت" />
          <NavbarItem text="حالت" />
        </ul>
      </nav>
      <nav className="lg:hidden">
        <ul
          className={`fixed ${
            showNavbar ? "left-0" : "left-full"
          } top-0 flex h-full w-full flex-col justify-center gap-10 bg-[#000000cc] backdrop-blur-md transition-all duration-500 lg:hidden`}
        >
          <button
            onClick={() => setShowNavbar(false)}
            className="absolute left-9 top-8 flex items-center gap-3"
          >
            <p className="miniText text-white">بازگشت</p>
            {/* <Image
              src={Arrow}
              width={15}
              height={15}
              className="h-[15px] w-[15px]"
              alt="arrow icon"
            /> */}
          </button>
          <NavbarItem onClick={handleLinkClick} href="/" text="خانه" />
          <NavbarItem
            onClick={handleLinkClick}
            href="/about-us"
            text="درباره‌ما"
          />
          <NavbarItem
            onClick={handleLinkClick}
            href="/contact-us"
            text="ارتباط با ما"
          />
          <NavbarItem
            onClick={handleLinkClick}
            href="/jobs"
            text="فرصت‌های شغلی"
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
      />
      <Link to="/" className="mr-auto">
        <img src={electroIcon} style={{width: "150px"}} alt="rayka icon" />
      </Link>
    </header>
  );
};

export default Navbar;
