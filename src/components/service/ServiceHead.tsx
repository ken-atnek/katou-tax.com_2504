/* =======================================
 * 私たちの強み/業務内容 HEADコンテンツ
 * URL: components/service/
 * Referenced in: /service/page.tsx
 * Created: 2025-03-14
 * Last updated: 2025-03-14
 * ======================================= */
import styles from '@/styles/components/service/ServiceHead.module.scss';
const ServiceHead = () => {
  return (
    <section className={styles.container01}>
      <h3>私たちの強み/事業内容について</h3>
      <p className={styles.h3_sidebar}>”会社経営をわかりやすく、シンプルに”</p>

      <p className={styles.comment}>
        税務・資金はもちろん、事業計画、開業、補助金等、地元熊本の企業や事業者様の為に
        <br />
        税務・会計に限らず、多彩なサポートを行っていきます。
      </p>
    </section>
  );
};
export default ServiceHead;
