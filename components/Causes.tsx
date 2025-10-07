import React from 'react';
import { ExclamationTriangleIcon, CurrencyDollarIcon, CogIcon } from './Icons';

const causes = [
  {
    icon: <CurrencyDollarIcon className="w-10 h-10 text-white" />,
    title: '高額な費用',
    description: '従来のLP制作は50万円〜100万円の初期投資が必要。中小企業には大きな負担となってしまいます。'
  },
  {
    icon: <CogIcon className="w-10 h-10 text-white" />,
    title: '複雑な制作フロー',
    description: '企画・デザイン・コーディング・公開まで多くの工程があり、専門知識がないと何から始めればいいか分からない状態に。'
  },
  {
    icon: <ExclamationTriangleIcon className="w-10 h-10 text-white" />,
    title: '修正・運用コストの増大',
    description: '公開後の修正や更新のたびに追加費用が発生。気軽に改善できず、成果向上の機会を逃してしまいます。'
  }
];

const Causes: React.FC = () => {
  return (
    <section id="causes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            なぜこのような<span className="text-blue-600">お悩み</span>が生まれるのか？
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            従来のLP制作には、BtoB企業様にとって大きな3つの課題があります。
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center">
              <div className="inline-block bg-blue-600 p-4 rounded-full">
                {cause.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">{cause.title}</h3>
              <p className="mt-2 text-slate-600 text-lg">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;