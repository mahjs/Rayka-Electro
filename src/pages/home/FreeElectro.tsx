import Main from '../../assets/images/main.png';
import Mouse from '../../assets/images/mouse.svg';

const FreeElectro = () => {
  return (
    <div id="FreeElectro" className="px-10 md:px-20 flex flex-col justify-center min-h-[100dvh]  z-20">
      <div className="flex justify-center items-center lg:justify-between">
        <div className=" basis-2/5">
          <p className="text-white text-[5.5rem] font-bold slideLeft header-1 whitespace-nowrap	">
            با
            <span className="text-[#8C39F3]"> ((الکترو)) </span>
            آزادباش!
          </p>
          <p className="text-white -mb-3 mt-4 text-[2.5rem] showFromRight header-2 text-justify">
            الکترو با هدف کمک به جامعه آنلاین ایران ایجاد شد تا{' '}
          </p>
          <p className="text-white text-[2.5rem] showFromRight header-2 text-justify">
            تحریم های ظالمانه شرکت های خارجی مقابله کند...
          </p>
        </div>
        <div className="flex  slideDown ">
          <img src={Main} alt="الکترو electro Electro" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="slideUpScroll flex absolute bottom-5 left-[50%] translate-x-[50%] flex-col justify-center items-center gap-2">
        <img src={Mouse} className="opacity-75" />
        <p className="text-white text-[.8rem] opacity-75">اسکرول کنید</p>
      </div>
    </div>
  );
};

export default FreeElectro;