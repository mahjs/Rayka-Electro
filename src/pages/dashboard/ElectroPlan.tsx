import React from 'react';
import Star from '../../assets/images/star.svg';
import Crown from '../../assets/images/crown.svg';
import CardPlan from '../../components/ui/CardPlan';
import addPlan from '../../assets/images/addplan.svg';
export const normalPlan = {
  icon: Crown,
  title: 'سطح ویژه',
  featuresList: ['استفاده از دی‌ان‌اس', 'استفاده از اپلیکیشن', 'لورم اپیسوم۱', 'لورم اپیسوم۱', 'لورم اپیسوم۱'],
  price: 119000,
};
export const premiumPlan = {
  icon: Star,
  title: 'سطح معمولی',
  featuresList: ['استفاده از دی‌ان‌اس', 'استفاده از اپلیکیشن', 'لورم اپیسوم۱', 'لورم اپیسوم۱', 'لورم اپیسوم۱'],
  price: 0,
};
const ElectroPlan = () => {
  return (
    <div className="flex flex-wrap gap-8 items-stretch">
      <CardPlan
        icon={normalPlan.icon}
        title={normalPlan.title}
        featuresList={normalPlan.featuresList}
        price={normalPlan.price}
      />
      <CardPlan
        icon={premiumPlan.icon}
        title={premiumPlan.title}
        featuresList={premiumPlan.featuresList}
        price={premiumPlan.price}
      />
      <div className="flex bg-white flex-col w-[22.4375rem] items-center justify-center rounded-xl border-2 border-[#ffffff18] gap-4 py-8 px-[1.28rem] ">
        <img src={addPlan} alt="addPlan" />
        <p className="text-[#541A79] header-4">افزودن پلن</p>
      </div>
    </div>
  );
};

export default ElectroPlan;
