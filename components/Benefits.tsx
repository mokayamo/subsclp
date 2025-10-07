
import React from 'react';
import { CurrencyYenIcon, RocketLaunchIcon, PencilSquareIcon, SparklesIcon, CodeBracketIcon, ChartBarIcon } from './Icons';

const benefits = [
  {
    icon: <CurrencyYenIcon className="w-10 h-10 text-white" />,
    title: '圧倒的な低コスト',
    description: '初期費用0円、月額1万円。BtoBのLP制作を圧倒的なコストパフォーマンスで実現します。',
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
    title: '最短5営業日のスピード納品',
    description: 'ヒアリング後、最短5営業日でLPを公開。ビジネスチャンスを逃しません。',
  },
  {
    icon: <PencilSquareIcon className="w-10 h-10 text-white" />,
    title: 'テキスト・画像の修正無制限',
    description: 'サービス内容の変更やキャンペーンに合わせて、いつでもスピーディーにLPを更新できます。',
  },
  {
    icon: <SparklesIcon className="w-10 h-10 text-white" />,
    title: '高品質なデザイン',
    description: 'BtoBに特化した信頼感のあるデザインをご提供。リード獲得を促進する独自の構成を採用。',
  },
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
    title: 'フォーム設置もコミコミ',
    description: 'お問い合わせや資料請求フォームの設置も標準対応。フォーム開発費用もコミコミなので安心してください。',
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-white" />,
    title: 'サーバー・ドメインも不要',
    description: 'LPを公開するためのサーバー・ドメインも当社にて取得・管理するので、技術的な知識がなくても問題ありません。',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            「サブスクLP」<span className="text-blue-600">サービスの特徴</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            LP制作の悩みを解消し、ビジネスを加速させる6つの特徴
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center">
              <div className="inline-block bg-blue-600 p-4 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-slate-600 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
