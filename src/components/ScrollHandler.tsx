'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      if (typeof window === 'undefined') return;

      const hash = window.location.hash;
      if (!hash) return;

      const targetId = hash.substring(1);
      const attemptScroll = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // 要素がまだ存在しない場合、100ms 後に再試行（最大10回）
          let retries = 10;
          const interval = setInterval(() => {
            const el = document.getElementById(targetId);
            if (el || retries <= 0) {
              clearInterval(interval);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            retries--;
          }, 100);
        }
      };

      // ページ遷移後に 300ms 待ってスクロールを試行
      setTimeout(attemptScroll, 300);
    };

    // ページ遷移後に `scrollToHash` を実行
    scrollToHash();

    // `hashchange` イベントでスクロール処理を実行（同一ページ内リンク対応）
    const handleHashChange = () => scrollToHash();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  return null;
}
