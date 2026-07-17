(() => {
  const card = document.querySelector('.ic-card');
  const statusLabel = document.getElementById('statusLabel');
  const statusSub = document.getElementById('statusSub');
  const waitCount = document.getElementById('waitCount');
  const waitTime = document.getElementById('waitTime');
  const updatedAt = document.getElementById('updatedAt');
  const segs = [
    document.getElementById('seg1'),
    document.getElementById('seg2'),
    document.getElementById('seg3'),
  ];
  const demoButtons = Array.from(document.querySelectorAll('.ic-demo__btn'));

  const statusData = {
    empty: {
      cardClass: null,
      label: '空いてます',
      sub: '今なら待ち時間はほとんどありません',
      level: 1,
      waitCount: '2人',
      waitTime: '〜10分',
    },
    busy: {
      cardClass: 'is-busy',
      label: 'やや混雑',
      sub: '少しお待ちいただく場合があります',
      level: 2,
      waitCount: '6人',
      waitTime: '20〜30分',
    },
    full: {
      cardClass: 'is-full',
      label: '混雑中',
      sub: '只今大変混み合っております',
      level: 3,
      waitCount: '12人',
      waitTime: '45分以上',
    },
  };

  function applyStatus(key) {
    const data = statusData[key];
    if (!data) return;

    card.classList.remove('is-busy', 'is-full');
    if (data.cardClass) {
      card.classList.add(data.cardClass);
    }

    statusLabel.textContent = data.label;
    statusSub.textContent = data.sub;
    waitCount.textContent = data.waitCount;
    waitTime.textContent = data.waitTime;
    updatedAt.textContent = '最終更新：たった今';

    segs.forEach((seg, i) => {
      seg.classList.toggle('is-on', i < data.level);
    });

    demoButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.status === key);
    });
  }

  demoButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyStatus(btn.dataset.status));
  });

  applyStatus('empty');
})();
