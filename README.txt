ÇELİK OPTİK WEB SİTESİ - KURULUM NOTU

1) Dosya yapısı
- index.html: Ana site
- assets/css/style.css: Tasarım dosyası
- assets/js/app.js: Slider dışı animasyonlar, sayaç, WhatsApp linki ve dönüşüm event hazırlığı
- assets/img/: Görseller
- robots.txt ve sitemap.xml: SEO teknik dosyaları
- seo-geo-google-ads-plani.md: SEO/GEO/Google Ads çalışma planı

2) Mutlaka değiştirilecek alanlar
- WhatsApp numarası: index.html içinde 905000000000 yazan tüm alanları gerçek WhatsApp numarasıyla değiştirin.
- assets/js/app.js içinde CONFIG.whatsappPlain değerini gerçek WhatsApp numarasıyla değiştirin.
- Domain: celikoptikmersin.com alanını gerçek domainle değiştirin.
- Çalışma saatleri: Saatler kesin değilse yayına almadan önce doğrulayın.
- Slider görselleri: assets/img/dukkan-1.svg, dukkan-2.svg, dukkan-3.svg yerine kendi dükkan fotoğraflarınızı koyun. En iyi performans için 1600x900, webp/jpg, sıkıştırılmış yükleyin.
- Çalışanlarımız: Gerçek fotoğraf, isim ve görev bilgilerini ekleyin.

3) Google Ads dönüşüm takibi
- index.html içinde Google Ads / GA4 etiket yorum alanı var.
- AW-XXXXXXXXXX ve G-XXXXXXXXXX değerlerini gerçek hesap bilgileriyle değiştirip yorum satırından çıkarın.
- app.js içinde phone/whatsapp/map tıklamaları için data-track eventleri hazırlandı.

4) Yayınlama
- Tüm klasörü hosting public_html içine yükleyin.
- HTTPS aktif edin.
- Google Search Console'a domaini ekleyip sitemap.xml gönderin.
- Google Ads reklamlarını bu sayfaya yönlendirin.
