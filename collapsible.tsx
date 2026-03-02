import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ProductCategory } from "../backend";

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  [ProductCategory.spices]: "Spices & Herbs",
  [ProductCategory.riceAndGrains]: "Rice & Grains",
  [ProductCategory.pulsesAndLegumes]: "Pulses & Legumes",
  [ProductCategory.fruitsAndVegetables]: "Fruits & Vegetables",
  [ProductCategory.oilseeds]: "Oilseeds",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contactatdev@gmail.com",
    href: "mailto:contactatdev@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-7972732827",
    href: "tel:+917972732827",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Pune, Maharashtra — 411033",
    href: null,
  },
];

interface FormState {
  name: string;
  email: string;
  company: string;
  productInterest: ProductCategory | "";
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  productInterest: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { actor } = useActor();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setError("Connection not ready. Please try again.");
      return;
    }
    if (!form.productInterest) {
      setError("Please select a product of interest.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await actor.submitInquiry(
        form.name,
        form.email,
        form.company,
        form.productInterest as ProductCategory,
        form.message,
      );
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to send inquiry. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, oklch(0.32 0.09 148 / 0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              Get in Touch
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
            Start Your <span className="text-brand-green">Export Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted-foreground mt-3 max-w-xl mx-auto"
          >
            Share your requirements and our team will respond within 24 hours
            with pricing and availability.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-brand-green rounded-3xl p-8 relative overflow-hidden flex-1">
              {/* Decorative */}
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-15"
                style={{ background: "oklch(0.78 0.14 72)" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-4 left-4 w-20 h-20 rounded-full opacity-10"
                style={{ background: "white" }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-5">
                  <img
                    src="/assets/uploads/anishwari_global_modern_logo-1-2.png"
                    alt="Anishwari Global Logo"
                    className="h-14 w-auto object-contain brightness-0 invert"
                  />
                </div>

                <p className="font-display italic text-brand-gold/90 text-sm mb-6">
                  "Where quality meets commitment."
                </p>

                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                        <info.icon className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-white/50 uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-body text-sm text-white hover:text-brand-gold transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-body text-sm text-white">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <p className="font-body text-xs text-white/50 uppercase tracking-wider mb-2">
                    Response Time
                  </p>
                  <p className="font-body text-sm text-white/80">
                    We typically respond within{" "}
                    <span className="text-brand-gold font-semibold">
                      24 business hours
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-3xl p-10 border border-border h-full flex flex-col items-center justify-center text-center min-h-[500px]"
              >
                <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-brand-green" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Inquiry Received!
                </h3>
                <p className="font-body text-muted-foreground mb-6 max-w-sm">
                  Thank you for reaching out. Our export team will review your
                  inquiry and get back to you within 24 business hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold rounded-full px-7"
                >
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl p-8 border border-border"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="font-body rounded-xl border-border focus:border-brand-green focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="font-body rounded-xl border-border focus:border-brand-green focus:ring-brand-green/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Company Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="company"
                      required
                      placeholder="Your Company Ltd."
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="font-body rounded-xl border-border focus:border-brand-green focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="product"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Product Interest{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={form.productInterest}
                      onValueChange={(v) => handleChange("productInterest", v)}
                    >
                      <SelectTrigger
                        id="product"
                        className="font-body rounded-xl border-border focus:border-brand-green"
                      >
                        <SelectValue placeholder="Select a product..." />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(CATEGORY_LABELS).map(
                          ([value, label]) => (
                            <SelectItem
                              key={value}
                              value={value}
                              className="font-body"
                            >
                              {label}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label
                    htmlFor="message"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us about your requirements — quantity, destination, delivery timeline, certifications needed..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className="font-body rounded-xl border-border focus:border-brand-green focus:ring-brand-green/20 resize-none"
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                    <p className="font-body text-sm text-destructive">
                      {error}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold py-3 h-auto rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-brand-green/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>

                <p className="font-body text-xs text-muted-foreground text-center mt-4">
                  Your information is secure and will only be used to respond to
                  your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
