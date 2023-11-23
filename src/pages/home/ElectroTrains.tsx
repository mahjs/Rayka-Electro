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
    'لورم اپیسوم',
    'لورم اپیسوم',
    'لورم ایپسوم',
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
      className="overflow-hidden min-w-full min-h-[100dvh] gap-10 flex justify-center items-center"
    >
      {startAnimation && (
        <>
          <div className="slideUpMagnifier min-h-[500px] min-w-[35%] backdrop-blur-lg">
            <PlanFeatures
              icon={paidPlan.icon}
              title={paidPlan.title}
              featuresList={paidPlan.featuresList}
              price={paidPlan.price}
              absolute
            />
          </div>
          <div
            className="slideUpMagnifier min-h-[500px] min-w-[35%] backdrop-blur-lg"
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
