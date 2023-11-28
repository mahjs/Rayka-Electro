import { useState } from 'react';
import DashboardBG from '../../assets/images/dashboard-bg.svg';
import MainContent from './MainContent';
import SideBar from './SideBar';

export type Tabs = 'my-account' | 'my-info' | 'logout' | 'upgrade' | 'users' | 'history' | 'content';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>('my-account');

  const handleSelectTab = (tab: Tabs) => {
    setSelectedTab(tab);
  };

  return (
    <div className="relative min-h-full w-full overflow-hidden">
      <img src={DashboardBG} className="absolute -z-10" />
      <div className="flex min-w-[100vw] min-h-[100vh] gap-5 pt-[9rem] pb-[1.8rem] px-[6rem]">
        <SideBar selectedTab={selectedTab} handleSelectTab={handleSelectTab} />
        <MainContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Dashboard;
