import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Now live: a modern way to pay
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          The simplest way to launch your digital banking experience
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Issue cards, accept payments, and manage finances with a clean, minimalist platform
          built for modern e‑commerce and fintech teams.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            Get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:ring-slate-300"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
