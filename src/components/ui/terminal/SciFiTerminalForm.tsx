'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useWebAudio } from '@/hooks/useWebAudio';

export const SciFiTerminalForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const { triggerClickSound, triggerChimeSound } = useWebAudio();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerClickSound();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/signal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        triggerChimeSound();
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMsg(data.error || 'Signal transmission failed.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Failed to reach transmission nexus.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel-gold p-8 rounded-3xl border border-amber-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left w-full"
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest">
          [ ENCRYPTED SIGNAL TERMINAL ]
        </span>
        <span className="font-mono text-xs text-emerald-400 font-semibold">
          ● NEXUS ONLINE
        </span>
      </div>

      {status === 'success' ? (
        <div className="py-8 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-2xl font-serif font-bold text-white">
            TRANSMISSION RECEIVED
          </h3>
          <p className="font-sans text-sm text-slate-200">
            Thank you for reaching out. I will review your signal and respond
            shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 bg-amber-400 text-slate-950 font-mono font-bold text-xs rounded-xl hover:bg-amber-300"
          >
            SEND ANOTHER SIGNAL
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block font-mono text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
              YOUR NAME / CALLSIGN
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Mercer"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-sans text-sm transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-mono text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@company.com"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-sans text-sm transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block font-mono text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
              TRANSMISSION MESSAGE
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project, goal, or technical inquiry..."
              className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-sans text-sm transition-all resize-none"
            />
          </div>

          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(245,158,11,0.4)] disabled:opacity-50"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                TRANSMITTING SIGNAL...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-slate-950" />
                TRANSMIT ENCRYPTED SIGNAL
              </>
            )}
          </button>
        </div>
      )}
    </form>
  );
};
