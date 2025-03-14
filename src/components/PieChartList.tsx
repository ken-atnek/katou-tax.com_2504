/* =======================================
 * [TOP] 働き方、職場環境 円グラフ
 * URL: /components
 * Created: 2025-03-14
 * ======================================= */
import Image from 'next/image';
import pieChartImage01 from '@/assets/images/work/pie-chart01.webp';
import pieChartImage02 from '@/assets/images/work/pie-chart02.webp';
import pieChartImage03 from '@/assets/images/work/pie-chart03.webp';
import pieChartImage04 from '@/assets/images/work/pie-chart04.webp';

import styles from '@components/PieChartList.module.scss';
import { useMemo } from 'react';

const PieChartList = () => {
  const listData = useMemo(
    () => [
      { images: pieChartImage01 },
      { images: pieChartImage02 },
      { images: pieChartImage03 },
      { images: pieChartImage04 },
    ],
    []
  );

  return (
    <ul className={styles.blockPieChartList}>
      {listData.map((item, index) => (
        <li key={index}>
          <div className={styles.boxImage}>
            <Image src={item.images} alt="円グラフ" fill loading="lazy" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PieChartList;
