import { useEffect, useState } from 'react';
import DashboardBG from '../../assets/images/dashboard-bg.svg';
import MainContent from './MainContent';
import SideBar from './SideBar';
import Navbar from '../../components/navbar/Navbar';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

export type Tabs = 'my-account' | 'my-info' | 'logout' | 'upgrade' | 'users' | 'history' | 'content';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) navigate('/');
  });

  const [selectedTab, setSelectedTab] = useState<Tabs>('my-account');
  // const [selectedTabAdmin, setSelectedTabAdmin] = useState<Tabs>('users');

  const handleSelectTab = (tab: Tabs) => {
    setSelectedTab(tab);
    // setSelectedTabAdmin(tab);
    // if (tab === 'history' || tab === 'users' || tab === 'content') {
    //   navigate('/admin');
    // } else {
    //   navigate('/dashboard');
    // }
  };

  return (
    <div className="relative min-h-full w-full overflow-hidden">
      <Navbar />
      <img src={DashboardBG} className="absolute min-w-[100vw] min-h-[100vh] -z-10" />
      <div className="flex items-center md:items-stretch flex-col lg:flex-row min-w-[100vw] min-h-[100vh] gap-5 pt-[4rem] md:pt-[6rem] lg:pt-[9rem] pb-[1.8rem] px-[6rem]">
        <SideBar selectedTab={selectedTab} handleSelectTab={handleSelectTab} />
        <MainContent
          // selectedTabAdmin={selectedTabAdmin}
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
};

export default Dashboard;
