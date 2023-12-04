import CustomTable from '../../components/ui/CustomTable';
import exel from '../../assets/images/exel.svg';
import SelectButton from '../../components/ui/SelectButton';
import deleteIcon from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';
import option from '../../assets/images/option.svg';

const cellHeaders = ['ایدی', 'نام کاربری', 'دسترسی پلان', 'ایمیل', 'تاریخ ساخت', 'گزینه‌ها'];
const userRows = [
  {
    id: 1,
    userName: 'محمدرضا',
    position: 'کاربر معمولی-رایگان',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 2,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 3,
    userName: 'محمدرضا',
    discrib: 'خرید پلان ویژه',

    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 4,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    images: [deleteIcon, edit, option],
  },
];
const Users = () => {
  return (
    <div className="flex flex-col">
      <div className="flex  lg:justify-start justify-center mb-7 gap-[0.94rem] flex-wrap">
        <form className=" lg:basis-2/5 basis-full">
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
              className="block w-full p-4 ps-10 text-sm bg-[#ffffff18] h-[3rem] backdrop-blur-[37px] body-1  rounded-lg  text-white"
              placeholder="جستجو کنید ..."
              required
            />
          </div>
        </form>

        <SelectButton basis="medium">
          <option>همه کاربر‌ها</option>
          <option>2</option>
          <option>3</option>
        </SelectButton>

        <button
          type="button"
          className="text-[#511A79] btn  h-[3rem] bg-gray-100 hover:bg-gray-200   font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center  me-2 mb-2"
        >
          خروجی اکسل
          <img src={exel} alt="exel" className="mr-2 w-[20px]" />
        </button>
      </div>

      <CustomTable userRows={userRows} isUser={true} cellHeaders={cellHeaders} />
    </div>
  );
};

export default Users;