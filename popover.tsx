import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "1000+", label: "MT Monthly" },
  { value: "ISO", label: "Certified" },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1600x800.jpg"
          alt="Agricultural fields"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer overlay for richness */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, oklch(0.22 0.07 148 / 0.5) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Decorative diagonal line */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(135deg, oklch(0.78 0.14 72 / 0.15) 0px, oklch(0.78 0.14 72 / 0.15) 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-gold font-body text-sm font-semibold tracking-widest uppercase">
              India's Premium Agro Exporter
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-4"
          >
            Anishwari
            <br />
            <span className="text-gradient-gold">Global</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white/90">
              Pvt. Ltd.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-display text-xl sm:text-2xl italic text-brand-gold/90 mb-3 font-light"
          >
            "Where quality meets commitment."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-body text-lg text-white/75 mb-10 max-w-xl"
          >
            Premium agro products sourced from India's finest farms, delivered
            to global markets with uncompromising quality and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={() => scrollTo("#products")}
              className="group bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-body font-semibold px-8 py-3 h-auto rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-brand-gold/30 hover:-translate-y-1"
            >
              Explore Our Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollTo("#contact")}
              variant="outline"
              className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60 font-body font-semibold px-8 py-3 h-auto rounded-full text-base transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 max-w-3xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              className="flex flex-col items-center justify-center py-5 px-4 bg-black/30 hover:bg-black/20 transition-colors"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-brand-gold">
                {stat.value}
              </span>
              <span className="font-body text-xs text-white/70 text-center mt-1 tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span className="font-body text-xs text-white/50 tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
