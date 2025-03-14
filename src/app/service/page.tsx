/* =======================================
 * 私たちの強み/業務内容
 * URL: service/
 * Created: 2025-03-14
 * Last updated: 2025-03-14
 * ======================================= */
import ServiceHead from '@/components/service/ServiceHead';
import ServiceList from '@/components/serviceList';
import { commonList } from '@/data/serviceListData';
export default function PageService() {
  return (
    <>
      <ServiceHead />
      <ServiceList items={commonList} />
    </>
  );
}
