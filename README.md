<div align="center">

# My Carrd — Personal Portfolio & Open-Source Template 🚀

**English** · [**Türkçe**](README.tr.md)

<br />

<p align="center">
  <img src="assets/preview.png" alt="My Carrd Preview Screenshot" width="820" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);" />
</p>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-emre--gultekir--card.web.app-E3BD52?style=for-the-badge&logo=firebase&logoColor=black)](https://emre-gultekir-card.web.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Zero Build](https://img.shields.io/badge/Build-Zero%20Dependencies-10B981?style=for-the-badge)](https://github.com/E-MRE/my-carrd)

</div>

---

A modern personal portfolio template inspired by the iconic [Carrd Template #318](https://bb17e50b963c5e74.demo.carrd.co) design, crafted specifically for software developers and indie product builders.

Featuring dual-language support (**EN / TR**), **Dark & Light modes**, and a **centralized configuration**. You can launch your own personal site in minutes simply by editing a single file (`site.config.js`). Zero build step (`zero-build`), zero npm dependencies!

---

## ✨ Features

* **🎨 Carrd #318 Floating Dual-Panel Design:** Frosted glass identity and bio panel on top; angled gradient container for social links and call-to-action at the bottom.
* **⚡ Zero Build & Zero Dependencies:** No `npm install`, webpack, or complex bundlers required. Pure, lightning-fast HTML, CSS, and modern JavaScript.
* **⚙️ Centralized Configuration (`site.config.js`):** Name, bio, status badge, avatar, shipped products, email, social networks, and **theme color palettes** are all managed in one place.
* **🎨 Dynamic Color & Theme Engine:** No hardcoded colors. Customize background, border, text, and accent colors for both Dark and Light themes right inside your configuration file.
* **🌐 Native Bi-Lingual Support (EN / TR):** Instant language switching with `localStorage` memory. Updates document title and Open Graph metadata dynamically.
* **💼 Proof-of-Work Project Badges:** Showcase your SaaS, indie tools, or open-source projects as clean interactive micro-badges right beneath your bio.
* **📬 Frictionless Smart CTA:** The "Get in touch" button copies your email to the clipboard with an instant toast notification (`✓ Email copied to clipboard!`) while opening the default mail client. The address is also displayed subtly underneath.
* **♿ Accessible & Mobile-First:** WCAG AA compliant contrast ratios, balanced portrait framing, and 44px touch targets on mobile.

---

## 🚀 Quick Start (3 Easy Steps)

### 1. Clone or Fork the Repository
```bash
git clone https://github.com/E-MRE/my-carrd.git
cd my-carrd
```

### 2. Customize `site.config.js`
Open `site.config.js` in your favorite code editor and update your details:

```javascript
// site.config.js
const siteConfig = {
  // 1. Profile & Contact
  profile: {
    avatar: "assets/profile.jpg", // Local image path or external URL
    email: "your.email@example.com"
  },

  // 2. Central Theme & Palette Management
  theme: {
    defaultTheme: "dark", // "dark" or "light"
    dark: {
      accent: "#E3BD52",   // Signature gold accent
      pageBg: "#22222A",
      // ...
    },
    light: {
      accent: "#D97706",
      pageBg: "#EDEDF2",
      // ...
    }
  },

  // 3. Social Media Profiles (github, linkedin, medium, twitter, x, instagram, youtube, website)
  social: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { name: "Medium", url: "https://medium.com/@yourusername", icon: "medium" }
  ],

  // 4. Bi-Lingual Content (EN & TR)
  i18n: {
    defaultLang: "en",
    en: {
      roleBadge: "FULL-STACK & AI BUILDER",
      firstName: "Alex",
      highlightName: "Doe",
      bioLead: "Building scalable software for over 5 years.",
      bioBody: "Currently engineering production systems by day; shipping autonomous AI products and writing about real-world workflows by night.",
      projectsLabel: "// SHIPPED PRODUCTS",
      projects: [
        { title: "Doclyvo", tag: "PDF Tools", url: "https://project1.com" },
        { title: "Revvia AI", tag: "Review Agent", url: "https://project2.com" }
      ],
      ctaText: "Get in touch",
      copiedToast: "✓ Email copied to clipboard!",
      emailSubject: "Hello Alex"
    },
    tr: {
      // Turkish translations...
    }
  }
};
```

### 3. Open in Browser
```bash
open index.html
```

---

## 🌐 Instant Free Deployment (1 Minute)

Since this project consists of static assets, it can be deployed for free on any platform:

### Firebase Hosting (Pre-configured)
```bash
firebase deploy --only hosting
```

### GitHub Pages
1. Go to repository **Settings** > **Pages**.
2. Select **Branch: main** and folder **/** (root), then click **Save**.

### Vercel / Netlify / Cloudflare Pages
Connect your GitHub repository; deployment works out-of-the-box with zero build commands.

---

## 📂 Project Structure

```
my-carrd/
├── assets/
│   ├── preview.png     # Screenshot for README
│   └── profile.jpg     # Portrait profile photo
├── site.config.js      # 🎯 SINGLE SOURCE OF TRUTH (All texts, links, themes)
├── index.html          # Clean semantic template structure
├── styles.css          # Carrd #318 glassmorphism & gradient tokens (CSS variables)
├── app.js              # Theme injector, reactive i18n engine, smart CTA
├── firebase.json       # Firebase Hosting static cache & routing settings
├── .firebaserc         # Firebase project configuration
├── README.md           # English documentation
├── README.tr.md        # Turkish documentation
└── LICENSE             # MIT License
```

---

## 📝 License

Distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this template for personal or commercial projects.