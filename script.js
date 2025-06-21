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
    // once: true, 
  });