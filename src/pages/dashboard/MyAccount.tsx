import { FC } from 'react';
import StarPremium from '../../assets/images/star-premium.svg';
import PlanFeatures from '../../components/ui/PlanFeatures';
import { freePlan, paidPlan } from '../home/ElectroTrains';

interface Props {
  premium: boolean;
}

const MyAccount: FC<Props> = ({ premium }) => {
  return (
    <div className="w-full h-full text-white">
      <div className="flex h-full flex-col gap-5">
        <div className="flex flex-col gap-5 relative min-h-[200px]  p-8 rounded-2xl backdrop-blur-md overflow-hidden">
          <img
            loading="lazy"
            src={StarPremium}
            className="absolute w-[400px] h-[400px] opacity-5 -top-[90%] -left-[5%]"
            alt="Premium badge"
          />
          <div className="flex gap-3">
            <img loading="lazy" src={StarPremium} alt="Premium badge" />
            <h4 className="text-[1.5rem]">سطح حساب شما</h4>
          </div>
          <div className="flex items-center">
            {premium && (
              <div className="flex gap-5 items-center">
                <p className="text-[2.5rem] font-bold">حساب کاربری ویژه</p>
                <span className="opacity-60">{29} روز باقی مانده</span>
              </div>
            )}
            {!premium && <span>حساب کاربری عادی</span>}
            <button className="mr-auto bg-white text-[#541A79] py-3 px-5 rounded-lg">
              {premium ? 'تمدید اشتراک' : 'خرید اشتراک'}
            </button>
          </div>
        </div>
        <div className="grid h-full grid-cols-2 gap-5">
          <PlanFeatures
            active
            icon={paidPlan.icon}
            title={paidPlan.title}
            featuresList={paidPlan.featuresList}
            price={paidPlan.price}
          />
          <PlanFeatures
            disable
            icon={freePlan.icon}
            title={freePlan.title}
            featuresList={freePlan.featuresList}
            price={freePlan.price}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
