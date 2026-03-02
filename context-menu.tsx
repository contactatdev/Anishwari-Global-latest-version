import { motion } from "motion/react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Global Markets", href: "#markets" },
  { label: "Contact Us", href: "#contact" },
];

const productsList = [
  "Basmati Rice",
  "Red Chilli & Turmeric",
  "Yellow Lentils",
  "Dollar Chana",
  "Fresh Onion & Garlic",
  "Banana & Coconut",
  "Alphonso Mango",
  "Sesame Seeds",
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-brand-green-dark text-white relative overflow-hidden">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <img
                src="/assets/uploads/anishwari_global_modern_logo-1-2.png"
                alt="Anishwari Global Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </motion.div>
            <p className="font-display italic text-brand-gold/80 text-sm mb-4">
              "Where quality meets commitment."
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
              India's premium agro product exporter, delivering quality and
              trust to 50+ countries worldwide.
            </p>
            <p className="font-body text-xs text-brand-gold/70 font-semibold tracking-wider uppercase">
              Exporting Excellence Worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-white/60 hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-5 uppercase tracking-wider">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productsList.map((product) => (
                <li key={product}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#products")}
                    className="font-body text-sm text-white/60 hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:contactatdev@gmail.com"
                  className="font-body text-sm text-white/70 hover:text-brand-gold transition-colors"
                >
                  contactatdev@gmail.com
                </a>
              </li>
              <li>
                <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:+917972732827"
                  className="font-body text-sm text-white/70 hover:text-brand-gold transition-colors"
                >
                  +91-7972732827
                </a>
              </li>
              <li>
                <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="font-body text-sm text-white/70">
                  Pune, Maharashtra — 411033
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/50">
            © {year} Anishwari Global Pvt. Ltd. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/40 hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
