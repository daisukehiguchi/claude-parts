// ClaudeParts.001 施工実績カード
// 1) スクロールで各カードをふわっと表示
// 2) 検収印スタンプをクリック/タップすると押印アニメーション

document.addEventListener('DOMContentLoaded', () => {

  // --- カードの出現アニメーション ---
  const cards = document.querySelectorAll('.jc-card');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // カードごとに少しだけタイミングをずらす
          setTimeout(() => entry.target.classList.add('is-visible'), i * 90);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => io.observe(card));
  } else {
    // 非対応ブラウザ向けフォールバック
    cards.forEach((card) => card.classList.add('is-visible'));
  }

  // --- 検収印の押印インタラクション ---
  const stamps = document.querySelectorAll('.jc-card__stamp');

  stamps.forEach((stamp) => {
    const press = () => {
      stamp.classList.remove('is-stamping');
      // reflowを挟んでアニメーションを再トリガー
      void stamp.offsetWidth;
      stamp.classList.add('is-stamping');
    };

    stamp.addEventListener('click', press);
    stamp.addEventListener('mouseenter', press);
  });

});
