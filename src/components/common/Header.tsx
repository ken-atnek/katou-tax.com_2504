'use client';
import Link from 'next/link';
import '@/components/common/Header.scss';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href') || '/';

    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.add('closing'); // ✅ アニメーション用クラスを追加
    }

    setTimeout(() => {
      setIsOpen(false); // ✅ `isOpen` を削除し、メニューを完全に閉じる
      if (nav) {
        nav.classList.remove('closing'); // ✅ アニメーションが完了したら `closing` クラスを削除
      }
      window.location.href = href; // ✅ アニメーションが終わってから遷移
    }, 300); // ✅ `transition` に合わせて300ms遅延
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

      <nav className={`${isOpen ? 'is-open' : ''} ${!isOpen ? 'closing' : ''}`}>
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
