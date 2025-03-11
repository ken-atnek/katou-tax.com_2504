import Link from 'next/link';
import '../styles/Footer.scss';
const Footer = () => {
  return (
    <footer>
      <div className="box_address">
        <address>
          <span>〒862-0951</span>
          熊本県熊本市中央区上水前寺2-19-21 2階
        </address>
        <a href="tel:0963825165" className="tel">
          096-382-5165
        </a>
        <a href="tel:0963819080" className="fax">
          096-381-9080
        </a>
      </div>
      <Link href="#" className="link_privacy">
        プライバシーポリシー
      </Link>
      <div className="copyright">
        2022 加藤誠貴税理士事務所. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
