const focusAreas = [
  {
    title: "AI Search & Conversational Visibility",
    description:
      "Assessment and optimization for how products are interpreted and surfaced in AI-native search and assistant workflows.",
  },
  {
    title: "Security Systems & Defensive Architecture",
    description:
      "Design support for resilient monitoring and defensive controls across modern infrastructure and networked systems.",
  },
  {
    title: "Applied AI Research & Prototyping",
    description:
      "Research-informed prototyping to validate practical AI capabilities, constraints, and deployment pathways.",
  },
];

function HomePage() {
  return (
    <div className="space-y-14">
      <section className="max-w-4xl space-y-6">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
          Independent Consulting
        </p>
        <h1 className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-200 bg-clip-text text-3xl font-semibold leading-tight tracking-[0.025em] text-transparent sm:text-5xl sm:leading-tight">
          AI Search, Security & Conversational Visibility Consulting
        </h1>
        <p className="text-lg leading-relaxed text-slate-200">
          Helping products, platforms, and systems become discoverable, secure, and effective in AI-driven environments.
        </p>
      </section>

      <section className="max-w-4xl space-y-4">
        <h2 className="text-2xl font-semibold tracking-[0.02em] text-slate-100">Overview</h2>
        <p className="leading-relaxed text-slate-300">
          I work with teams that need clear, technically grounded guidance at the intersection of AI discovery, system security,
          and practical implementation. Engagements are focused on correctness, measurable outcomes, and engineering quality.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-[0.02em] text-slate-100">Core Focus Areas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-white/10 bg-slate-900/45 p-6 shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-slate-100">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">{area.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
