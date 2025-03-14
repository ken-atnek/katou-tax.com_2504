/* =======================================
 * 募集要項リスト
 * URL: components/recruit/
 * Referenced in: /recruit/page.tsx
 * Created: 2025-03-14
 * Last updated: 2025-03-14
 * ======================================= */
import styles from '@components/recruit/RecruitGuidelines.module.scss';
const RecruitGuidelines = () => {
  return (
    <section className={styles.container02}>
      <div className="wrap_h2">
        <span>Application Guidelines</span>
        <h2>募集要項</h2>
        <ul>
          <li>
            <h3>事務所について</h3>
            <div>
              <p>
                加藤誠貴税理事務所は40代の所長、女性スタッフ7名、男性スタッフ1名、計9名の事務所です。
                <br />
                グループ事務所であります行政書士事務所のスタッフを合わせると約20名。
                <br />
                建設業関連の安定した顧客を約70社以上抱えております。
                <br />
                顧問先の社長さまと接するのは、税理士本人が一手に引き受けております。
                <br />
                今回募集している事務スタッフの方には、経験に応じて「担当」は持ってもらいますが、原則外回りをお願いすることはありません。
                <br />
                すでに関係性ができあがっている顧客の経理担当者さまと連携をとりながら円滑に税務処理を進めていただくお仕事です。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default RecruitGuidelines;
