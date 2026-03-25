import { navLinks } from '../data/siteData';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="w-full border-b border-white/10 bg-gradient-to-r from-slate-950 via-[#0f1830] to-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Left */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo3.png"
              alt="Network Logo"
              className="h-10 w-auto object-contain"
            />

            {/* <div className="leading-tight"> */}
            {/* <p className="text-[14px] font-semibold text-white">Network</p> */}
            {/* </div> */}
          </a>

          {/* Center */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-slate-200 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <a
            href="#admission"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-[14px] font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Admission
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;