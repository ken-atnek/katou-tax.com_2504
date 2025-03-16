import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ScrollHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash; // URLのハッシュ部分を取得
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 300); // 少し遅延させると動作が安定
      }
    }
  }, [router]); // ページ遷移ごとに実行

  return null; // UIに影響を与えない
};

export default ScrollHandler;
