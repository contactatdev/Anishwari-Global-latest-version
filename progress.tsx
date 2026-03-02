import { Award, Globe, Heart, Leaf, Shield } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Every batch rigorously tested to meet international food safety standards.",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Established distribution channels across 50+ countries worldwide.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    desc: "Partnering with responsible farmers for eco-friendly agriculture.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Dedicated support from inquiry through delivery and beyond.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-brand-gold" />
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-brand-gold">
            Our Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Connecting India's
              <br />
              <span className="text-brand-green">Finest Farms</span> to
              <br />
              the World
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-base text-muted-foreground leading-relaxed mb-5"
            >
              Founded with a vision to connect India's finest agricultural
              produce with global markets, Anishwari Global Pvt. Ltd. has grown
              into a trusted name in the international agro trade. We specialize
              in sourcing, processing, and exporting premium quality agro
              products with strict quality control at every step.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-base text-muted-foreground leading-relaxed mb-8"
            >
              With over 15 years of experience, our team of agricultural experts
              and trade professionals ensures that every shipment meets the
              highest international standards — from farm gate to your
              warehouse.
            </motion.p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl bg-brand-cream hover:bg-brand-cream-dark transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-green flex items-center justify-center group-hover:scale-105 transition-transform">
                    <v.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                      {v.title}
                    </p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6 p-5 rounded-2xl border-l-4 border-brand-gold bg-brand-green/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand-gold/5 -translate-y-4 translate-x-4" />
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-gold mb-2">
                Our Mission
              </p>
              <p className="font-display text-base font-medium text-foreground italic">
                "To deliver India's agricultural richness to the world with
                integrity, quality, and a commitment that endures beyond every
                transaction."
              </p>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/about-company.dim_800x600.jpg"
                alt="Anishwari Global team"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-brand-green rounded-2xl p-5 shadow-2xl"
            >
              <p className="font-display text-4xl font-bold text-brand-gold">
                15+
              </p>
              <p className="font-body text-sm text-white/80 mt-1">
                Years of Excellence
              </p>
            </motion.div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl border-2 border-brand-gold/30 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl border border-brand-gold/15 -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        {/* Director Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-brand-gold/40" />
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-brand-gold flex items-center gap-2">
              <Award className="w-4 h-4" />
              Leadership
            </span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-brand-gold/40" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 bg-brand-cream rounded-3xl p-8 lg:p-10 border border-brand-gold/20 shadow-lg">
            {/* Director Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-brand-gold/30">
                  <img
                    src="/assets/uploads/dev-linkedin-dp1-1.jpg"
                    alt="Devendra Singh Rathore - Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-brand-green rounded-xl px-3 py-1.5 shadow-lg">
                  <p className="font-body text-xs text-brand-gold font-semibold uppercase tracking-wider">
                    Director
                  </p>
                </div>
              </div>
            </div>

            {/* Director Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1">
                Devendra Singh Rathore
              </h3>
              <p className="font-body text-brand-green font-semibold text-sm mb-3 uppercase tracking-wider">
                Director, Anishwari Global Pvt. Ltd.
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xl">
                With a deep passion for India's agricultural heritage and a
                vision for global trade, Mr. Rathore leads Anishwari Global with
                a commitment to quality, integrity, and building lasting
                partnerships across the world. His expertise in agro commodities
                and international trade drives the company's mission to deliver
                India's finest produce to every corner of the globe.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                {[
                  "International Trade",
                  "Agro Commodities",
                  "Global Exports",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full font-body text-xs font-semibold border border-brand-green/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
