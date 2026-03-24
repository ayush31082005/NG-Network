const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">NG Network</p>
          <p className="text-sm text-slate-400">React + Tailwind premium responsive demo</p>
        </div>
        <p className="text-sm text-slate-500">Customize text, links, videos and brand assets as needed.</p>
      </div>
    </footer>
  );
};

export default Footer;
