import { motion } from "motion/react";

const regions = [
  {
    flag: "🇸🇦",
    region: "Middle East",
    countries: ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman"],
    color: "from-amber-500/15 to-orange-500/10",
  },
  {
    flag: "🇩🇪",
    region: "Europe",
    countries: ["Germany", "Netherlands", "UK", "France", "Spain"],
    color: "from-blue-500/15 to-indigo-500/10",
  },
  {
    flag: "🇺🇸",
    region: "North America",
    countries: ["United States", "Canada", "Mexico"],
    color: "from-red-500/15 to-rose-500/10",
  },
  {
    flag: "🇸🇬",
    region: "Southeast Asia",
    countries: ["Singapore", "Malaysia", "Indonesia", "Thailand", "Vietnam"],
    color: "from-emerald-500/15 to-teal-500/10",
  },
  {
    flag: "🇿🇦",
    region: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Ethiopia", "Tanzania"],
    color: "from-yellow-500/15 to-amber-500/10",
  },
  {
    flag: "🇦🇺",
    region: "Australia & Pacific",
    countries: ["Australia", "New Zealand", "Fiji"],
    color: "from-sky-500/15 to-cyan-500/10",
  },
];

export function MarketsSection() {
  return (
    <section
      id="markets"
      className="py-24 lg:py-32 bg-brand-green relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "oklch(0.78 0.14 72)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-brand-gold" />
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-brand-gold">
              Export Destinations
            </span>
            <div className="h-px w-10 bg-brand-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-white"
          >
            Our Global Reach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white/70 mt-3 max-w-xl mx-auto"
          >
            From the fertile plains of India to tables around the world — our
            export network spans six continents.
          </motion.p>
        </div>

        {/* Globe decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-56 h-56">
            {/* Globe SVG */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="globeGrad" cx="35%" cy="35%">
                  <stop
                    offset="0%"
                    stopColor="oklch(0.52 0.09 148)"
                    stopOpacity="0.9"
                  />
                  <stop
                    offset="100%"
                    stopColor="oklch(0.22 0.07 148)"
                    stopOpacity="1"
                  />
                </radialGradient>
              </defs>
              {/* Globe circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="url(#globeGrad)"
                stroke="oklch(0.78 0.14 72)"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {/* Latitude lines */}
              {[-60, -30, 0, 30, 60].map((lat) => {
                const y = 100 + (lat / 90) * 90;
                const r = Math.sqrt(90 * 90 - (y - 100) * (y - 100));
                return r > 0 ? (
                  <ellipse
                    key={lat}
                    cx="100"
                    cy={y}
                    rx={r}
                    ry={r * 0.25}
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                  />
                ) : null;
              })}
              {/* Longitude lines */}
              {[0, 30, 60, 90, 120, 150].map((lng) => (
                <ellipse
                  key={lng}
                  cx="100"
                  cy="100"
                  rx={15 + (lng / 180) * 75}
                  ry="90"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                />
              ))}
              {/* Continents - simplified blobs */}
              <path
                d="M 60 70 Q 80 55 100 65 Q 115 70 120 85 Q 110 95 95 90 Q 75 88 60 70Z"
                fill="white"
                opacity="0.3"
              />
              <path
                d="M 70 105 Q 85 95 100 100 Q 110 110 105 125 Q 90 135 75 125Z"
                fill="white"
                opacity="0.3"
              />
              <path
                d="M 115 75 Q 130 70 145 78 Q 150 90 140 98 Q 128 95 118 85Z"
                fill="white"
                opacity="0.25"
              />
              {/* Highlight */}
              <circle cx="70" cy="70" r="35" fill="white" opacity="0.06" />
            </svg>

            {/* Orbiting dots */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "15s" }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-gold shadow-lg shadow-brand-gold/50" />
            </div>
            <div
              className="absolute inset-0 animate-spin"
              style={{
                animationDuration: "20s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute bottom-4 right-6 w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((r, i) => (
            <motion.div
              key={r.region}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/15 border border-white/15 hover:border-brand-gold/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{r.flag}</span>
                <h3 className="font-display text-lg font-bold text-white">
                  {r.region}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {r.countries.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-2 font-body text-sm text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "50+", label: "Countries Served" },
            { value: "6", label: "Continents Reached" },
            { value: "1000+", label: "MT Monthly Volume" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl lg:text-4xl font-bold text-brand-gold">
                {s.value}
              </p>
              <p className="font-body text-sm text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
