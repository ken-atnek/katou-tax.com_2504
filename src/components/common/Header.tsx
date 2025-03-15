'use client';
import Link from 'next/link';
import '@/components/common/Header.scss';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズを判定してスマホかどうかを設定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px以下ならスマホ
    };

    checkMobile(); // 初回判定
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // ✅ `#headerNav` 内のリンクのみ処理するように変更
    if (!event.currentTarget.closest('#headerNav')) return;

    event.preventDefault();
    const href = event.currentTarget.getAttribute('href') || '/';

    const nav = document.querySelector('#headerNav'); // ✅ `id` を指定して取得
    if (nav) {
      nav.classList.add('closing');
    }

    setTimeout(
      () => {
        setIsOpen(false);
        if (nav) {
          nav.classList.remove('closing');
        }
        window.location.href = href; // ✅ ページ遷移
      },
      isMobile ? 300 : 0
    );
  };
  return (
    <header>
      <button
        className={`hamburgerButton ${isOpen ? 'is-open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1>加藤誠貴税理士事務所</h1>

      <nav
        id="headerNav"
        className={`${isOpen ? 'is-open' : ''} ${!isOpen ? 'closing' : ''}`}
      >
        <ul>
          <li>
            <Link
              href="/"
              className="nav-link"
              onClick={closeMenu}
              prefetch={false}
            >
              TOP
            </Link>
          </li>
          <li>
            <Link
              href="/service/"
              className="nav-link"
              onClick={closeMenu}
              prefetch={false}
            >
              私たちの強み／業務内容
            </Link>
          </li>
          <li>
            <Link
              href="/#containerWorkOffice"
              className="nav-link"
              onClick={closeMenu}
            >
              働き方・職場環境
            </Link>
          </li>
          <li>
            <Link
              href="/recruit/"
              className="nav-link"
              onClick={closeMenu}
              prefetch={false}
            >
              スタッフ募集
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="nav-link link_contact"
              onClick={closeMenu}
              prefetch={false}
            >
              お問い合せ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
