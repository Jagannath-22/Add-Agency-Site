const services = [
  {
    title: "AI Search & Conversational Visibility",
    details:
      "Guidance on AEO strategy, prompt-intent mapping, and AI discovery readiness for products and documentation. The goal is to improve how systems are interpreted in conversational retrieval contexts while preserving technical accuracy.",
  },
  {
    title: "AI SEO & Structured Content Optimization",
    details:
      "Structured content design for machine-readable relevance across search and assistant interfaces. Work includes schema planning, content architecture refinements, and consistency improvements that support AI-driven indexing and citation quality.",
  },
  {
    title: "Security & Network Defense Consulting",
    details:
      "Security consulting across defensive architecture, kernel-level control points, runtime monitoring, and anomaly detection workflows. Engagements emphasize practical hardening decisions and operational visibility instead of checklist-only compliance.",
  },
  {
    title: "Research-Driven Prototyping & Tooling",
    details:
      "Prototyping and internal tooling based on research-oriented engineering methods. This includes rapid validation of AI and security concepts, instrumentation design, and iterative refinement toward production-feasible solutions.",
  },
];

function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="max-w-4xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-[0.02em] text-slate-100 sm:text-4xl">Services</h1>
        <p className="leading-relaxed text-slate-300">
          Consulting engagements are structured around specific technical objectives and realistic implementation constraints.
        </p>
      </section>

      <section className="grid gap-5">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-white/10 bg-slate-900/45 p-6 shadow-lg backdrop-blur-md"
          >
            <h2 className="text-xl font-semibold text-slate-100">{service.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{service.details}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ServicesPage;
