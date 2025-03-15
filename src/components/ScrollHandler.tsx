'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        if (window.location.hash) {
          const targetId = window.location.hash.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }, 100);
    };

    handleScroll();

    return () => {};
  }, [pathname]);

  return null;
}
