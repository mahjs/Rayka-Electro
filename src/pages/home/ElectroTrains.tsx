import Star from '../../assets/images/star.svg';
import Crown from '../../assets/images/crown.svg';
import PlanFeatures from '../../components/ui/PlanFeatures';
import { useEffect, useRef, useState } from 'react';

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
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  // Start animation when the component is fully visible.
  useEffect(() => {
    const refElem = containerRef.current as HTMLElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(refElem);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      },
    );

    if (refElem) {
      observer.observe(refElem);
    }

    return () => {
      if (refElem) {
        observer.unobserve(refElem);
      }
    };
  });

  return (
    <section
      ref={containerRef}
      id="ElectroTrains"
      className="overflow-hidden min-h-[100vh] gap-20 flex justify-center items-center"
    >
      {startAnimation && (
        <>
          <div className="slideUpMagnifier min-w-[28%] backdrop-blur-lg">
            <PlanFeatures
              icon={paidPlan.icon}
              title={paidPlan.title}
              featuresList={paidPlan.featuresList}
              price={paidPlan.price}
            />
          </div>
          <div
            className="slideUpMagnifier min-w-[28%] backdrop-blur-lg"
            style={{
              animationDelay: '.5s',
            }}
          >
            <PlanFeatures
              icon={freePlan.icon}
              title={freePlan.title}
              featuresList={freePlan.featuresList}
              price={freePlan.price}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ElectroTrains;
