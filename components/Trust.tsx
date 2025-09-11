
import React from 'react';

const achievements = [
  {
    title: 'サポート体制',
    heading: '充実したサポート体制',
    description: 'LP制作から運用まで、専任チームが一貫してサポート。お客様のビジネス成功まで責任を持って伴走します。',
    imageUrl: 'https://picsum.photos/id/1/400/300',
  },
  {
    title: '制作実績',
    heading: '豊富な制作実績',
    description: 'これまで200社以上のBtoB企業様のLP制作を手がけ、業界問わず成果を出し続けています。',
    imageUrl: 'https://picsum.photos/id/2/400/300',
  },
  {
    title: '顧客満足度',
    heading: '顧客満足度98%',
    description: 'お客様からの高い評価をいただき、継続率95%以上を維持。安心してお任せいただけます。',
    imageUrl: 'https://picsum.photos/id/3/400/300',
  },
];

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            <span className="text-blue-600">実績・評価</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            多くのBtoB企業様から信頼をいただいている理由をご紹介します。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {achievement.title}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                  {achievement.heading}
                </h3>
                <p className="text-slate-600 text-center mb-6 text-lg">
                  {achievement.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <img 
                  src={achievement.imageUrl} 
                  alt={achievement.heading}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
