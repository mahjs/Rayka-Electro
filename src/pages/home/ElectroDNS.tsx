import Phone from '../../assets/images/phone.png';
import Caret from '../../assets/images/caret.svg';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';

const ElectroDNS = () => {
  return (
    <section id="ElectroDNS" className="relative flex justify-around flex-wrap min-h-[100vh]">
      <div className="flex items-center justify-center">
        <div className="flex pr-36 flex-col">
          <p className="text-[5.5rem] font-bold text-white">
            دی‌ان‌اس <span className="text-[#8C39F3]">الکترو</span>
          </p>
          <p className="text-[2rem] max-w-[95%] text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
          </p>
          <div className="flex gap-3 mt-5">
            <UnderlineCopyText text="78.157.42.100" />
            <UnderlineCopyText text="78.157.42.101" />
          </div>
        </div>
        <img src={Phone} className="w-[1000px] ml-20 col2" />
      </div>
      <img src={Caret} className="w-[45px] absolute bottom-10 left-[50%] -translate-x-[50%]" />
    </section>
  );
};

export default ElectroDNS;
