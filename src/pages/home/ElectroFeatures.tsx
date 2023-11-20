import Feature from '../../components/ui/Feature';

const ElectroFeatures = () => {
  return (
    <div className="flex py-20 bg-[#282828] justify-around flex-wrap">
      <Feature
        icon="speed"
        text="سرعت بالا"
        description="سرعت اتصال شما به اینترنت تقریبا تغییری نمی‌کند و با افت سرعت مواجه نخواهید بود."
      />
      <Feature
        icon="wifi"
        text="رفع تحریم"
        description="انواع سایت ها و برنامه ها و بازی ها در انواع پلتفرم ها رفع تحریم می شوند و به راحتی با یک کلیک قابل استفاده هستند"
      />
      <Feature
        icon="check"
        text="رابط کاربری ساده"
        description="رابط کاربری ساده ولی در عین حال کاربردی که براحتی می توانید از برنامه استفاده نمایید"
      />
    </div>
  );
};

export default ElectroFeatures;
