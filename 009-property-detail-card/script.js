(() => {
  const favBtn = document.getElementById('favBtn');

  favBtn.addEventListener('click', () => {
    const isActive = favBtn.classList.toggle('is-active');
    favBtn.setAttribute('aria-pressed', String(isActive));
    favBtn.setAttribute('aria-label', isActive ? 'お気に入りから外す' : 'お気に入りに追加');
  });
})();
