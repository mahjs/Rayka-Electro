import Laptob from '../../assets/images/laptob.png';
import Windows from '../../assets/images/windows.svg';
import Android from '../../assets/images/android.svg';
import Caret from '../../assets/images/caret.svg';

const ElectroApp = () => {
  return (
    <section id="ElectroApp" className="flex relative justify-center flex-col gap-5 min-h-[95vh]">
      <div className="-mt-12 flex items-center">
        <img alt="laptop" src={Laptob} className="col2 w-[1000px]" />
        <div className="flex flex-col">
          <p className="text-[5.5rem] font-bold text-white">
            دانلود اپلیکیشن <span className="text-[#8C39F3]">الکترو</span>
          </p>
          <p className="text-[2rem] max-w-[80%] text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
          </p>
          <div className="flex mt-4 gap-3">
            <button className="flex justify-center items-center gap-2 border-[2px] py-2 px-5 rounded-full bg-[#ffffff33]">
              <img alt="window" src={Windows} className="w-[20px]" />
              <p className="text-white">اپلیکیشن ویندوز</p>
            </button>
            <button className="flex justify-center items-center gap-2 py-2 px-5 bg-[#8C39F3] rounded-full">
              <img alt="android" src={Android} className="w-[20px]" />
              <p className="text-white ">اپلیکیشن اندروید</p>
            </button>
          </div>
        </div>
      </div>
      <img alt="caret" src={Caret} className="w-[45px] absolute bottom-20 left-[50%] -translate-x-[50%]" />
    </section>
  );
};

export default ElectroApp;
