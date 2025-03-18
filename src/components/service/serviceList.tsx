/* =======================================
 * 私たちの強み/業務内容 画像リスト
 * URL: /components
 * Referenced in: /page.tsx, /service/page.tsx
 * Created: 2025-03-13
 * Last updated: 2025-03-14
 * ======================================= */
import Image from 'next/image';
import { ListItem } from '@/data/serviceListData';
import styles from '@/styles/components/service/serviceList.module.scss';

type ServiceListProps = {
  items: ListItem[];
};

const ServiceList = ({ items }: ServiceListProps) => {
  return (
    <ul className={styles.listContainer}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <div className={styles.boxImage}>
              {item.images ? (
                <Image src={item.images} alt={item.title} fill loading="lazy" />
              ) : (
                <p>画像がありません</p>
              )}
            </div>
            <p>{item.text}</p>
          </li>
        ))
      ) : (
        <p>データがありません</p>
      )}
    </ul>
  );
};

export default ServiceList;
