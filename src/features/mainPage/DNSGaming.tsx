import GradientButton from "../../components/ui/GradientButton";
import UnderlineCopyText from "../../components/ui/UnderlineCopyText";

const DNSGaming = () => {
  return (
    <section className="bg-slate-500">
      <h2 className="text-center text-[2.5rem] font-bold">Gaming DNS</h2>

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
    </section>
  );
};

export default DNSGaming;
