/* =======================================
 * トップページ
 * URL: /
 * Created: 2025-03-12
 * ======================================= */
'use client';
import Image from 'next/image';
import Link from 'next/link';
// import heroImage from '@/assets/images/home/015-4245.webp';
import photoKatou from '@/assets/images/home/022-4377.webp';
import imageRecruit from '@/assets/images/home/recruit.webp';
import ServiceList from '@/components/serviceList';
import { commonList } from '@/data/serviceListData';
import ScrollHandler from '@/components/ScrollHandler';
import WorkList from '@/components/WorkList';
import ModalGallery from '@/components/ModalGallery';
import PieChartList from '@/components/PieChartList';
import '@/styles/home.scss';

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <section className="container01">
        <div className="box_image">
          <Image
            // src={heroImage}
            src="/images/015-4245.webp"
            alt="HERO画像"
            className="item_image"
            width={1320}
            height={810}
            // fill
            priority={true}
          />
        </div>
      </section>
      <section className="container02">
        <div className="wrap_h2">
          <span>greeting</span>
          <h2>所長挨拶</h2>
        </div>
        <article>
          <div className="box_image">
            <Image src={photoKatou} alt="所長 加藤誠貴" fill loading="lazy" />
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
        <div className="wrap_h2">
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
      <section className="container04">
        <div className="wrap_h2">
          <span>service</span>
          <h2>私たちの強み/業務内容</h2>
        </div>
        <p>
          税務・資金はもちろん、事業計画、開業、補助金等、地元熊本の企業や事業者様の為に
          <br />
          税務・会計に限らず、多彩なサポートを行っていきます。
        </p>
        <ServiceList items={commonList} />
      </section>
      <section className="container05" id="containerWorkOffice">
        <div className="wrap_h2">
          <span>work/office</span>
          <h2>働き方、職場環境</h2>
          <WorkList />
          <ModalGallery />
          <PieChartList />
        </div>
      </section>
      <section className="container06">
        <div className="wrap_h2">
          <span>work/office</span>
          <h2>スタッフ募集</h2>
        </div>
        <article>
          <div className="box_image">
            <Image
              src={imageRecruit}
              alt="リクルート画像"
              fill
              loading="lazy"
            />
          </div>
          <div className="box_contents">
            <h3>働く方のライフスタイルを尊重する税理士事務所です。</h3>
            <p>
              当事務所は法人から個人経営の方までまで幅広いお客様に、記帳代行・税務申告といった会計事務所の基本業務にとどまらず、経営分析、指導を通し
              「お客様のパートナー」として企業の成長をバックアップ致します。
              所長と女性スタッフ7名、男性スタッフ１名の和やかな雰囲気で、働く方のライフスタイルを尊重します。
              <em>
                「税理士でもワークライフバランスをしっかりとって、幸せな暮らしをしたい」
              </em>
              <em>「働きやすい職場環境、スタッフと気さくに楽しく働きたい」</em>
              <em>「子育てをしながら充実した復職をしたい」</em>
              <span>そんな方はぜひお待ちしております。 </span>
            </p>
            <Link href="/recruit/" className="item_link" prefetch={false}>
              詳しく見る
            </Link>
          </div>
        </article>
        <Link href="/recruit/" className="link_recruit">
          採用情報を詳しく見る
          <span>[応募はコチラから]</span>
        </Link>
      </section>
    </>
  );
}
