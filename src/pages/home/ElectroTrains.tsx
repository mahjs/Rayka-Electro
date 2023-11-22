import Star from '../../assets/images/star.svg';
import Crown from '../../assets/images/crown.svg';
import PlanFeatures from '../../components/ui/PlanFeatures';

const freePlan = {
  icon: Star,
  title: 'سطح معمولی',
  featuresList: ['استفاده از دی‌ان‌اس', 'استفاده از اپلیکیشن', 'لورم اپیسوم', 'لورم ایپسوم'],
  price: 0,
};

const paidPlan = {
  icon: Crown,
  title: 'سطح ویژه',
  featuresList: [
    'استفاده از دی‌ان‌اس',
    'استفاده از اپلیکیشن',
    'لورم اپیسوم',
    'لورم اپیسوم',
    'لورم اپیسوم',
    'لورم اپیسوم',
    'لورم اپیسوم',
    'لورم اپیسوم',
    'لورم ایپسوم',
  ],
  price: 119000,
};

const ElectroTrains = () => {
  return (
    <section id="ElectroTrains" className="overflow-hidden min-h-[100vh] gap-20 flex justify-center items-center">
      <PlanFeatures
        icon={paidPlan.icon}
        title={paidPlan.title}
        featuresList={paidPlan.featuresList}
        price={paidPlan.price}
      />
      <PlanFeatures
        icon={freePlan.icon}
        title={freePlan.title}
        featuresList={freePlan.featuresList}
        price={freePlan.price}
      />
    </section>
  );
};

export default ElectroTrains;
