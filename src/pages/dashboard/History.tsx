import React from 'react';
import CustomTable from '../../components/ui/CustomTable';
import exel from '../../assets/images/exel.svg';
import ArrowDown from '../../assets/images/arrow-down.svg';
import SelectButton from '../../components/ui/SelectButton';

const cellHeaders = ['ایدی', 'نام کاربری', 'دسترسی پلان', 'ایمیل', 'تاریخ ساخت', 'گزینه‌ها'];
const historyRows = [
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    code: 1245,
    name: 'محمدرضا',
    status: ' موفق',
    discrib: 'پرداخت موفق',
    date: '1400/01/01',
    option: 'حذف',
  },
];

const History = () => {
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

        <SelectButton basis="medium">
          <option>همه تراکنش‌ها</option>
          <option>همه تراکنش‌ها</option>
          <option>همه تراکنش‌ها</option>
        </SelectButton>
        <button
          type="button"
          className="text-gray-900 h-[3rem] bg-gray-100 hover:bg-gray-200   font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center  me-2 mb-2"
        >
          خروجی اکسل <img src={exel} alt="exel" className="mr-1" />
        </button>
      </div>

      <CustomTable historyRows={historyRows} isUser={false} cellHeaders={cellHeaders} />
    </div>
  );
};

export default History;
