@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Fraunces (Display / Headings) ─── */
@font-face {
  font-family: "Fraunces";
  src: url("/assets/fonts/Fraunces.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* ─── Satoshi (Body) ─── */
@font-face {
  font-family: "Satoshi";
  src: url("/assets/fonts/Satoshi.woff2") format("woff2");
  font-weight: 300 900;
  font-style: normal;
  font-display: swap;
}

@layer base {
  :root {
    --radius: 0.5rem;

    /* ── Anishwari Global Palette — Deep Forest Green + Gold/Amber ── */

    /* Background: warm off-white parchment */
    --background: 0.98 0.008 85;
    /* Foreground: deep charcoal-green */
    --foreground: 0.18 0.04 145;

    /* Card: pure warm white */
    --card: 0.99 0.004 90;
    --card-foreground: 0.18 0.04 145;

    /* Popover */
    --popover: 0.99 0.004 90;
    --popover-foreground: 0.18 0.04 145;

    /* Primary: Deep forest green */
    --primary: 0.32 0.09 148;
    --primary-foreground: 0.98 0.008 85;

    /* Secondary: Rich gold/amber */
    --secondary: 0.78 0.14 72;
    --secondary-foreground: 0.18 0.04 145;

    /* Muted */
    --muted: 0.94 0.015 90;
    --muted-foreground: 0.48 0.03 150;

    /* Accent: warm gold */
    --accent: 0.82 0.16 75;
    --accent-foreground: 0.15 0.04 145;

    /* Destructive */
    --destructive: 0.577 0.245 27.325;
    --destructive-foreground: 0.985 0 0;

    /* Border: subtle warm gray-green */
    --border: 0.88 0.02 140;
    --input: 0.88 0.02 140;
    --ring: 0.32 0.09 148;

    /* Chart */
    --chart-1: 0.646 0.222 41.116;
    --chart-2: 0.6 0.118 184.704;
    --chart-3: 0.398 0.07 227.392;
    --chart-4: 0.828 0.189 84.429;
    --chart-5: 0.769 0.188 70.08;

    /* Sidebar */
    --sidebar: 0.98 0.008 85;
    --sidebar-foreground: 0.18 0.04 145;
    --sidebar-primary: 0.32 0.09 148;
    --sidebar-primary-foreground: 0.98 0.008 85;
    --sidebar-accent: 0.94 0.015 90;
    --sidebar-accent-foreground: 0.18 0.04 145;
    --sidebar-border: 0.88 0.02 140;
    --sidebar-ring: 0.32 0.09 148;

    /* Custom brand tokens */
    --brand-green: 0.32 0.09 148;
    --brand-green-dark: 0.22 0.07 148;
    --brand-green-light: 0.52 0.09 148;
    --brand-gold: 0.78 0.14 72;
    --brand-gold-light: 0.88 0.12 78;
    --brand-cream: 0.97 0.015 90;
    --brand-cream-dark: 0.92 0.02 88;
  }

  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
    font-family: "Satoshi", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Fraunces", serif;
  }
}

@layer utilities {
  .font-display {
    font-family: "Fraunces", serif;
  }

  .font-body {
    font-family: "Satoshi", sans-serif;
  }

  .text-gradient-gold {
    background: linear-gradient(
      135deg,
      oklch(var(--brand-gold)) 0%,
      oklch(var(--brand-gold-light)) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bg-brand-green {
    background-color: oklch(var(--brand-green));
  }

  .bg-brand-green-dark {
    background-color: oklch(var(--brand-green-dark));
  }

  .bg-brand-gold {
    background-color: oklch(var(--brand-gold));
  }

  .bg-brand-cream {
    background-color: oklch(var(--brand-cream));
  }

  .text-brand-green {
    color: oklch(var(--brand-green));
  }

  .text-brand-gold {
    color: oklch(var(--brand-gold));
  }

  .border-brand-gold {
    border-color: oklch(var(--brand-gold));
  }

  .grain-overlay {
    position: relative;
  }

  .grain-overlay::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    background-repeat: repeat;
    pointer-events: none;
    z-index: 1;
  }
}
