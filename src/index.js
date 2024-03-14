const mobileMenuIcon = document.getElementById('menu-icon');
const mobileMenuList = document.getElementById('mobile-menu-list');
const closeIcon = document.getElementById('close-icon');

function closeMobileMenu() {
  mobileMenuList.classList.add('hidden');
}

function openMobileMenu() {
  if (mobileMenuList.classList.contains('hidden')) {
    mobileMenuList.classList.remove('hidden');
  }
}

mobileMenuIcon.addEventListener('click', openMobileMenu);

closeIcon.addEventListener('click', closeMobileMenu);
