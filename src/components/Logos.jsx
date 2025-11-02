import React from 'react';

const brands = ['NovaPay', 'Acme', 'Flowbit', 'Quanta', 'Nimbus', 'Helix'];

export default function Logos() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur">
        <p className="text-center text-sm font-medium text-slate-600">
          Trusted by forward‑thinking fintech and e‑commerce teams
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <div key={b} className="flex items-center justify-center">
              <span className="inline-flex items-center rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
