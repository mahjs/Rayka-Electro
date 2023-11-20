import GradientButton from '../../components/ui/GradientButton';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';
import WhiteButton from '../../components/ui/WhiteButton';

const DNSGaming = () => {
  return (
    <section className="bg-slate-500 flex flex-col gap-5 py-8">
      <h2 className="text-center text-[2.5rem] font-bold">Gaming DNS</h2>

      <div className="flex justify-center gap-10 flex-wrap">
        <div className="flex flex-col gap-5">
          <div>
            <p>برای استفاده از «الکترو» کافیه DNS رو روی این IP ها تنظیم کنید</p>
            <p>برای کپی روی هرکدام از دی ان اس کلیک کنید</p>
          </div>
          <div className="flex items-end">
            <UnderlineCopyText text="78.157.42.100" />
            <span className="mr-2">,</span>
            <UnderlineCopyText text="78.157.42.101" />
          </div>
          <GradientButton text="نحوه تنظیم روی ویندوز" />
        </div>
        <div className="flex flex-col gap-5">
          <p>نحوه تنظیم دستی دی ان اس های «الکترو» روی Android</p>
          <div className="flex flex-wrap justify-around">
            <WhiteButton text="لینک آموزش" />
            <WhiteButton text="دانلود اپلیکیشن" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p>نحوه تنظیم دستی دی ان اس های «الکترو» روی ios</p>
          <div className="flex flex-wrap justify-around">
            <WhiteButton text="لینک آموزش" />
            <WhiteButton text="دانلود اپلیکیشن" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNSGaming;
