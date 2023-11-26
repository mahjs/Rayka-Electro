import { useState } from 'react';
import DashboardBG from '../../assets/images/dashboard-bg.svg';
import MainContent from './MainContent';
import SideBar from './SideBar';
import Navbar from '../../components/navbar/Navbar';

export type Tabs = 'my-account' | 'my-info' | 'logout' | 'upgrade';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>('my-account');

  const handleSelectTab = (tab: Tabs) => {
    setSelectedTab(tab);
  };

  return (
    <div className="relative min-h-full w-full overflow-hidden">
      <Navbar />
      <img src={DashboardBG} className="absolute min-w-[100vw] min-h-[100vh] -z-10" />
      <div className="flex items-center md:items-stretch flex-col lg:flex-row min-w-[100vw] min-h-[100vh] gap-5 pt-[9rem] pb-[1.8rem] px-[6rem]">
        <SideBar selectedTab={selectedTab} handleSelectTab={handleSelectTab} />
        <MainContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Dashboard;
