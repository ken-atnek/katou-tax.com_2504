'use client';

import { useEffect } from 'react';

export default function RemovePreload() {
  useEffect(() => {
    const removePreloadLinks = () => {
      document.querySelectorAll("link[rel='preload']").forEach((link) => {
        if (link.getAttribute('href')?.includes('/_next/static/css/')) {
          if (process.env.NODE_ENV === 'development') {
            console.log(`Removing preload: ${link.getAttribute('href')}`); // ✅ 開発環境のみログを表示
          }
          link.remove();
        }
      });
    };

    removePreloadLinks();

    const observer = new MutationObserver(() => {
      removePreloadLinks();
    });

    observer.observe(document.head, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
