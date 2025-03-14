/* =======================================
 * 募集HEADコンテンツ
 * URL: components/recruit/
 * Referenced in: /recruit/page.tsx
 * Created: 2025-03-14
 * Last updated: 2025-03-14
 * ======================================= */
import Image from 'next/image';
import heroImage from '@/assets/images/recruit/hero.webp';
import styles from '@components/recruit/RecruitHead.module.scss';
const RecruitHead = () => {
  return (
    <section className={styles.container01}>
      <h3>スタッフ募集</h3>
      <p className={styles.h3_sidebar}>
        働く方のライフスタイルを尊重する税理士事務所です。
      </p>
      <div className={styles.box_image}>
        <Image src={heroImage} alt="スタッフ募集" fill priority />
      </div>
      <p className={styles.comment}>
        当事務所は法人から個人経営の方までまで幅広いお客様に、記帳代行・税務申告といった会計事務所の基本業務にとどまらず、経営分析・指導を通して
        「お客様のパートナー」として企業の成長をバックアップ致します。
        <br />
        所長とスタッフ8名の和やかな雰囲気で、働く方のライフスタイルを尊重します。
      </p>
    </section>
  );
};
export default RecruitHead;
