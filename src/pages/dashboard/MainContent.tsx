import { FC } from 'react';
import { Tabs } from './Dashboard';
import MyAccount from './MyAccount';
import { user } from './SideBar';
import AccountInfo from './AccountInfo';
import BuyPlan from './BuyPlan';
import Users from './Users';
import History from './History';
import Content from './Content';

interface Props {
  selectedTab: Tabs;
  selectedTabAdmin: Tabs;
}

const MainContent: FC<Props> = ({ selectedTab, selectedTabAdmin }) => {
  return (
    <main className="bg-[#ffffff18] min-h-full min-w-[360px] w-full px-6 md:px-10 py-7 rounded-2xl backdrop-blur-[37px]">
      {/* My account component*/}
      {selectedTab === 'my-account' && <MyAccount premium={user.premium} />}
      {selectedTab === 'my-info' && <AccountInfo />}
      {selectedTab === 'upgrade' && <BuyPlan />}
      {selectedTabAdmin === 'users' && <Users />}
      {selectedTabAdmin === 'history' && <History />}
      {selectedTabAdmin === 'content' && <Content />}
    </main>
  );
};

export default MainContent;
