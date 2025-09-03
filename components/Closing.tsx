
import React, { useState, useCallback } from 'react';
import { Button } from './Button';

const Closing: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      alert('プライバシーポリシーへの同意が必要です。');
      return;
    }
    setStatus('submitting');
    console.log({ name, company, email, message });
    // Simulate API call
    setTimeout(() => {
      // For demonstration, we'll just show success.
      setStatus('success');
      // In a real app, you'd handle errors too.
    }, 1500);
  }, [agreed, name, company, email, message]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            さあ、成果の出るLP制作を始めましょう
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            まずは無料相談から。お客様のビジネスに最適なLPをご提案します。
            <br/>
            強引な営業は一切いたしませんので、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-white text-slate-800 p-8 rounded-lg shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-green-600">お問い合わせありがとうございます</h3>
              <p className="mt-2 text-slate-600">内容を確認の上、担当者より3営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">お名前<span className="text-red-500">*</span></label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">会社名</label>
                  <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">メールアドレス<span className="text-red-500">*</span></label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">ご相談内容</label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="agree" name="agree" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agree" className="font-medium text-slate-700">
                      <a href="#privacy" className="text-blue-600 hover:underline">プライバシーポリシー</a>に同意する
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button type="submit" variant="primary" size="lg" fullWidth disabled={status === 'submitting'}>
                   {status === 'submitting' ? '送信中...' : '無料で相談する'}
                </Button>
              </div>
              <p className="text-center mt-4 text-sm text-slate-500">
                フォーム送信後、すぐに始めたい方は <a href="#start" className="text-blue-600 hover:underline">今すぐ始める</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Closing;
