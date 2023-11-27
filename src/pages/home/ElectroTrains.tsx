import Star from '../../assets/images/star.svg';
import Crown from '../../assets/images/crown.svg';
import PlanFeatures from '../../components/ui/PlanFeatures';
import { useRef } from 'react';
import useObserver from '../../utils/useObserver';

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
              title={paidPlan.title}
              featuresList={paidPlan.featuresList}
              price={paidPlan.price}
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
              title={freePlan.title}
              featuresList={freePlan.featuresList}
              price={freePlan.price}
              absolute
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ElectroTrains;
