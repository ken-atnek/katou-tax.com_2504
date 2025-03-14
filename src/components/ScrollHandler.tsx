'use client'; // ✅ `client component` にする

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const targetId = hash.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100); // ✅ 遷移後の描画を待つ
    };

    handleScroll(); // ✅ 初回実行（ページ遷移後）

    return () => {};
  }, [pathname, searchParams]); // ✅ `pathname` が変わったときにスクロールを適用

  return null;
}
