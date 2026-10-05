/**
 * =============================================================================
 * My Carrd — Kişisel Portfolyo Şablonu Konfigürasyonu
 * =============================================================================
 * Bu dosya sitenin TEK BİLGİ KAYNAĞIDIR (Single Source of Truth).
 * Başka hiçbir HTML ya da CSS dosyasına dokunmadan, sadece bu dosyayı düzenleyerek
 * kendi kişisel kartınızı oluşturabilirsiniz.
 * 
 * Kurulum: Sıfır derleme (zero-build/no-npm). Dosyayı kaydedin ve yayına alın!
 */

const siteConfig = {
  // ---------------------------------------------------------------------------
  // 1. KİŞİSEL BİLGİLER & GÖRSEL
  // ---------------------------------------------------------------------------
  profile: {
    // Profil fotoğrafı: Yerel dosya yolu ("assets/profile.jpg") ya da harici URL
    avatar: "assets/profile.jpg",
    // İletişim e-posta adresi (Butona tıklandığında hem kopyalanır hem istemci açılır)
    email: "gltkr.emre@gmail.com"
  },

  // ---------------------------------------------------------------------------
  // 2. MERKEZİ TEMA & RENK YÖNETİMİ
  // ---------------------------------------------------------------------------
  // Hardcoded renk yok! Buradaki renk kodlarını değiştirerek tüm tasarımı yönetebilirsiniz.
  theme: {
    // Sayfa ilk açıldığında aktif olacak tema: "dark" veya "light"
    defaultTheme: "dark",

    // Karanlık Tema (Dark Mode) Renk Paleti
    dark: {
      pageBg: "#22222A",
      topCardBg: "rgba(255, 255, 255, 0.065)",
      bottomCardBg: "linear-gradient(132deg, rgba(255, 255, 255, 0.09) 35%, rgba(227, 189, 82, 0.24) 100%)",
      cardBorder: "rgba(255, 255, 255, 0.08)",
      cardShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.7)",
      textHeading: "#FFFFFF",
      textBody: "rgba(255, 255, 255, 0.78)",
      textStrong: "#FFFFFF",
      textMuted: "rgba(255, 255, 255, 0.52)",
      accent: "#E3BD52",             // Vurgu rengi (Altın sarısı)
      accentHover: "#FACD64",
      accentBtnBg: "#E3BD52",
      accentBtnText: "#1C1C24",
      badgeBg: "rgba(255, 255, 255, 0.05)",
      badgeBorder: "rgba(255, 255, 255, 0.1)",
      badgeHoverBorder: "rgba(227, 189, 82, 0.5)",
      grainOpacity: "0.22"
    },

    // Aydınlık Tema (Light Mode) Renk Paleti
    light: {
      pageBg: "#EDEDF2",
      topCardBg: "#FFFFFF",
      bottomCardBg: "linear-gradient(132deg, #F8FAFC 35%, rgba(217, 119, 6, 0.12) 100%)",
      cardBorder: "rgba(0, 0, 0, 0.08)",
      cardShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.09)",
      textHeading: "#111827",
      textBody: "#3F3F46",
      textStrong: "#111827",
      textMuted: "#71717A",
      accent: "#D97706",             // Vurgu rengi
      accentHover: "#27272A",
      accentBtnBg: "#18181B",        // Yüksek kontrastlı buton
      accentBtnText: "#FFFFFF",
      badgeBg: "#F4F4F5",
      badgeBorder: "rgba(0, 0, 0, 0.08)",
      badgeHoverBorder: "rgba(217, 119, 6, 0.6)",
      grainOpacity: "0.08"
    }
  },

  // ---------------------------------------------------------------------------
  // 3. SOSYAL AĞ PROFİLLERİ (Alt paneldeki ikon butonlar)
  // ---------------------------------------------------------------------------
  // Desteklenen hazır ikonlar: github, linkedin, medium, twitter, x, instagram, youtube, website
  social: [
    { name: "GitHub", url: "https://github.com/E-MRE", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/emre-gultekir", icon: "linkedin" },
    { name: "Medium", url: "https://medium.com/@gltkr.emre", icon: "medium" }
  ],

  // ---------------------------------------------------------------------------
  // 4. ÇİFT DİLLİ İÇERİK (TR & EN)
  // ---------------------------------------------------------------------------
  // Ziyaretçiler sağ üstteki butonla anında diller arasında geçiş yapabilir.
  i18n: {
    // Varsayılan dil: "tr" veya "en"
    defaultLang: "tr",

    tr: {
      // Tarayıcı sekme başlığı ve SEO açıklaması
      pageTitle: "Emre Gültekir — Flutter Geliştirici & AI Ürün Üreticisi",
      pageDescription: "5 yıldır Flutter ile mobil uygulama geliştiriyorum. Mesai dışında yapay zekâ ajanlarıyla gerçek ürünler inşa ediyorum.",

      // Sol üst durum etiketi
      roleBadge: "FLUTTER & AI BUILDER",

      // İsim ve Vurgulanan Kısım (highlightName vurgulu mark renginde görünür)
      firstName: "Emre",
      highlightName: "Gültekir",

      // Biyografi (Hakkında bölümü)
      bioLead: "5 yıldır Flutter ile mobil uygulama geliştiriyorum.", // İlk kalın cümle
      bioBody: "Şu an Mars Technology'de mağazalarda kullanılan satış (POS) sistemleri üzerine çalışırken; mesai dışında yapay zekâ ajanlarıyla gerçek ürünler inşa ediyor ve üretim sürecimi paylaşıyorum.",

      // Geliştirilen Ürünler / Projeler Bölümü
      projectsLabel: "// GELİŞTİRDİĞİM ÜRÜNLER",
      projects: [
        {
          title: "Doclyvo",
          tag: "Web PDF Araçları",
          url: "https://doclyvo.onrender.com"
        },
        {
          title: "Revvia AI",
          tag: "Yorum Yanıtlayan AI",
          url: "https://revvia.pages.dev"
        }
      ],

      // İletişim Butonu (CTA) & Toast Bildirimi
      ctaText: "İletişime Geç",
      copiedToast: "✓ E-posta kopyalandı!",
      emailSubject: "Merhaba Emre"
    },

    en: {
      pageTitle: "Emre Gültekir — Flutter Developer & AI Builder",
      pageDescription: "Building mobile apps with Flutter for over 5 years. Outside work, shipping production-grade products with AI agents.",

      roleBadge: "FLUTTER & AI BUILDER",

      firstName: "Emre",
      highlightName: "Gültekir",

      bioLead: "Building mobile apps with Flutter for over 5 years.",
      bioBody: "At Mars Technology, I develop retail POS applications. Outside work, I ship production-grade products with AI agents and write about real engineering workflows.",

      projectsLabel: "// SHIPPED PRODUCTS",
      projects: [
        {
          title: "Doclyvo",
          tag: "Client-Side PDF Tools",
          url: "https://doclyvo.onrender.com"
        },
        {
          title: "Revvia AI",
          tag: "Review Reply AI Agent",
          url: "https://revvia.pages.dev"
        }
      ],

      ctaText: "Get in touch",
      copiedToast: "✓ Email copied to clipboard!",
      emailSubject: "Hello Emre"
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}
