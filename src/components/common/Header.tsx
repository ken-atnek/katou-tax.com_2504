import Link from 'next/link';
import '@/components/common/Header.scss';
const Header = () => {
  return (
    <header>
      <h1>加藤誠貴税理士事務所</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" className="nav-link">
              TOP
            </Link>
          </li>
          <li>
            <Link href="/service/" className="nav-link">
              私たちの強み／業務内容
            </Link>
          </li>
          <li>
            <Link
              href="/#containerWorkOffice"
              className="nav-link"
              scroll={false}
            >
              働き方・職場環境
            </Link>
          </li>
          <li>
            <Link href="/recruit/" className="nav-link">
              スタッフ募集
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link link_contact">
              お問い合せ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
