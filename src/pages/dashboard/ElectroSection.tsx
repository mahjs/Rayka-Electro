import Phone from '../../assets/images/phone.png';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';

const ElectroSection = () => {
  return (
    <div className="flex flex-col pt-6">
      <div className="flex gap-4 justify-between ">
        <div className="flex basis-2/5 flex-col justify-center gap-4	">
          <p className=" text-white header-1">
            دی‌ان‌اس <span className="text-[#8C39F3] ">الکترو</span>
          </p>

          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-white bg-[#ffffff18] backdrop-blur-[37px] rounded-lg border border-gray-300 "
            placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده"
          ></textarea>
          <div className="flex gap-4 body ">
            <UnderlineCopyText text="78.157.42.100" />
            <UnderlineCopyText text="78.157.42.100" />
          </div>
        </div>
        <div className="flex flex-col basis-3/5	">
          <img
            alt="phone"
            style={{
              transition: 'all 1s ease-out',
              objectFit: 'contain',
              maxHeight: '100dvh',
              maxWidth: '100%',
            }}
            src={Phone}
            className="rotateMagnifier  "
          />
        </div>
      </div>
    </div>
  );
};

export default ElectroSection;
