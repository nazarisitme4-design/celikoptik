(function () {
  'use strict';

  const CONFIG = {
    businessName: 'Çelik Optik',
    phonePlain: '+903242311363',
    whatsappPlain: '905000000000', // WhatsApp numarasını buraya yazın. Örnek: 905320000000
    instagramUrl: 'https://www.instagram.com/celikoptikmersin/',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=%C3%87elik%20Optik%20Yeni%205328.%20Sk.%20No%3A17%2FA%20Akdeniz%20Mersin'
  };

  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Görünür alana gelince animasyon
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));

  // Sayaç animasyonu
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || '';
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach((counter) => counterObserver.observe(counter));

  // Aktif menü işaretleme
  const navLinks = document.querySelectorAll('.navbar .nav-link[href^="#"]');
  const sections = [...navLinks].map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar .nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    });
  }, { threshold: 0.28 });
  sections.forEach((section) => activeObserver.observe(section));

  // Google Ads / GA4 dönüşüm eventleri için hazır alan
  // gtag kodunu index.html içinde AW-XXXXXXXXXX yerine kendi Google Ads ID'nizle aktif edin.
  function trackConversion(action, label) {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: 'lead',
        event_label: label || action,
        business_name: CONFIG.businessName
      });

      // Örnek Google Ads dönüşümü:
      // window.gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXXX/CONVERSION_LABEL' });
    }
  }

  document.querySelectorAll('[data-track]').forEach((el) => {
    el.addEventListener('click', () => trackConversion(el.dataset.track, el.textContent.trim()));
  });

  // WhatsApp mesajını otomatik hazırla
  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    const text = encodeURIComponent('Merhaba Çelik Optik, gözlük/cam/lens hizmetleri hakkında bilgi almak istiyorum.');
    const number = el.dataset.whatsappNumber || CONFIG.whatsappPlain;
    el.setAttribute('href', `https://wa.me/${number}?text=${text}`);
  });
})();
