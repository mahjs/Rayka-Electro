import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import DashboardBG from '../../assets/images/dashboard-bg.svg';
import EducationMenu from './EducationMenu';

const Layout = () => {
  return (
    <div className=" relative min-h-full w-full overflow-hidden">
      <Navbar />
      <img alt="dashboardBG" src={DashboardBG} className="absolute min-w-[100vw] min-h-[100vh] -z-10" />
      <div className="flex absolute items-center  flex-col  min-w-[100vw] min-h-[100vh] justify-start gap-6 pt-[4rem] md:pt-[6rem] lg:pt-[6rem] pb-[1.8rem] px-[3rem]">
        <p className="text-white header-1">
          آموزش استفاده از سرویس‌های <span className="text-[#8C39F3]">الکترو</span>
        </p>
        <EducationMenu />
      </div>
    </div>
  );
};

export default Layout;
