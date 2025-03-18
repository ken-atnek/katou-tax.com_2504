/* =======================================
 * 会社情報
 * URL: /components
 * Created: 2025-03-13
 * ======================================= */

import styles from '@/styles/components/common/companyAddress.module.scss';
export default function CompanyInfo() {
  return (
    <div className={styles.companyAddress}>
      <address>
        <span>〒862-0951</span>
        熊本県熊本市中央区上水前寺２－１９－２１－２階
      </address>
      <nav>
        <a href="tel:0963825165" className={styles.tel}>
          096-382-5165
        </a>
        <a href="tel:0963819080" className={styles.fax}>
          096-381-9080
        </a>
      </nav>
    </div>
  );
}
