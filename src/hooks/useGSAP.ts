import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Animate skill cards
      gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.8,
            rotateY: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};