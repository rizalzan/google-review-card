// Interaksi sederhana: menu mobile dan pilihan paket.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
// Saat paket dipilih, sorot kartu paket tersebut.
document.querySelectorAll('.price-card').forEach(card => {
  card.querySelector('.checkout-link')?.addEventListener('click', () => {
    document.querySelectorAll('.price-card').forEach(item => item.classList.remove('selected'));
    card.classList.add('selected');
  });
});
