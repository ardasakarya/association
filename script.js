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