(() => {
  const BASE_COUNT = 128;

  const quickGroups = Array.from(document.querySelectorAll('.sf-quick'));
  const tagButtons = Array.from(document.querySelectorAll('.sf-tag'));
  const selectedWrap = document.getElementById('selectedWrap');
  const selectedList = document.getElementById('selectedList');
  const resultCount = document.getElementById('resultCount');

  // クイック選択（グループごとに単一選択）
  quickGroups.forEach((group) => {
    const buttons = Array.from(group.querySelectorAll('.sf-quick__btn'));
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        update();
      });
    });
  });

  // 条件タグ（複数選択）
  tagButtons.forEach((tag) => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('is-selected');
      update();
    });
  });

  function getActiveQuick(group) {
    return group.querySelector('.sf-quick__btn.is-active');
  }

  function renderSelectedChips() {
    selectedList.innerHTML = '';
    const chips = [];

    quickGroups.forEach((group) => {
      const active = getActiveQuick(group);
      if (active && active.dataset.value !== 'all') {
        chips.push({ label: active.textContent, source: 'quick', group, btn: active });
      }
    });

    tagButtons.forEach((tag) => {
      if (tag.classList.contains('is-selected')) {
        chips.push({ label: tag.textContent.trim(), source: 'tag', btn: tag });
      }
    });

    selectedWrap.hidden = chips.length === 0;

    chips.forEach((chip) => {
      const el = document.createElement('span');
      el.className = 'sf-chip';

      const label = document.createElement('span');
      label.textContent = chip.label;
      el.appendChild(label);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'sf-chip__remove';
      removeBtn.setAttribute('aria-label', `${chip.label}を解除`);
      removeBtn.textContent = '×';
      removeBtn.addEventListener('click', () => {
        if (chip.source === 'quick') {
          chip.group.querySelector('[data-value="all"]').classList.add('is-active');
          chip.btn.classList.remove('is-active');
        } else {
          chip.btn.classList.remove('is-selected');
        }
        update();
      });
      el.appendChild(removeBtn);

      selectedList.appendChild(el);
    });
  }

  function update() {
    let factor = 1;

    quickGroups.forEach((group) => {
      const active = getActiveQuick(group);
      if (active) {
        factor *= Number(active.dataset.factor || 1);
      }
    });

    tagButtons.forEach((tag) => {
      if (tag.classList.contains('is-selected')) {
        factor *= Number(tag.dataset.factor || 1);
      }
    });

    const count = Math.max(1, Math.round(BASE_COUNT * factor));
    resultCount.textContent = `${count}件が該当`;

    renderSelectedChips();
  }

  update();
})();
