'use client';
import Link from 'next/link';
import '@/components/common/Header.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isTopPage = pathname === '/';
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header>
      <button
        className={`hamburgerButton ${isOpen ? 'is-open' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
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
              onClick={() => {
                closeMenu();
                setTimeout(() => {}, 10); // 遷移の確実性を高める
              }}
              prefetch={false}
              scroll={isTopPage} // TOPページなら `scroll={true}`
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
              href="/#containerContact"
              className="nav-link link_contact"
              onClick={() => {
                closeMenu();
                setTimeout(() => {}, 10); // 遷移の確実性を高める
              }}
              prefetch={false}
              scroll={isTopPage}
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
