const mobileMenuIcon = document.getElementById('menu-icon');
const mobileMenuList = document.getElementById('mobile-menu-list');
const closeIcon = document.getElementById('close-icon');
const upIcons = document.getElementsByClassName('up-icons');

for (let i = 0; i < upIcons.length; i++) {
  upIcons[i].addEventListener('click', (e) => {
    const questionBox = e.target.closest('.question-box');
    const answer = questionBox.querySelector('.answer');
    if (answer) {
      answer.classList.toggle('hidden');
      e.target.classList.toggle('fa-chevron-up');
      e.target.classList.toggle('fa-chevron-down');
    }
  });
}

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
