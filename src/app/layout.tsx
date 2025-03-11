import '../styles/globals.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  openGraph: {
    title: '加藤誠貴税理士事務所',
    description:
      '私たち加藤税理士事務所は、熊本県熊本市を拠点に、お客様の会社経営を支えるパートナーとして中小企業の成長・発展のお手伝いをしております。記帳代行・税務申告といった会計事務所の基本業務にとどまらず、経営分析、指導を通し 「お客様のパートナー」として企業の成長をバックアップ致します。まだまだ未熟な点もご ざいますが、今後も代表税理士をはじめ、職員一同、誠意を持って尽力して参ります。',
    url: 'https://katou-tax.com',
    type: 'website',
    images: [
      {
        url: '/images/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '加藤誠貴税理士事務所のOGP画像',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '加藤誠貴税理士事務所',
    description:
      '私たち加藤税理士事務所は、熊本県熊本市を拠点に、お客様の会社経営を支えるパートナーとして中小企業の成長・発展のお手伝いをしております。記帳代行・税務申告といった会計事務所の基本業務にとどまらず、経営分析、指導を通し 「お客様のパートナー」として企業の成長をバックアップ致します。まだまだ未熟な点もご ざいますが、今後も代表税理士をはじめ、職員一同、誠意を持って尽力して参ります。',
    images: ['/images/ogp.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
