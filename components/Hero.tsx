
import React from 'react';
import { Button } from './Button';
import { CheckCircleIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-slate-50 py-20 md:py-32 min-h-[60vh]">
       <div className="absolute inset-0 bg-center bg-no-repeat opacity-10" style={{backgroundImage: "url('/1.png')", backgroundSize: 'contain', backgroundPosition: 'center center'}}></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
          リード獲得を最大化する<br />
          売れるLPを<span className="text-blue-600">月額1万円</span>で
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          高額な初期費用は不要。企画から制作、運用まで、<br />
          すべてコミコミのサブスクリプション型サービスです。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center text-slate-700">
            <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-2" />
            <span>最短5営業日納品</span>
          </div>
          <div className="flex items-center text-slate-700">
            <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-2" />
            <span>修正・更新し放題</span>
          </div>
          <div className="flex items-center text-slate-700">
            <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-2" />
            <span>サーバー・ドメイン費込み</span>
          </div>
        </div>
        <div className="mt-10">
          <Button href="#contact" variant="primary" size="lg">
            資料を受けとる
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
