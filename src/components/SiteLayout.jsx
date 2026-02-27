import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function SiteLayout() {
  return (
    <div className="min-h-screen text-[#e5e7eb]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <NavLink to="/" className="text-sm font-semibold tracking-[0.02em] text-slate-100 sm:text-base">
            Jagannath Sahoo - AI & Security Consulting
          </NavLink>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500/80 to-cyan-500/80 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                        : "text-slate-300 hover:text-white hover:shadow-[0_0_16px_rgba(34,211,238,0.25)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-slate-900/60 py-8 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 text-sm text-slate-400 sm:px-6 lg:px-8">
          <p className="font-medium text-slate-200">
            Jagannath Sahoo - AI & Security Consulting
          </p>
          <p>Email: jagannath.sahoo.consulting@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jagannath-sahoo/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-100"
            >
              linkedin.com/in/jagannath-sahoo
            </a>
          </p>
          <p className="text-slate-500">
            Copyright {new Date().getFullYear()} Jagannath Sahoo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
