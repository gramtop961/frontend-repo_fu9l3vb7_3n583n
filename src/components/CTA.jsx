import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles className="h-3.5 w-3.5" />
              Start in minutes
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to build the future of finance?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-white/80">
              Create an account and issue your first card today. No contracts, cancel anytime.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-slate-900 shadow-sm transition hover:bg-white/90"
            >
              Create account
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-inset ring-white/20 transition hover:bg-white/15"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
