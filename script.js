
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active-nav'));
      this.classList.add('active-nav');
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
    mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
    } else {
    mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
    }
    });
    });
    // Sticky Header
    document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    function updateHeaderClass() {
    if (window.scrollY > 50) {
    header.classList.add('shadow');
    } else {
    header.classList.remove('shadow');
    }
    }
    window.addEventListener('scroll', updateHeaderClass);
    updateHeaderClass();
    });


const sponsors = [
    { url: "#", img: "assets/sponsor_img/6103f09c1b09300004095b34.png", name: "" },
    { url: "#", img: "assets/sponsor_img/584290baa6515b1e0ad75ac2.png", name: "" },
    { url: "#", img: "assets/sponsor_img/5906045a0cbeef0acff9a639.png", name: "" },
    { url: "#", img: "assets/sponsor_img/61362684f5966900044cbf73.png", name: "" },
    { url: "#", img: "assets/sponsor_img/golden-logo-template-free-png.webp", name: "" }
  ];

  const wrapper = document.getElementById('sponsor-list');

  // Sponsorları çoğaltarak liste oluştur (smooth loop için)
  for (let i = 0; i < 100; i++) {  // 20 kez çoğalt, ihtiyaç varsa artır
    sponsors.forEach(sponsor => {
      const a = document.createElement('a');
      a.href = sponsor.url;
      a.target = "_blank";
      a.className = "flex flex-col items-center gap-2 min-w-[160px] grayscale hover:grayscale-0 transition";

      const img = document.createElement('img');
      img.src = sponsor.img;
      img.alt = sponsor.name;
      img.className = "h-16";

      const span = document.createElement('span');
      span.className = "text-xs text-gray-500";
      span.textContent = sponsor.name;

      a.appendChild(img);
      a.appendChild(span);
      wrapper.appendChild(a);
    });
  }




  const images = [
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
   "https://readdy.ai/api/search-image?query=Professional%20workshop%20with%20interactive%20learning%2C%20participants%20engaged%20in%20hands-on%20activities%2C%20modern%20training%20room%20with%20natural%20light%2C%20collaborative%20atmosphere%2C%20high-quality%20professional%20photography&width=500&height=500&seq=6&orientation=squarish",
  ];

 const galleryGrid = document.getElementById('galleryGrid');
  const toggleBtn = document.getElementById('toggleBtn');
  let showAllMobile = false;

  function isMobile() {
    return window.innerWidth < 640; // Tailwind sm breakpoint altı mobil
  }

  function loadImages() {
    galleryGrid.innerHTML = ''; // Temizle

    let count;

    if(isMobile()) {
      // Mobilde 4 ya da tümünü göster
      count = showAllMobile ? images.length : 4;
    } else {
      // Masaüstünde hep 9 fotoğraf
      count = 9;
    }

    for(let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.className = "relative overflow-hidden rounded-xl shadow-lg aspect-square group cursor-pointer";
      div.setAttribute('data-aos', 'zoom-in');
      div.setAttribute('data-aos-delay', `${(i + 1) * 100}`);

      const img = document.createElement('img');
      img.src = images[i];
      img.alt = "Gallery Image";
      img.className = "w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110";
      img.onclick = () => openPreview(img.src);

      div.appendChild(img);
      galleryGrid.appendChild(div);
    }

    // Buton görünürlüğü kontrolü
    if(isMobile()) {
      toggleBtn.style.display = 'inline-block';
      toggleBtn.textContent = showAllMobile ? "Daha Az Göster" : "Daha Fazla Göster";
    } else {
      toggleBtn.style.display = 'none';
    }
  }

  toggleBtn.addEventListener('click', () => {
    showAllMobile = !showAllMobile;
    loadImages();
  });

  function openPreview(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // scroll kapat
  }

  function closePreview() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; // scroll aç
  }

  // Pencere boyutu değiştiğinde tekrar yükle
  window.addEventListener('resize', () => {
    // Buton ve resim sayısını güncelle
    if(!isMobile()) {
      showAllMobile = false; // Masaüstüne dönerken butonu resetle
    }
    loadImages();
  });

  // Sayfa yüklendiğinde ilk yükleme
  loadImages();













  let pos = 0; // scroll pozisyonu
  let requestId;
  const speed = 1; // kaydırma hızı (px/frame)
  const marquee = document.getElementById("sponsor-marquee");
  const totalWidth = wrapper.scrollWidth / 2; // yarısı (çünkü içerik 2 kez çoğaltıldı)

  function step() {
    pos += speed;
    if (pos >= totalWidth) pos = 0;  // loop başa dön
    wrapper.style.transform = `translateX(${-pos}px)`;
    requestId = requestAnimationFrame(step);
  }

  // Animasyon başlat
  step();

  // Mouse üzerine gelince durdur, çıkınca devam ettir
  marquee.addEventListener("mouseenter", () => {
    cancelAnimationFrame(requestId);
  });

  marquee.addEventListener("mouseleave", () => {
    requestId = requestAnimationFrame(step);
  });
    // Custom Checkbox Functionality
    document.addEventListener('DOMContentLoaded', function() {
    const customCheckboxes = document.querySelectorAll('.custom-checkbox');
    customCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
    this.classList.toggle('checked');
    const input = this.previousElementSibling;
    if (input && input.type === 'checkbox') {
    input.checked = !input.checked;
    }
    });
    });
    });
    // Custom Switch Functionality
    document.addEventListener('DOMContentLoaded', function() {
    const switches = document.querySelectorAll('.custom-switch input');
    switches.forEach(switchInput => {
    switchInput.addEventListener('change', function() {
    // Additional functionality can be added here
    });
    });
    });


     AOS.init({
    duration: 800,
    // her zaman animasyonun olmaması için 
    once: true, 
  });