import { FC } from 'react';
import { Tabs } from './Dashboard';
import MyAccount from './MyAccount';
import { user } from './SideBar';

interface Props {
  selectedTab: Tabs;
}

const MainContent: FC<Props> = ({ selectedTab }) => {
  return (
    <main className="bg-[#ffffff33] min-h-full px-8 py-7 rounded-2xl w-full backdrop-blur-[37px]">
      {/* My account component*/}
      {selectedTab === 'my-account' && <MyAccount premium={user.premium} />}
    </main>
  );
};

export default MainContent;
