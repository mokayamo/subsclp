
import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
  {
    name: '株式会社A様',
    title: 'ITサービス',
    comment: '初期費用を抑えて素早くLPを立ち上げられたのが決め手でした。公開後も細かな修正に迅速に対応いただき、問い合わせ数が2倍になりました。',
    rating: 5,
  },
  {
    name: 'B工業株式会社様',
    title: '製造業',
    comment: 'Webの専門知識が全くありませんでしたが、企画段階から丁寧にサポートしていただき安心でした。結果的に、採用応募にも繋がっています。',
    rating: 5,
  },
  {
    name: '合同会社C様',
    title: 'コンサルティング',
    comment: 'これまで自社で更新していたLPの運用コストが大幅に削減できました。プロのデザインで会社の信頼性も上がったように感じます。',
    rating: 5,
  },
];

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            安心してご依頼いただくための<span className="text-blue-600">理由</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Planner Intro */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                <img src="https://picsum.photos/id/237/200/200" alt="企画者" className="w-32 h-32 rounded-full mx-auto shadow-md" />
                <h3 className="text-center text-xl font-bold mt-4">山田 太郎</h3>
                <p className="text-center text-sm text-slate-500">プロジェクトマネージャー</p>
                <p className="mt-4 text-slate-600 text-sm">
                BtoBマーケティング歴10年。これまで50社以上のLP制作・改善に携わってきました。「成果の出るLP」を追求し、お客様のビジネス成長に貢献することが私の使命です。どんな些細なことでも、お気軽にご相談ください。
                </p>
                <div className="mt-6 border-t pt-4">
                    <h4 className="font-semibold text-slate-800">制作実績</h4>
                    <ul className="mt-2 text-sm text-slate-600 space-y-1">
                        <li>・大手IT企業の製品LP</li>
                        <li>・製造業向け採用LP</li>
                        <li>・士業向けサービス紹介LP</li>
                        <li>など、BtoB領域で多数</li>
                    </ul>
                </div>
            </div>

            {/* Testimonials */}
            <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">お客様の声</h3>
                <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="font-bold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.title}</p>
                        </div>
                        <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                        </div>
                    </div>
                    <p className="mt-4 text-slate-600">「{testimonial.comment}」</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
