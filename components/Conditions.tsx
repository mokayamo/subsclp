
import React from 'react';
import { CheckIcon } from './Icons';

const conditions = [
    { item: '初期費用', value: '0円' },
    { item: '月額費用', value: '10,000円 (税抜)〜' },
    { item: '最低契約期間', value: '6ヶ月' },
    { item: 'サーバー・ドメイン費用', value: '込み' },
    { item: '修正・更新回数', value: '無制限' },
    { item: '解約', value: '契約期間満了後、いつでも可能' },
];

const Conditions: React.FC = () => {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            安心してご利用いただくための<span className="text-blue-600">契約条件</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            分かりやすい料金体系で、安心してご利用いただけます。
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="divide-y divide-slate-200">
            {conditions.map((condition, index) => (
              <div key={index} className="px-6 py-4 flex justify-between items-center">
                <dt className="text-md font-medium text-slate-700">{condition.item}</dt>
                <dd className="text-md font-semibold text-slate-900 flex items-center">
                  {condition.value.includes('込み') || condition.value.includes('無制限') ? 
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" /> : null}
                  {condition.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-slate-500">※詳細なプランやオプションについては、無料相談にてご案内いたします。</p>
      </div>
    </section>
  );
};

export default Conditions;
