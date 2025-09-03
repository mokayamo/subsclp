
import React from 'react';

const painPoints = [
  'LP制作は初期費用が高すぎて手が出せない...',
  '専門知識がなく、何をどう頼めばいいか分からない。',
  '修正のたびに追加費用や時間がかかってしまう。',
  'フォーム設置など、技術的なことが難しくて困っている。'
];

const Empathy: React.FC = () => {
  return (
    <section id="empathy" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
          LP制作で、<span className="text-blue-600">こんなお悩み</span>ありませんか？
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                  ？
                </div>
                <p className="ml-4 text-slate-700 font-medium">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Empathy;
