/* DOM'un (yani sayfanın HTML yapısının) tamamen yüklendiğinden 
   emin olmak için tüm kodumuzu bu 'DOMContentLoaded' olayı 
   içine yazıyoruz.
*/
document.addEventListener("DOMContentLoaded", () => {

    // Konsola test mesajı (Tarayıcıda F12 -> Console'da görebilirsiniz)
    console.log("VİLLARCH JavaScript Yüklendi ve Hazır!");

    // --- YENİ: SWIPER SLIDER BAŞLATMA KODU ---
    // Sadece .hero-slider sınıfına sahip bir eleman varsa çalıştır
    // (Bu kod sadece ana sayfada çalışır, hata vermez)
    if (document.querySelector(".hero-slider")) {
        
        const swiper = new Swiper('.hero-slider', {
            // Yönlendirme (Navigasyon) Okları
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Sonsuz döngü
            loop: true,
            
            // Kaybolma (Fade) efekti (Resimlerin üst üste gelmesi)
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            
            // Otomatik oynatma (5 saniyede bir değişme)
            autoplay: {
                delay: 5000, // 5000ms = 5 saniye
                disableOnInteraction: false, // Kullanıcı dokunsa bile durmasın
            },
        });
    }

    // --- 1. HEADER SCROLL EFEKTİ KODU ---
    
    // Önce header elemanını seçiyoruz
    const header = document.querySelector("header");

    // Header elemanının var olduğundan emin olalım
    if (header) {
        // Sayfanın scroll (kaydırma) olayını dinle
        window.addEventListener("scroll", () => {
            
            // Eğer sayfada 50 pikselden fazla aşağı kaydırılmışsa
            if (window.scrollY > 50) {
                // Header'a 'scrolled' sınıfını ekle
                header.classList.add("scrolled");
            } 
            // Değilse (sayfanın en üstündeyse)
            else {
                // Header'dan 'scrolled' sınıfını kaldır
                header.classList.remove("scrolled");
            }
        });
    }

    
    // --- 3. MOBİL MENÜ TOGGLE KODU ---
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("header nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Menüye 'mobil-menu-acik' sınıfını ekle/kaldır
            navMenu.classList.toggle("mobil-menu-acik");
            // Butona 'acik' sınıfını ekle/kaldır (X animasyonu için)
            menuToggle.classList.toggle("acik");
        });
    }

    
    // --- 2. PROJE FİLTRELEME KODU ---
    
    // Gerekli HTML elemanlarını seçiyoruz
    const filtreButonAlani = document.querySelector(".filtre-butonlari");
    const projeKartlari = document.querySelectorAll(".proje-karti");

    // Filtreleme alanının (butonların) bu sayfada var olup olmadığını
    // kontrol ediyoruz. (Bu kod sadece projeler.html'de çalışsın diye)
    if (filtreButonAlani) {

        // Butonların olduğu alana bir tıklama dinleyicisi ekle
        filtreButonAlani.addEventListener("click", (e) => {
            
            // Tıkladığımız şeyin bir 'BUTTON' etiketi olduğundan emin olalım
            if (e.target.tagName === "BUTTON") {
                
                // Tıklanan butonun 'data-filtre' değerini al (örn: "modern")
                const filtre = e.target.getAttribute("data-filtre");

                // Tüm proje kartları arasında tek tek dön
                projeKartlari.forEach((kart) => {
                    
                    // Her bir kartın 'data-kategori' değerini al (örn: "klasik")
                    const kategori = kart.getAttribute("data-kategori");

                    // Filtreleme Mantığı:
                    // Eğer tıklanan filtre "hepsi" ise VEYA kartın kategorisi filtre ile aynı ise
                    if (filtre === "hepsi" || filtre === kategori) {
                        kart.style.display = "block"; // Kartı GÖSTER
                    } 
                    // Değilse (eşleşmiyorsa)
                    else {
                        kart.style.display = "none"; // Kartı GİZLE
                    }
                });
            }
        });
    } // if (filtreButonAlani) sonu

}); // DOMContentLoaded sonu