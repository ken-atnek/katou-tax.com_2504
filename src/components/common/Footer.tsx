/* =======================================
 * フッター
 * URL: /components
 * Created: 2025-03-13
 * ======================================= */
import Link from 'next/link';
import '@/components/common/Footer.scss';
import CompanyInfo from './CompanyAddress';

const Footer = () => {
  return (
    <footer>
      <CompanyInfo />
      <Link href="/privacy/" className="link_privacy">
        プライバシーポリシー
      </Link>
      <div className="copyright">
        2022 加藤誠貴税理士事務所. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
