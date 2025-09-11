
import React from 'react';
import { ArrowDownIcon } from './Icons';

const steps = [
  {
    step: 1,
    title: '無料相談・ヒアリング',
    description: 'まずはフォームからお問い合わせください。お客様の課題やLPの目的を詳しくヒアリングします。',
  },
  {
    step: 2,
    title: 'ご提案・ご契約',
    description: 'ヒアリング内容を元に、最適なプランとLP構成をご提案します。内容にご納得いただけましたらご契約となります。',
  },
  {
    step: 3,
    title: '制作・ご確認',
    description: '弊社にてLPのデザイン・コーディングを行います。制作途中で内容をご確認いただき、修正点を反映します。',
  },
  {
    step: 4,
    title: '公開・運用開始',
    description: '最終確認後、LPをインターネット上に公開します。公開後の修正や分析サポートもスタートします。',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            ご利用開始までの<span className="text-blue-600">流れ</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            お問い合わせから最短5営業日でLPを公開できます。
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative">
            {steps.map((item, index) => (
              <div key={item.step} className="relative pl-12 pb-12">
                {index !== steps.length - 1 && (
                  <div className="absolute top-5 left-5 -ml-px w-0.5 h-full bg-slate-200"></div>
                )}
                <div className="absolute top-0 left-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-lg">{item.description}</p>
                {index !== steps.length - 1 && (
                  <div className="absolute -bottom-5 left-4 transform -translate-x-1/2">
                    <ArrowDownIcon className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
