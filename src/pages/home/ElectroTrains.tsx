import Star from '../../assets/images/star.svg';
import Crown from '../../assets/images/crown.svg';
import PlanFeatures from '../../components/ui/PlanFeatures';
import { useEffect, useRef, useState } from 'react';
import useObserver from '../../utils/useObserver';
import { Plan } from '../../services/plans';
import api from '../../services';

export const freePlan = {
  icon: Star,
  title: 'سطح معمولی',
  featuresList: ['استفاده از دی‌ان‌اس', 'استفاده از اپلیکیشن', 'لورم اپیسوم', 'لورم ایپسوم'],
  price: 0,
};

export const paidPlan = {
  icon: Crown,
  title: 'سطح ویژه',
  featuresList: [
    'استفاده از دی‌ان‌اس',
    'استفاده از اپلیکیشن',
    'لورم اپیسوم۱',
    'لورم اپیسوم۲',
    'لورم اپیسوم',
    'لورم اپیسوم',
  ],
  price: 119000,
};

const ElectroTrains = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const startAnimation = useObserver(containerRef);

  const [plansDetails, setPlansDetails] = useState<Plan[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    api.plans.getAllPlans().then((data) => {
      setLoading(false);
      setPlansDetails(data.datas.results.plans);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="ElectroTrains"
      className="flex justify-start lg:flex-row flex-col w-full  lg:justify-center lg:pt-0 pt-16 items-stretch  gap-5 lg:h-[60dvh] h-[100dvh]  px-10 md:px-20"
    >
      {startAnimation && (
        <>
          <div className="slideUpMagnifier md:m-auto h-[350px] md:h-[400px] w-full lg:w-[70dvh] backdrop-blur-lg ">
            <PlanFeatures
              icon={paidPlan.icon}
              title={loading ? paidPlan.title : plansDetails[0].title}
              featuresList={loading ? paidPlan.featuresList : plansDetails[0].metas.map((meta) => meta.title)}
              price={loading ? 0 : +plansDetails[0].price}
              absolute
            />
          </div>
          <div
            className="slideUpMagnifier h-[350px] md:h-[400px] w-full lg:w-[70dvh] backdrop-blur-lg m-auto"
            style={{
              animationDelay: '.5s',
            }}
          >
            <PlanFeatures
              icon={freePlan.icon}
              title={loading ? freePlan.title : plansDetails[1].title}
              featuresList={loading ? freePlan.featuresList : plansDetails[1].metas.map((meta) => meta.title)}
              price={loading ? freePlan.price : +plansDetails[1].price}
              absolute
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ElectroTrains;
