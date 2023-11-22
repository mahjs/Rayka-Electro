import { useEffect, useState } from 'react';

const useObserver = (containerRef: React.MutableRefObject<HTMLElement | null>) => {
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

  return startAnimation;
};

export default useObserver;
