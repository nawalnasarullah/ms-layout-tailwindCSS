document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hideToggle');
    mobileMenu.classList.toggle('showToggle');
});

document.getElementById('dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('hideToggle');
    dropdownMenu.classList.toggle('show');
});

document.getElementById('mobile-dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault(); 
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
    mobileDropdownMenu.classList.toggle('hideToggle');
    mobileDropdownMenu.classList.toggle('show');
});