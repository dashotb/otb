import { useState, useEffect } from 'react';

export const useActiveSection = (sections: string[], threshold = 0.5) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          threshold: threshold,
          rootMargin: '-10% 0px -90% 0px' // Adjusts the detection area to be more focused on the top of the viewport
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections, threshold]);

  return activeSection;
};