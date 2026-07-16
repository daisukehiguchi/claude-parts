(() => {
  const tabs = Array.from(document.querySelectorAll('.pc-tab'));
  const panels = Array.from(document.querySelectorAll('.pc-staff__content'));

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      tabs.forEach((t) => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach((panel) => {
        const isTarget = panel.id === targetId;
        panel.classList.toggle('is-active', isTarget);
        panel.hidden = !isTarget;
      });
    });
  });
})();
