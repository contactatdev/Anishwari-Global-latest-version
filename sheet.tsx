import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useQueries";
import { ArrowRight, MapPin, Package } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { type Product, ProductCategory } from "../backend";

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  [ProductCategory.spices]: "Spices & Herbs",
  [ProductCategory.riceAndGrains]: "Rice & Grains",
  [ProductCategory.pulsesAndLegumes]: "Pulses & Legumes",
  [ProductCategory.fruitsAndVegetables]: "Fruits & Vegetables",
  [ProductCategory.oilseeds]: "Oilseeds",
};

// Product-specific images mapping by name keyword
const PRODUCT_IMAGES: Record<string, string> = {
  "basmati":       "/assets/generated/product-rice.dim_600x400.jpg",
  "sona":          "/assets/generated/product-rice.dim_600x400.jpg",
  "rice":          "/assets/generated/product-rice.dim_600x400.jpg",
  "chilli":        "/assets/generated/product-spices.dim_600x400.jpg",
  "turmeric":      "/assets/generated/product-spices.dim_600x400.jpg",
  "pepper":        "/assets/generated/product-spices.dim_600x400.jpg",
  "spice":         "/assets/generated/product-spices.dim_600x400.jpg",
  "lentil":        "/assets/generated/product-pulses.dim_600x400.jpg",
  "chana":         "/assets/generated/product-pulses.dim_600x400.jpg",
  "moong":         "/assets/generated/product-pulses.dim_600x400.jpg",
  "chickpea":      "/assets/generated/product-pulses.dim_600x400.jpg",
  "dal":           "/assets/generated/product-pulses.dim_600x400.jpg",
  "mango":         "/assets/generated/product-fruits.dim_600x400.jpg",
  "onion":         "/assets/generated/product-fruits.dim_600x400.jpg",
  "banana":        "/assets/generated/product-fruits.dim_600x400.jpg",
  "coconut":       "/assets/generated/product-fruits.dim_600x400.jpg",
  "garlic":        "/assets/generated/product-fruits.dim_600x400.jpg",
  "sesame":        "/assets/generated/product-oilseeds.dim_600x400.jpg",
  "groundnut":     "/assets/generated/product-oilseeds.dim_600x400.jpg",
  "peanut":        "/assets/generated/product-oilseeds.dim_600x400.jpg",
  "soybean":       "/assets/generated/product-oilseeds.dim_600x400.jpg",
};

// Category fallback images
const CATEGORY_IMAGES: Record<ProductCategory, string> = {
  [ProductCategory.spices]:             "/assets/generated/product-spices.dim_600x400.jpg",
  [ProductCategory.riceAndGrains]:      "/assets/generated/product-rice.dim_600x400.jpg",
  [ProductCategory.pulsesAndLegumes]:   "/assets/generated/product-pulses.dim_600x400.jpg",
  [ProductCategory.fruitsAndVegetables]:"/assets/generated/product-fruits.dim_600x400.jpg",
  [ProductCategory.oilseeds]:           "/assets/generated/product-oilseeds.dim_600x400.jpg",
};

// Product emoji icons for visual appeal
const PRODUCT_EMOJIS: Record<string, string> = {
  "basmati": "🌾", "sona": "🌾", "rice": "🌾",
  "chilli": "🌶️", "turmeric": "🟡", "pepper": "⚫",
  "lentil": "🫘", "chana": "🫘", "moong": "🟢", "dal": "🫘",
  "mango": "🥭", "onion": "🧅", "banana": "🍌", "coconut": "🥥", "garlic": "🧄",
  "sesame": "🌻", "groundnut": "🥜", "peanut": "🥜",
};

function getProductImage(product: Product): string {
  const nameLower = product.name.toLowerCase();
  for (const [keyword, img] of Object.entries(PRODUCT_IMAGES)) {
    if (nameLower.includes(keyword)) return img;
  }
  return CATEGORY_IMAGES[product.category];
}

function getProductEmoji(product: Product): string {
  const nameLower = product.name.toLowerCase();
  for (const [keyword, emoji] of Object.entries(PRODUCT_EMOJIS)) {
    if (nameLower.includes(keyword)) return emoji;
  }
  return "🌿";
}

const ALL_TAB = "all";

function ProductCard({ product }: { product: Product }) {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const emoji = getProductEmoji(product);
  const imgSrc = getProductImage(product);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 border border-border hover:border-brand-gold/30 flex flex-col"
    >
      {/* Image with emoji overlay */}
      <div className="relative h-48 overflow-hidden bg-brand-cream flex-shrink-0">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            // Fallback to emoji display if image fails
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.style.display = "flex";
              parent.style.alignItems = "center";
              parent.style.justifyContent = "center";
              parent.style.fontSize = "4rem";
              parent.style.background = "linear-gradient(135deg, #f7f3ed, #ede7dd)";
              parent.textContent = emoji;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Emoji badge on image */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
          {emoji}
        </div>
        <Badge className="absolute top-3 left-3 bg-brand-green text-white border-0 font-body text-xs font-semibold">
          {CATEGORY_LABELS[product.category]}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-brand-green" />
            {product.origin}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
            <Package className="w-3.5 h-3.5 text-brand-green" />
            {product.unit}
          </span>
        </div>

        <Button
          onClick={scrollToContact}
          className="w-full group/btn bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold text-sm rounded-xl transition-all duration-300"
          size="sm"
        >
          Request Quote
          <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}

function ProductSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-9 w-full rounded-xl" />
      </div>
    </div>
  );
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB);
  const { data: products, isLoading, isError } = useProducts();

  const tabs = [
    { value: ALL_TAB, label: "All Products" },
    ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
      value,
      label,
    })),
  ];

  const filtered =
    activeTab === ALL_TAB
      ? (products ?? [])
      : (products ?? []).filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-24 lg:py-32 bg-brand-cream">
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
              Product Catalogue
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
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted-foreground mt-3 max-w-xl mx-auto"
          >
            Premium-grade agro commodities sourced from India's best growing
            regions, ready for global export.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-full font-body text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-brand-green text-white shadow-lg shadow-brand-green/20"
                  : "bg-white text-muted-foreground hover:bg-brand-cream-dark hover:text-foreground border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        {isError ? (
          <div className="text-center py-16">
            <p className="font-body text-muted-foreground">
              Unable to load products. Please try again.
            </p>
          </div>
        ) : isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => `skeleton-${i}`).map((id) => (
              <ProductSkeleton key={id} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-body text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard key={String(product.id)} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
