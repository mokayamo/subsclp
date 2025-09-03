
import React from 'react';

const benefits = [
  {
    title: '制作コストを大幅に削減し、投資対効果を最大化',
    description: '数十万円以上かかることもあるLP制作の初期費用が0円に。低リスクで新しいマーケティング施策を始められ、他の重要な業務に予算を回すことができます。',
    imageUrl: 'https://picsum.photos/id/1074/600/400',
    align: 'left',
  },
  {
    title: '機会損失を防ぎ、スピーディーにビジネスを展開',
    description: '「LPがあれば受注できたのに...」そんな機会損失を防ぎます。市場の変化や顧客のニーズに素早く対応し、競合他社に差をつけることができます。',
    imageUrl: 'https://picsum.photos/id/1/600/400',
    align: 'right',
  },
  {
    title: 'LP制作・運用の手間から解放され、本業に集中',
    description: '専門的な知識が必要なLPの制作や更新作業はすべて丸投げ。担当者様は本来注力すべきコア業務に集中でき、組織全体の生産性向上に貢献します。',
    imageUrl: 'https://picsum.photos/id/10/600/400',
    align: 'left',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            「サブスクLP」がもたらす<span className="text-blue-600">3つのメリット</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            貴社のビジネスが、LP導入によってこう変わります。
          </p>
        </div>
        <div className="mt-16 space-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${benefit.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <img src={benefit.imageUrl} alt={benefit.title} className="rounded-lg shadow-xl w-full object-cover aspect-[3/2]" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
