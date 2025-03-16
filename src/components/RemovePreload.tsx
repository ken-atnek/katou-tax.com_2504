/* =======================================
 * CSSファイルのpreload削除（使用見合わせ）
 * Referenced in: /layout.tsx,
 * Created: 2025-03-12
 * Last updated: 2025-03-15
 * ======================================= */
'use client';
import { useEffect } from 'react';

const RemovePreload = () => {
  useEffect(() => {
    setTimeout(() => {
      // ✅ 100ms 遅延させる
      const links = document.querySelectorAll("link[rel='preload']");

      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.css')) {
          link.remove(); // ✅ `.css` のみ削除
          console.log(`Preload removed: ${href}`); // ✅ デバッグ用ログ
        }
      });
    }, 100); // ✅ 100ms 遅延（必要なら増やす）
  }, []);

  return null;
};

export default RemovePreload;
