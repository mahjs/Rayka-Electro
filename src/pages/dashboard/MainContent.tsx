import { FC } from 'react';
import { Tabs } from './Dashboard';
import MyAccount from './MyAccount';
import { user } from './SideBar';
import AccountInfo from './AccountInfo';

interface Props {
  selectedTab: Tabs;
}

const MainContent: FC<Props> = ({ selectedTab }) => {
  return (
    <main className="bg-[#ffffff18] min-h-full px-10 py-7 rounded-2xl w-full backdrop-blur-[37px]">
      {/* My account component*/}
      {selectedTab === 'my-account' && <MyAccount premium={user.premium} />}
      {selectedTab === 'my-info' && <AccountInfo />}
    </main>
  );
};

export default MainContent;
