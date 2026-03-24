import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/siteData';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div className="glass-card flex items-center justify-between rounded-full px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-violet-500 text-base font-bold text-white shadow-glow">
              NG
            </div>
            <div>
              <p className="text-sm font-semibold text-white">NG Network</p>
              <p className="text-xs text-slate-400">Premium Demo Website</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition hover:text-brand-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admission"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-105"
            >
              Apply Now
            </a>
          </nav>

          <button
            className="inline-flex rounded-full border border-white/10 p-2 text-slate-100 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="glass-card mt-3 rounded-3xl p-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-200 transition hover:text-brand-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#admission"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
