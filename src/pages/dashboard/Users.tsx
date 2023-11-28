import { useState } from 'react';
import CustomTable from '../../components/ui/CustomTable';
import exel from '../../assets/images/exel.svg';
const cellHeaders = ['ایدی', 'نام کاربری', 'دسترسی پلان', 'ایمیل', 'تاریخ ساخت', 'گزینه‌ها'];
const userRows = [
  {
    id: 1,
    userName: 'محمدرضا',
    position: 'کاربر معمولی-رایگان',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 2,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 3,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 4,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
];
const Users = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start mb-7 gap-[0.94rem]">
        <form className="basis-2/5">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm bg-[#ffffff18] h-[3rem] backdrop-blur-[37px]   rounded-lg  text-white"
              placeholder="جستجو کنید ..."
              required
            />
          </div>
        </form>

        <select
          id="countries"
          className="bg-[#ffffff18] h-[3rem] backdrop-blur-[37px]  basis-1/5    text-white text-sm rounded-lg  block w-full p-2.5 "
        >
          <option selected>همه تراکنش ها</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <button
          type="button"
          className="text-gray-900 h-[3rem] bg-gray-100 hover:bg-gray-200   font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center  me-2 mb-2"
        >
          خروجی اکسل <img src={exel} alt="exel" className="mr-1" />
        </button>
      </div>

      <CustomTable userRows={userRows} isUser={true} cellHeaders={cellHeaders} />
    </div>
  );
};

export default Users;
