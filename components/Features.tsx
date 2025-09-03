
import React from 'react';
import { CurrencyYenIcon, RocketLaunchIcon, PencilSquareIcon, SparklesIcon, CodeBracketIcon, ChartBarIcon } from './Icons';

const features = [
  {
    icon: <CurrencyYenIcon className="w-10 h-10 text-white" />,
    title: '圧倒的な低コスト',
    description: '初期費用0円、月額1万円から。BtoBのLP制作を圧倒的なコストパフォーマンスで実現します。',
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
    description: 'BtoBに特化した信頼感のあるデザインをご提供。テンプレートに頼らないオリジナル制作も可能です。',
  },
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
    title: 'フォーム設置もコミコミ',
    description: 'お問い合わせや資料請求フォームの設置も標準対応。リード獲得を強力にサポートします。',
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-white" />,
    title: '分析・改善サポート',
    description: '公開後のアクセス解析や改善提案もプラン内で対応。成果の出るLPに育てます。',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            「サブスクLP」なら、<span className="text-blue-600">月1万円</span>で全部解決。
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            LP制作の悩みを解消し、ビジネスを加速させる6つの特徴
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center">
              <div className="inline-block bg-blue-600 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
