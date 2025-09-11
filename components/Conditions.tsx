
import React from 'react';
import { CheckIcon } from './Icons';

const conditions = [
    { item: '初期費用', value: '0円' },
    { item: '月額費用', value: '10,000円 (税抜)〜' },
    { item: '最低契約期間', value: '6ヶ月' },
    { item: 'サーバー・ドメイン費用', value: '月額費用に含む' },
    { item: '修正・更新回数', value: '無制限' },
    { item: '解約', value: '契約期間満了後\nいつでも可能' },
];

const Conditions: React.FC = () => {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            <span className="text-blue-600">契約内容</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            分かりやすい料金体系で、安心してご利用いただけます。
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 text-center h-32 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{condition.item}</h3>
              <div className="text-xl font-bold text-blue-600">
                {condition.value.includes('込む') ? 
                  <div className="flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                    {condition.value}
                  </div>
                : 
                  condition.value.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex} className="text-center">
                      {line}
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-base text-slate-500">※詳細なプランやオプションについては、無料相談にてご案内いたします。</p>
      </div>
    </section>
  );
};

export default Conditions;
