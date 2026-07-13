document.addEventListener('DOMContentLoaded', () => {

  // ---------- スクロールで点検スケジュールを表示（済スタンプが順番に押される） ----------

  const schedule = document.querySelector('.wc-schedule');

  if (schedule && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          schedule.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    observer.observe(schedule);
  } else if (schedule) {
    // IntersectionObserver 非対応環境ではそのまま表示
    schedule.classList.add('is-revealed');
  }

  // ---------- 点検ノードのクリックで 済/予定 を切り替え ----------

  const checkButtons = document.querySelectorAll('.wc-check__node');

  checkButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.wc-check');
      if (!item) return;

      const isDone = item.dataset.status === 'done';
      const nextStatus = isDone ? 'upcoming' : 'done';

      item.dataset.status = nextStatus;
      button.setAttribute('aria-pressed', String(nextStatus === 'done'));

      // まだスケジュール全体が未表示（is-revealed前）の場合も、押した瞬間は見せる
      schedule.classList.add('is-revealed');
    });
  });

});
