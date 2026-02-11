
import React, { useState } from 'react';
import { getPersonalizedAdvice } from '../services/geminiService';

export const AIAdvisor: React.FC = () => {
  const [level, setLevel] = useState('초급');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<{ summary: string, recommendations: string[] } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    
    setLoading(true);
    const result = await getPersonalizedAdvice(level, goal);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section className="bg-amber-50 rounded-2xl p-8 border border-amber-100 shadow-inner">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
            AI 학습 어드바이저
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">나만의 연습 계획 세우기</h2>
          <p className="text-slate-600">현재 상태와 목표를 입력하면 AI가 맞춤형 연습 팁을 드립니다.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">현재 레벨</label>
              <select 
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full rounded-lg border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3"
              >
                <option>완전 초보</option>
                <option>초급 (코드 가능)</option>
                <option>중급 (곡 연주 중)</option>
                <option>고급</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">학습 목표</label>
              <input 
                type="text"
                placeholder="예: 정성하의 Twilight 완주하기"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-lg border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-3"
              />
            </div>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg disabled:opacity-50"
          >
            {loading ? 'AI가 분석 중...' : '맞춤 제안 받기 ✨'}
          </button>
        </form>

        {advice && (
          <div className="mt-8 p-6 bg-white rounded-xl border border-amber-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-amber-900 mb-3">AI의 맞춤형 제안</h3>
            <p className="text-slate-700 mb-4 whitespace-pre-wrap">{advice.summary}</p>
            <ul className="space-y-2">
              {advice.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-amber-500 mr-2">✔</span>
                  <span className="text-slate-600 text-sm">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
