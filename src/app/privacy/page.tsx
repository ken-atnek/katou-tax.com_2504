/* =======================================
 * プライバシーポリシーページ
 * URL: /privacy
 * Created: 2025-03-13
 * ======================================= */
import PrivacyPolicy from '@/components/privacy/PrivacyPolicy';
import '@/styles/components/privacy/privacyPolicy.scss';

export default function PrivacyPage() {
  return (
    <section>
      <h2>プライバシーポリシー</h2>
      <PrivacyPolicy />
    </section>
  );
}
