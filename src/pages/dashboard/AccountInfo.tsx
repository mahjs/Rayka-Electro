import { useState } from 'react';
import Edit from '../../assets/images/edit.svg';
import Danger from '../../assets/images/danger.svg';
import HidePassword from '../../assets/images/password.svg';
import Input from '../../components/ui/Input';
import { user } from './SideBar';

const accountInfo = {
  name: 'محمدرضا',
  lastName: 'محمدرضایی',
  accountName: 'Alireza1322',
  profileName: 'Alireza_AH191238',
};

const AccountInfo = () => {
  const [accountInfoState, setAccountInfoState] = useState(accountInfo);
  const [passwordState, setPasswordState] = useState({
    oldPassword: '123455',
    newPassword: '',
    confirmNewPassword: '',
  });

  return (
    <div className="flex flex-col gap-16 text-white">
      <div className="flex gap-3 ">
        <div className="relative w-[90px] h-[90px] border-[2px] border-white bg-[#ffffff22] rounded-2xl">
          {/* {profile && <img src={profile}/>} */}
          <button className="absolute -bottom-8 left-[50%] whitespace-nowrap -translate-x-[50%] underline text-[.8rem] opacity-50">
            آپلود تصویر
          </button>
        </div>
        <div className="flex flex-col">
          <h4 className="text-white text-[2.2rem]">{user.name}</h4>
          <div className="flex gap-2">
            <p className="text-[#ffffff88] text-[1.2rem]">{user.email}</p>
            <img src={Edit} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-8">
          <h5 className="opacity-40 text-[1.2rem] whitespace-nowrap">تغییر مشخصات</h5>
          <div className="h-[1px] bg-white opacity-10 w-[90%]" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-x-10 gap-y-5 flex-wrap">
          <Input
            title="نام"
            value={accountInfoState.name}
            icon={Edit}
            setValue={(value: string) => setAccountInfoState((prevInfo) => ({ ...prevInfo, name: value }))}
            type="text"
          />
          <Input
            title="نام خانوادگی"
            value={accountInfoState.lastName}
            icon={Edit}
            setValue={(value: string) => setAccountInfoState((prevInfo) => ({ ...prevInfo, lastName: value }))}
            type="text"
          />
          <Input
            title="نام کاربری"
            value={accountInfoState.accountName}
            icon={Danger}
            setValue={(value: string) => setAccountInfoState((prevInfo) => ({ ...prevInfo, accountName: value }))}
            type="text"
          />
          <Input
            title="نام نمایشی"
            value={accountInfoState.profileName}
            icon={Edit}
            setValue={(value: string) => setAccountInfoState((prevInfo) => ({ ...prevInfo, profileName: value }))}
            type="text"
          />
          <button className="absolute top-[4rem] left-5 px-5 bg-white  text-[#511A79] text-[1.5rem] h-[3.5rem] self-end font-bold  rounded-2xl">
            اعمال تفییرات
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-8">
          <h5 className="opacity-40 text-[1.2rem] whitespace-nowrap">تغییر رمز عبور</h5>
          <div className="h-[1px] bg-white opacity-10 w-[90%]" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-x-10 gap-y-5 flex-wrap">
          <Input title="رمز عبور فعلی" value={passwordState.oldPassword} icon={HidePassword} type="password" disable />
          <Input
            title="رمز عبور جدید"
            value={passwordState.newPassword}
            placeholder="Example@123"
            icon={HidePassword}
            setValue={(value: string) => setPasswordState((prevInfo) => ({ ...prevInfo, newPassword: value }))}
            type="password"
          />
          <Input
            title="تکرار رمز عبور جدید"
            value={passwordState.confirmNewPassword}
            placeholder="Example@123"
            icon={HidePassword}
            setValue={(value: string) => setPasswordState((prevInfo) => ({ ...prevInfo, confirmNewPassword: value }))}
            type="password"
          />
          <div className="w-full">
            <button className="bg-white  text-[#511A79] text-[1.5rem] h-[3.5rem] self-end font-bold min-w-[280px] rounded-2xl">
              تغییر رمز عبور
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
