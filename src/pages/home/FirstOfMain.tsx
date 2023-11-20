import Buttons from "../../components/ui/Buttons";
import electro from "../../assets/images/blockchain.png";

const FirstOfMain = () => {
  return (
    <div className="flex justify-center 	 lg:justify-between mt-8">
      <div className="mt-56 flex flex-col justify-start 	">
        <p className="text-white text-3xl	">
          با <span className="text-[#000dff]">((الکترو))</span> ازاد باش
        </p>
        <p className="text-white mt-4">
          الکترو با هدف کمک به جامعه آنلاین ایران ایجاد شد تا با
        </p>
        <p className="text-white">
          تحریم های ظالمانه شرکت های خارجی مقابله کند...
        </p>
        <div className="mt-4">
          <Buttons kind="blue">دانلود الکترو</Buttons>
          <Buttons kind="yellow">دی ان اس</Buttons>
        </div>
      </div>
      <div className="col2 lg:flex hidden">
        <img
          src={electro}
          alt="الکترو electro Electro"
          style={{ width: "600px" }}
        />
      </div>
    </div>
  );
};

export default FirstOfMain;
