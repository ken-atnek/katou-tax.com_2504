/* =======================================
 * 働き方、職場環境 リスト
 * URL: /components
 * Referenced in: /page.tsx,
 * Created: 2025-03-13
 * Last updated: 2025-03-14
 * ======================================= */
import Image from 'next/image';
import workImage01 from '@/assets/images/work/list01.webp';
import workImage02 from '@/assets/images/work/list02.webp';
import workImage03 from '@/assets/images/work/list03.webp';
import styles from '@/styles/components/WorkList.module.scss';
import { useMemo } from 'react';

const WorkList = () => {
  const listData = useMemo(
    () => [
      {
        images: workImage01,
        title: 'Staff',
        text: '所長1名、男性職員1名、女性職員7名の女性中心の職場です。女性スタッフ全員、子育て中の30～50代のスタッフ。女性同士、和気あいあいと楽しく談笑しながら業務を行っています。　休憩中のティータイムや日ごろの相談などもみんなで会話しながらプライベートも共有できる仲の良いスタッフです。',
      },
      {
        images: workImage02,
        title: 'Workstyle',
        text: '子育て中の女性職員中心の職場だからこそ、こどもの行事や急な退勤にも柔軟に対応できる体制が整っており、時間単位で有給を取得することもできます。また、自身のキャリアアップを希望する場合は、勤務時間内にオンデマンド研修を受けることもできる働きやすい職場です。',
      },
      {
        images: workImage03,
        title: 'Workspace',
        text: '東バイパスの幹線道路から1本入った閑静な住宅街の中にある事務所です。なので、車通勤にはとても便利な立地。周辺の方は自転車でも通勤されています。幹線道路付近のため、仕事帰りの買い物や用事もスムーズに済ませることができます。',
      },
    ],
    []
  );

  return (
    <ul className={styles.blockWorkList}>
      {listData.map((item, index) => (
        <li key={index}>
          <div className={styles.boxImage}>
            <Image src={item.images} alt={item.title} fill loading="lazy" />
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default WorkList;
