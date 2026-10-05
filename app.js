/**
 * =============================================================================
 * Kişisel Portfolyo Motoru (Carrd #318 Dynamic Engine)
 * =============================================================================
 * - site.config.js dosyasından beslenir.
 * - Tema renklerini merkezi konfigürasyondan CSS değişkenlerine aktarır.
 * - TR / EN dil değişimini yönetir ve tüm metinleri dinamik günceller.
 * - Sosyal ağ ikonlarını (GitHub, LinkedIn, Medium, X, YouTube vb.) SVG olarak çizer.
 * - Akıllı e-posta kopyalama ve mailto etkileşimini yürütür.
 */

(function () {
  'use strict';

  // Config doğrulama
  if (typeof siteConfig === 'undefined') {
    console.error('siteConfig bulunamadı. Lütfen site.config.js dosyasının yüklendiğinden emin olun.');
    return;
  }

  // Genişletilmiş SVG İkon Kütüphanesi
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    medium: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    website: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
  };

  // State Yönetimi
  const initialLang = (siteConfig.i18n && siteConfig.i18n.defaultLang) || 'tr';
  const initialTheme = (siteConfig.theme && siteConfig.theme.defaultTheme) || 'dark';

  let currentLang = localStorage.getItem('my_carrd_lang') || initialLang;
  let currentTheme = localStorage.getItem('my_carrd_theme') || initialTheme;

  // DOM Öğeleri
  const html = document.documentElement;
  const labelRole = document.getElementById('label-role');
  const heroName = document.getElementById('hero-name');
  const heroBio = document.getElementById('hero-bio');
  const labelProjects = document.getElementById('label-projects');
  const projectsContainer = document.getElementById('projects-container');
  const profileImg = document.getElementById('profile-img');
  const linksList = document.getElementById('links-list');
  const btnCta = document.getElementById('btn-cta');
  const btnCtaLabel = document.getElementById('btn-cta-label');
  const copyToast = document.getElementById('copy-toast');
  const emailDisplay = document.getElementById('email-display');
  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  // Merkezi Tema Renklerini CSS Değişkenlerine Aktar
  function applyThemeTokens(theme) {
    if (!siteConfig.theme || !siteConfig.theme[theme]) return;
    const tokens = siteConfig.theme[theme];
    const root = document.documentElement;

    if (tokens.pageBg) root.style.setProperty('--page-bg', tokens.pageBg);
    if (tokens.topCardBg) root.style.setProperty('--top-card-bg', tokens.topCardBg);
    if (tokens.bottomCardBg) root.style.setProperty('--bottom-card-bg', tokens.bottomCardBg);
    if (tokens.cardBorder) root.style.setProperty('--card-border', tokens.cardBorder);
    if (tokens.cardShadow) root.style.setProperty('--card-shadow', tokens.cardShadow);
    if (tokens.textHeading) root.style.setProperty('--text-heading', tokens.textHeading);
    if (tokens.textBody) root.style.setProperty('--text-body', tokens.textBody);
    if (tokens.textStrong) root.style.setProperty('--text-strong', tokens.textStrong);
    if (tokens.textMuted) root.style.setProperty('--text-muted', tokens.textMuted);
    if (tokens.accent) {
      root.style.setProperty('--accent', tokens.accent);
      root.style.setProperty('--accent-bright', tokens.accentHover || tokens.accent);
      root.style.setProperty('--accent-btn-bg', tokens.accentBtnBg || tokens.accent);
    }
    if (tokens.accentHover) root.style.setProperty('--accent-btn-hover', tokens.accentHover);
    if (tokens.accentBtnText) root.style.setProperty('--accent-btn-text', tokens.accentBtnText);
    if (tokens.badgeBg) root.style.setProperty('--badge-bg', tokens.badgeBg);
    if (tokens.badgeBorder) root.style.setProperty('--badge-border', tokens.badgeBorder);
    if (tokens.badgeHoverBorder) root.style.setProperty('--badge-hover-border', tokens.badgeHoverBorder);
    if (tokens.grainOpacity) root.style.setProperty('--grain-opacity', tokens.grainOpacity);
  }

  // Temayı Uygula (Dark / Light)
  function applyTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('my_carrd_theme', theme);

    // CSS Token'larını enjekte et
    applyThemeTokens(theme);

    // İkon Görünürlüğü
    if (theme === 'dark') {
      if (iconSun) iconSun.classList.remove('hidden');
      if (iconMoon) iconMoon.classList.add('hidden');
    } else {
      if (iconSun) iconSun.classList.add('hidden');
      if (iconMoon) iconMoon.classList.remove('hidden');
    }
  }

  // Dili Uygula ve DOM'u Dinamik Olarak Güncelle
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('my_carrd_lang', lang);
    const data = (siteConfig.i18n && siteConfig.i18n[lang]) || (siteConfig.i18n && siteConfig.i18n.tr) || {};

    // 1. Sekme Başlığı & Meta Etiketleri
    if (data.pageTitle) {
      document.title = data.pageTitle;
      const metaTitleTag = document.getElementById('meta-title-tag');
      const ogTitle = document.getElementById('og-title');
      const twTitle = document.getElementById('tw-title');
      if (metaTitleTag) metaTitleTag.content = data.pageTitle;
      if (ogTitle) ogTitle.content = data.pageTitle;
      if (twTitle) twTitle.content = data.pageTitle;
    }

    if (data.pageDescription) {
      const metaDesc = document.getElementById('meta-desc');
      const ogDesc = document.getElementById('og-desc');
      const twDesc = document.getElementById('tw-desc');
      if (metaDesc) metaDesc.content = data.pageDescription;
      if (ogDesc) ogDesc.content = data.pageDescription;
      if (twDesc) twDesc.content = data.pageDescription;
    }

    // 2. Üst Durum Rozeti (Role / Status)
    if (labelRole && data.roleBadge) {
      labelRole.textContent = data.roleBadge;
    }

    // 3. İsim & Vurgulanan Kısım (<mark>)
    if (heroName) {
      const first = escapeHtml(data.firstName || '');
      const highlight = data.highlightName ? `<mark>${escapeHtml(data.highlightName)}</mark>` : '';
      heroName.innerHTML = `${first} ${highlight}`.trim();
    }

    // 4. Biyografi & Hakkında (bioLead + bioBody)
    if (heroBio) {
      const lead = data.bioLead ? `<strong>${escapeHtml(data.bioLead)}</strong> ` : '';
      const body = data.bioBody ? escapeHtml(data.bioBody) : '';
      heroBio.innerHTML = `${lead}${body}`.trim();
    }

    // 5. Profil Fotoğrafı (Avatar)
    if (profileImg && siteConfig.profile && siteConfig.profile.avatar) {
      profileImg.src = siteConfig.profile.avatar;
      profileImg.alt = `${data.firstName || 'Profil'} ${data.highlightName || ''}`.trim();

      // Sosyal Paylaşım Görsel Meta Etiketleri
      const ogImg = document.getElementById('og-img');
      const twImg = document.getElementById('tw-img');
      if (ogImg) ogImg.content = siteConfig.profile.avatar;
      if (twImg) twImg.content = siteConfig.profile.avatar;
    }

    // 6. Geliştirilen Ürünler / Proje Rozetleri
    if (labelProjects && data.projectsLabel) {
      labelProjects.textContent = data.projectsLabel;
    }

    if (projectsContainer) {
      projectsContainer.innerHTML = '';
      if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
        data.projects.forEach(project => {
          const a = document.createElement('a');
          a.href = project.url || '#';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'project-badge';
          a.innerHTML = `
            <span class="font-semibold">${escapeHtml(project.title || '')}</span>
            ${project.tag ? `<span class="badge-tag">${escapeHtml(project.tag)}</span>` : ''}
            <span class="badge-arrow">↗</span>
          `;
          projectsContainer.appendChild(a);
        });
        projectsContainer.parentElement.style.display = 'flex';
      } else {
        projectsContainer.parentElement.style.display = 'none';
      }
    }

    // 7. Sosyal Ağ İkon Butonları (Alt Panel)
    if (linksList && siteConfig.social && Array.isArray(siteConfig.social)) {
      linksList.innerHTML = '';
      siteConfig.social.forEach(item => {
        const li = document.createElement('li');
        const iconKey = (item.icon || item.name || '').toLowerCase().trim();
        const svgContent = ICONS[iconKey] || `<span class="font-mono-val text-xs">${escapeHtml((item.name || '').slice(0, 2))}</span>`;
        
        li.innerHTML = `
          <a 
            href="${item.url || '#'}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-icon-btn" 
            aria-label="${escapeHtml(item.name || 'Sosyal Medya')} Profili" 
            title="${escapeHtml(item.name || '')}"
          >
            ${svgContent}
          </a>
        `;
        linksList.appendChild(li);
      });
    }

    // 8. İletişim Butonu (CTA), Toast Bildirimi & E-posta Göstergesi
    if (btnCtaLabel && data.ctaText) btnCtaLabel.textContent = data.ctaText;
    if (copyToast && data.copiedToast) copyToast.textContent = data.copiedToast;

    if (emailDisplay && siteConfig.profile && siteConfig.profile.email) {
      emailDisplay.textContent = siteConfig.profile.email;
      emailDisplay.href = `mailto:${siteConfig.profile.email}`;
    }

    // 9. Dil Butonları Aktiflik Durumu
    if (btnTr && btnEn) {
      if (lang === 'tr') {
        btnTr.className = "px-2.5 py-0.5 rounded-full font-semibold transition-all bg-[var(--accent)] text-[var(--accent-btn-text)]";
        btnEn.className = "px-2.5 py-0.5 rounded-full font-semibold transition-all text-[var(--text-muted)] hover:text-[var(--text-heading)]";
      } else {
        btnEn.className = "px-2.5 py-0.5 rounded-full font-semibold transition-all bg-[var(--accent)] text-[var(--accent-btn-text)]";
        btnTr.className = "px-2.5 py-0.5 rounded-full font-semibold transition-all text-[var(--text-muted)] hover:text-[var(--text-heading)]";
      }
    }
  }

  // Akıllı İletişim Tıklaması: Hem panoya kopyalar hem e-posta istemcisini açar
  function handleContactClick() {
    const data = (siteConfig.i18n && siteConfig.i18n[currentLang]) || (siteConfig.i18n && siteConfig.i18n.tr) || {};
    const email = (siteConfig.profile && siteConfig.profile.email) || '';
    const subject = encodeURIComponent(data.emailSubject || "Merhaba");

    if (!email) return;

    // Panoya kopyala
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(err => {
        console.warn('Panoya kopyalanamadı:', err);
      });
    }

    // Toast bildirimi göster
    if (copyToast) {
      copyToast.classList.add('show');
      setTimeout(() => {
        copyToast.classList.remove('show');
      }, 2500);
    }

    // E-posta istemcisini tetikle
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}`;
    }, 350);
  }

  // HTML Escape Güvenlik Yardımcısı
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      switch (m) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
      }
    });
  }

  // Global Window Fonksiyonları (HTML onclick tetikleyicileri)
  window.setLanguage = function (lang) {
    applyLanguage(lang);
  };

  window.toggleTheme = function () {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  if (btnCta) {
    btnCta.addEventListener('click', handleContactClick);
  }

  // Sayfa İlk Yükleme
  applyTheme(currentTheme);
  applyLanguage(currentLang);

})();
