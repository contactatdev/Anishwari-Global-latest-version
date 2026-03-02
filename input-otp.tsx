import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const certs = [
  {
    name: "FSSAI Certified",
    desc: "Food Safety and Standards Authority of India",
    badge: "🏛️",
  },
  {
    name: "ISO 9001:2015",
    desc: "International Quality Management Standard",
    badge: "🌐",
  },
  {
    name: "APEDA Registered",
    desc: "Agricultural & Processed Food Products Export",
    badge: "🌾",
  },
  {
    name: "Organic Certified",
    desc: "Certified organic produce for selective range",
    badge: "🌿",
  },
  {
    name: "Phytosanitary Compliant",
    desc: "Plant health certification for all exports",
    badge: "🔬",
  },
];

const qualityPoints = [
  "Multi-stage quality inspection at farm, processing, and packaging levels",
  "Laboratory testing for pesticide residue, moisture content, and purity",
  "Full traceability from farm origin to final delivery",
  "Cold-chain infrastructure for perishable goods",
  "Customized packaging as per buyer requirements",
];

export function CertificationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-brand-gold" />
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-brand-gold">
              Trust & Compliance
            </span>
            <div className="h-px w-10 bg-brand-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-foreground"
          >
            Quality & <span className="text-brand-green">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted-foreground mt-3 max-w-xl mx-auto"
          >
            Our certifications aren't just compliance — they're a promise of
            excellence to every buyer worldwide.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-xl font-bold text-foreground mb-6"
            >
              Our Certifications
            </motion.h3>
            <div className="grid gap-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-brand-gold/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-green/10 group-hover:bg-brand-green/15 flex items-center justify-center text-2xl transition-colors">
                    {cert.badge}
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-bold text-foreground">
                      {cert.name}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {cert.desc}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality Promise */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-xl font-bold text-foreground mb-6"
            >
              Our Quality Promise
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-brand-green rounded-3xl p-8 mb-6 relative overflow-hidden"
            >
              {/* Decorative */}
              <div
                className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-20"
                style={{ background: "oklch(0.78 0.14 72)" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-10"
                style={{ background: "oklch(0.78 0.14 72)" }}
                aria-hidden="true"
              />
              <p className="font-display text-2xl font-bold text-white mb-4 relative">
                "Zero compromise on quality. Zero exception."
              </p>
              <p className="font-body text-white/80 text-sm leading-relaxed relative">
                Every product leaving our facility carries our name and
                reputation. We enforce the same quality standards for the
                smallest order as for the largest contract.
              </p>
            </motion.div>

            <div className="space-y-3">
              {qualityPoints.map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
