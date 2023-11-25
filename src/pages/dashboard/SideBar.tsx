import ProfileInfo from './ProfileInfo';
import SmallCrown from '../../assets/images/small-crown.svg';
import Profile from '../../assets/images/profile.svg';
import Logout from '../../assets/images/logout.svg';
import LeftArrow from '../../assets/images/left-arrow.svg';
import StarPremium from '../../assets/images/star-premium.svg';
import Bell from '../../assets/images/bell.svg';
import { FC } from 'react';
import { Tabs } from './Dashboard';

export const user = {
  name: 'Alireza_AH191238',
  email: 'alireza_asda1234@gmail.com',
  premium: true,
};

const tabs = [
  {
    name: 'my-account',
    title: 'سطح حساب من',
    image: SmallCrown,
  },
  {
    name: 'my-info',
    title: 'مشخصات من',
    image: Profile,
  },
  {
    name: 'logout',
    title: 'خروج از حساب',
    image: Logout,
  },
];

interface Props {
  selectedTab: string;
  handleSelectTab: (tab: Tabs) => void;
}

const SideBar: FC<Props> = ({ selectedTab, handleSelectTab }) => {
  return (
    <aside className="bg-[#ffffff18] rounded-2xl min-w-[300px] backdrop-blur-[37px] flex flex-col px-6 py-5 gap-4">
      <ProfileInfo name={user.name} email={user.email} premium={user.premium} />
      <div className="h-[1px] bg-[#ffffff44] mx-auto w-[100%]" />
      <div className="flex flex-col gap-1">
        {tabs.map((tab) => (
          <button
            onClick={() => handleSelectTab(tab.name as Tabs)}
            key={tab.name}
            className="flex gap-3 items-center p-2 rounded-lg"
            style={{
              background: selectedTab === tab.name ? 'white' : 'none',
            }}
          >
            <img src={tab.image} alt={tab.name} className="bg-[#ffffff88] p-[2px] rounded-md" />
            <p
              style={{
                color: selectedTab === tab.name ? '#541A79' : 'white',
              }}
            >
              {tab.title}
            </p>
          </button>
        ))}
      </div>

      {/* Premium card */}
      <div className="relative flex flex-col gap-5 py-2 px-4 text-white bg-[#ffffff22] rounded-xl overflow-hidden mt-auto">
        <img src={StarPremium} className="absolute w-[145px] h-[145px] opacity-10 -top-[60%] -left-[15%]" />
        <button className="flex gap-3 items-center ">
          <img src={StarPremium} />
          <p>نوع حساب شما</p>
          <img src={LeftArrow} className="mr-auto" />
        </button>

        <div className="flex flex-col">
          <p className="text-[1.5rem] font-bold">حساب کاربری ویژه</p>
          <span className="text-[#ffffff88]">{29} روز باقی مانده</span>
        </div>
      </div>

      <button className="flex items-center gap-3 text-white  bg-[#ffffff22] py-2 px-4 rounded-xl">
        <img src={Bell} />
        <span className="font-bold">اعلانات</span>
        <span className="mr-auto py-1 px-2 text-[.8rem] rounded-full bg-white text-[#511A79]">{2}</span>
      </button>
    </aside>
  );
};

export default SideBar;
