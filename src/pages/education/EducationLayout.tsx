import Navbar from '../../components/navbar/Navbar';
import DashboardBG from '../../assets/images/dashboard-bg.svg';
import EducationMenu from './EducationMenu';
import EducationDetail from './EducationDetail';
import { useState } from 'react';

const Layout = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(null);

  const handleMenuItemClick = (index: number) => {
    setSelectedMenuIndex(index);
  };

  return (
    <div className=" relative md:min-h-full w-full md:overflow-hidden ">
      <Navbar />
      <img alt="dashboardBG" src={DashboardBG} className="absolute min-w-[100vw]  md:min-h-[100vh] -z-10 bg-cover" />
      <div className="flex absolute items-center  flex-col  min-w-[100vw] min-h-[100vh] justify-center md:justify-start gap-6 pt-[4rem] md:pt-[6rem] lg:pt-[6rem]  px-0 md:px-[3rem]">
        <p className="text-white header-1 md:px-0 px-16">
          آموزش استفاده از سرویس‌های <span className="text-[#8C39F3]">الکترو</span>
        </p>
        {selectedMenuIndex === null ? (
          <EducationMenu onMenuItemClick={handleMenuItemClick} />
        ) : (
          <EducationDetail selectedIndex={selectedMenuIndex} />
        )}
      </div>
    </div>
  );
};

export default Layout;
