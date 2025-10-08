
import React from 'react';

const features = [
  {
    title: '制作コストを大幅に削減し、投資対効果を最大化',
    description: '数十万円以上かかることもあるLP制作の初期費用が0円に。低リスクで新しいマーケティング施策を始められ、web集客に最も必要な広告費に予算を回すことができます。',
    imageUrl: '/3.png',
  },
  {
    title: '機会損失を防ぎ、スピーディーにビジネスを展開',
    description: '「LPがあれば受注できたのに...」そんな機会損失を防ぎます。市場の変化や顧客のニーズに素早く対応し、競合他社に差をつけることができます。',
    imageUrl: '/4.png',
  },
  {
    title: 'LP制作・運用の手間から解放され、本業に集中',
    description: '専門的な知識が必要なLPの制作や更新作業はすべて丸投げ。担当者様は本来注力すべきコア業務に集中でき、組織全体の生産性向上に貢献します。',
    imageUrl: '/5.png',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            「サブスクLP」なら、<span className="text-blue-600">月額1万円</span>で全て解決！
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            「サブスクLP」がもたらす3つのメリット
          </p>
        </div>
        <div className="mt-16 space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
              <div className="md:w-1/2">
                <img src={feature.imageUrl} alt={feature.title} className="rounded-lg shadow-xl w-full object-cover aspect-[3/2]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
