import React from 'react';
import { CreditCard, Shield, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Instant Card Issuing',
    desc: 'Create virtual and physical cards with spending controls, in seconds.',
    icon: CreditCard,
  },
  {
    title: 'Bank‑grade Security',
    desc: 'Advanced encryption, 3D Secure, and fine-grained permissions by default.',
    icon: Shield,
  },
  {
    title: 'Scale Without Limits',
    desc: 'Global payments, real-time analytics, and a developer-first API.',
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to move money
        </h2>
        <p className="mt-3 text-slate-600">
          A complete suite for cards, payments, and treasury — designed to be simple, fast, and delightful.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <button className="mt-4 text-sm font-medium text-slate-900 underline-offset-4 hover:underline">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
