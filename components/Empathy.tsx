
import React from 'react';

const painPoints = [
  'LP制作は費用が高すぎて手が出せない...',
  '専門知識がなく、何をどう頼めばいいか分からない。',
  '修正のたびに追加費用や時間がかかってしまう。',
  'サーバー・ドメイン管理、フォーム設置など、技術的なことが難しくて困っている。'
];

const Empathy: React.FC = () => {
  return (
    <section id="empathy" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            BtoB企業が抱える<span className="text-blue-600">LP制作の悩み</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            あなたも同じように悩んでいませんか？
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
            {/* 左側：お悩み項目 */}
            <div className="flex-1 space-y-6 flex flex-col justify-center">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md border border-slate-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                      ？
                    </div>
                    <p className="ml-4 text-slate-700 font-medium text-lg">{point}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 右側：画像 */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md h-full">
                <img
                  src="/2.png"
                  alt="悩んでいるビジネスパーソン"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empathy;
