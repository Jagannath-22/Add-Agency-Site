function ContactPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-[0.02em] text-slate-100 sm:text-4xl">Contact</h1>
      <p className="leading-relaxed text-slate-300">
        For collaboration, research, or consulting inquiries.
      </p>

      <div className="space-y-4 rounded-xl border border-white/10 bg-slate-900/45 p-6 shadow-lg backdrop-blur-md">
        <p className="text-slate-200">
          Email: <span className="font-medium">jagannath.sahoo.consulting@gmail.com</span>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jagannath-sahoo/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition-colors hover:text-cyan-300"
          >
            https://www.linkedin.com/in/jagannath-sahoo/
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
