import DashboardBG from '../../assets/images/dashboard-bg.svg';
import MainContent from './MainContent';
import SideBar from './SideBar';

const Dashboard = () => {
  return (
    <div className="relative min-h-full w-full overflow-hidden ">
      <img src={DashboardBG} className="absolute -z-10" />
      <div className="flex min-h-[100vh] gap-5 pt-[9rem] pb-[4rem] px-[6rem]">
        <SideBar selectedTab="my-account" />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
