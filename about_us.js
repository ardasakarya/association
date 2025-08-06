  
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

  
  
  
  document.addEventListener('DOMContentLoaded', function() {
            const counters = document.querySelectorAll('[data-count]');
            
            const animateCounter = (counter) => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            counters.forEach(counter => {
                observer.observe(counter);
            });
        });