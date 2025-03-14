import Image from 'next/image';
import { ListItem } from '@/data/serviceListData';
import styles from '@components/serviceList.module.scss';

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
