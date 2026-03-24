import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react';

const socialLinks = [
  {
    icon: Facebook,
    link: 'https://www.facebook.com/',
  },
  {
    icon: Instagram,
    link: 'https://www.instagram.com/ngnetworks/',
  },
  {
    icon: Youtube,
    link: 'https://www.youtube.com/@ngnetworkss',
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/',
  },
  {
    icon: Twitter,
    link: 'https://twitter.com/',
  },
  {
    icon: Send, // Telegram icon
    link: 'https://t.me/',
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-white">NG Networks</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              India’s leading networking training institute providing comprehensive
              courses and placement assistance.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Events & Webinars</a></li>
              <li><a href="#" className="hover:text-white">Blogs</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white">Legal & Business Info</a></li>
              <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="text-lg font-semibold text-white">Programs</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>CCNA</li>
              <li>CCNP</li>
              <li>Combo</li>
              <li>NDS</li>
              <li>NSS</li>
              <li className="text-brand-300">COS</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>📞 +91 9873940528</p>
              <p>✉️ info@ngnetworks.com</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NG Networks. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;