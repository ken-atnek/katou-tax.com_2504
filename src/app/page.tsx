import Image from 'next/image';
import '../styles/home.scss';

export const metadata = {
  title: '加藤誠貴税理士事務所',
  description:
    '私たち加藤税理士事務所は、熊本県熊本市を拠点に、お客様の会社経営を支えるパートナーとして中小企業の成長・発展のお手伝いをしております。記帳代行・税務申告といった会計事務所の基本業務にとどまらず、経営分析、指導を通し 「お客様のパートナー」として企業の成長をバックアップ致します。まだまだ未熟な点もご ざいますが、今後も代表税理士をはじめ、職員一同、誠意を持って尽力して参ります。',
  keywords: ['熊本 税理士', '会計事務所', '記帳代行', '企業サポート'],
};

export default function Home() {
  return (
    <>
      <section className="container01">
        <div className="box_image">
          <Image
            src="/images/home/015-4245.webp"
            alt="HERO画像"
            className="item_image"
            fill
          />
        </div>
      </section>
      <section className="container02">
        <div className="wrap_h3">
          <span>greeting</span>
          <h2>所長挨拶</h2>
        </div>
        <article>
          <div className="box_image">
            <Image src="/images/home/022-4377.webp" alt="所長 加藤誠貴" fill />
          </div>
          <div className="box_contents">
            <span className="h4_sidebar"></span>
            <h3>
              未来に進み変化する地域で、事業者のより良い経営環境のために。
            </h3>
            <p>
              熊本県熊本市を拠点に、お客様の会社経営を支えるパートナーとして中小企業の成長・発展のお手伝いをしております。
              <br />
              長引くコロナ禍、不況の波に「不透明な時代」とお考えの経営者の皆様も少なくないと思います。進む情報化・IT
              革命により様々な分野での再構築も進んでいます。
              <br />
              記帳代行・税務申告といった会計事務所の基本業務にとどまらず、経営分析、指導を通し「お客様のパートナー」として企業の成長をバックアップ致します。
              <br />
              まだまだ未熟な点もございますが、今後も代表税理士をはじめ、職員一同、誠意を持って尽力して参ります。
            </p>
            <div className="name">
              <span>所長</span>
              加藤誠貴
            </div>
          </div>
        </article>
      </section>
      <section className="container03">
        <div className="wrap_h3">
          <span>about us</span>
          <h2>事務所について</h2>
        </div>
        <article>
          <h3>事業所概要</h3>
          <dl>
            <div>
              <dt>事務所名</dt>
              <dd>加藤誠貴税理士事務所</dd>
            </div>
            <div>
              <dt>所長</dt>
              <dd>加藤誠貴税</dd>
            </div>
            <div>
              <dt>住所</dt>
              <dd>
                <span>〒862-0951</span>
                熊本県熊本市中央区上水前寺2-19-21-2階
              </dd>
            </div>
            <div>
              <dt>電話</dt>
              <dd>
                <a href="tel:0963825165" className="tel">
                  096-382-5165
                </a>
              </dd>
            </div>
            <div>
              <dt>従業員</dt>
              <dd>8名</dd>
            </div>
          </dl>
        </article>
      </section>
    </>
  );
}
