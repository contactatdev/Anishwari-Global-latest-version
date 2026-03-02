import { Award, Clock, DollarSign, TruckIcon } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every product undergoes rigorous multi-stage testing and quality certifications. We maintain ISO 9001:2015 standards throughout our supply chain.",
    highlight: "ISO Certified",
  },
  {
    icon: TruckIcon,
    title: "Global Logistics",
    description:
      "Seamless freight forwarding and customs clearance to 50+ countries. Our logistics network ensures your cargo arrives safely and on time.",
    highlight: "50+ Countries",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Reliable supply chain management with real-time tracking. We honor delivery commitments — because your business depends on ours.",
    highlight: "On-Time Guarantee",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Direct farmer partnerships allow us to offer the best market value without compromising quality. Transparent pricing, no hidden charges.",
    highlight: "Best Value",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, oklch(0.32 0.09 148 / 0.05) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "oklch(0.78 0.14 72 / 0.05)" }}
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
              Our Advantage
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
            Why Choose{" "}
            <span className="text-brand-green">Anishwari Global</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-card rounded-2xl p-7 border border-border hover:border-brand-green/40 hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/3 group-hover:to-brand-green/6 transition-all duration-400 rounded-2xl" />

              {/* Icon */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 group-hover:bg-brand-green flex items-center justify-center transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <div className="relative">
                {/* Highlight badge */}
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold text-xs font-body font-semibold mb-3">
                  {reason.highlight}
                </span>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-muted-foreground mb-6">
            Ready to experience the Anishwari Global difference?
          </p>
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
