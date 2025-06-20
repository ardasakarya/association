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
    { name: "Logo 1", url: "#", img: "https://via.placeholder.com/100x40?text=L1" },
    { name: "Logo 2", url: "#", img: "https://via.placeholder.com/100x40?text=L2" },
    { name: "Logo 3", url: "#", img: "https://via.placeholder.com/100x40?text=L3" },
    { name: "Logo 4", url: "#", img: "https://via.placeholder.com/100x40?text=L4" },
    { name: "Logo 5", url: "#", img: "https://via.placeholder.com/100x40?text=L5" }
  ];

  const wrapper = document.getElementById('sponsor-list');
  const template = document.getElementById('sponsor-template');

  function createSponsor(sponsor) {
    const clone = template.content.cloneNode(true);
    const a = clone.querySelector("a");
    a.href = sponsor.url;
    const img = a.querySelector("img");
    img.src = sponsor.img;
    img.alt = sponsor.name;
    a.querySelector("span").textContent = sponsor.name;
    return clone;
  }

  for (let i = 0; i < 100; i++) {
    sponsors.forEach(sponsor => {
      wrapper.appendChild(createSponsor(sponsor));
    });
  }

  const marquee = document.getElementById("sponsor-marquee");
  marquee.addEventListener("mouseenter", () => {
    marquee.classList.remove("animate-marquee-loop");
  });
  marquee.addEventListener("mouseleave", () => {
    marquee.classList.add("animate-marquee-loop");
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