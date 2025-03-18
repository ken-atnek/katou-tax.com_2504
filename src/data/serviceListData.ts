import serviceList01 from "@/assets/images/serviceList/01.webp";
import serviceList02 from "@/assets/images/serviceList/02.webp";
import serviceList03 from "@/assets/images/serviceList/03.webp";
import serviceList04 from "@/assets/images/serviceList/04.webp";
import serviceList05 from "@/assets/images/serviceList/05.webp";
import { StaticImageData } from "next/image";

export type ListItem = {
  images: StaticImageData;
  title: string;
  text: string;
};

export const commonList: ListItem[] = [
    {
      images:serviceList01,
      title:"税務顧問",
      text:"事業に関する様々な会計・税務業務や定期的な財政チェックにとどまらず、事業者様のビジネスを的確に把握した上で、様々な経営課題に対し経験やネットワークを駆使して解決策を一緒に見つけるパートナーになります。"
    },
    {
      images:serviceList02,
      title:"決算・確定申告／その他業務",
      text:"単発的な事業年度ごとの決算、決算に基づく税金の申告業務を承ります。また、従業員の方の年末調整や、個人事業主の方の確定申告についてのご相談も承ります。。"
    },
    {
      images:serviceList03,
      title:"開業支援",
      text:"会社設立に際しては各種必要な手続きや、それ以外の作業など何かと不安です。そういった手続きはもちろん、事業計画面でもお金に関するプロの観点からサポートさせていただき事業継続性の向上を実現させます。"
    },
    {
      images:serviceList04,
      title:"業務効率化支援",
      text:"社内のお金に関する処理・手続き等の会計業務に関して、効率化のアドバイスを行い、簡素化や経営力の向上に繋げます。"
    },
    {
      images:serviceList05,
      title:"事業計画/補助金相談",
      text:"豊富な専門知識と経験を活かし、将来を見据えた事業計画や各種補助金申請のお手伝いをします"
    },
  ];
