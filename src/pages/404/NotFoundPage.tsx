import { Link } from 'react-router-dom';
import ThreeBackground from '../login/ThreeBackground';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <div className={`overflow-x-hidden h-[100vh] relative bg-black`}>
      <ThreeBackground isCircular={false} />
      <div className="flex absolute flex-col top-0 w-full h-full justify-evenly items-center px-4 md:px-0 mt-3">
        <main className="h-screen w-full flex flex-col justify-center items-center bg-transparent">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          {/* <div className="bg-white px-2 text-[#2D0172] text-sm rounded rotate-12 absolute">Page Not Found</div> */}
          <p className="header-1 text-white "> صفحه‌ی مورد نظر پیدا نشد.</p>
          <button
            onClick={handleNavigate}
            type="button"
            className="text-[#511A79] btn  bg-gray-100 hover:text-white whitespace-nowrap mt-8 hover:bg-[#511A79]  font-medium rounded-lg  lg:px-6 px-4 py-2.5 text-center inline-flex items-center  "
          >
            بازگشت به صفحه‌ی اصلی
          </button>
        </main>
      </div>
    </div>
  );
};

export default NotFoundPage;
