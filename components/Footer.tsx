
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://temahima.co.jp/about/" className="hover:text-white">会社概要</a>
            <a href="https://temahima.co.jp/privacy/" className="hover:text-white">プライバシーポリシー</a>
          </div>
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} 株式会社テマヒマ. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
