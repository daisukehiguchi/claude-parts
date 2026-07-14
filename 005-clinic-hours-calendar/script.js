(() => {
  const monthLabel = document.getElementById('monthLabel');
  const grid = document.getElementById('calendarGrid');
  const prevBtn = document.getElementById('prevMonth');
  const nextBtn = document.getElementById('nextMonth');
  const detailDate = document.getElementById('detailDate');
  const detailHours = document.getElementById('detailHours');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let viewYear = today.getFullYear();
  let viewMonth = today.getMonth(); // 0-indexed

  // デモ用の臨時休診日（今日からの相対日数で設定。実運用時は実データに置き換えてください）
  const irregularOverrides = new Map();
  const addOverride = (offsetDays, label) => {
    const d = new Date(today);
    d.setDate(d.getDate() + offsetDays);
    irregularOverrides.set(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`, label);
  };
  addOverride(5, '臨時休診（学会出席のため）');
  addOverride(18, '臨時休診（院内研修のため）');

  const weekdayLabel = ['日', '月', '火', '水', '木', '金', '土'];

  function getStatus(date) {
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    if (irregularOverrides.has(key)) {
      return { type: 'irregular', label: irregularOverrides.get(key) };
    }
    const dow = date.getDay();
    if (dow === 0) {
      return { type: 'closed', label: '休診日' };
    }
    if (dow === 4) {
      return { type: 'am', label: '午前診療のみ（9:00-12:30）' };
    }
    if (dow === 6) {
      return { type: 'open', label: '診療（9:00-13:00）' };
    }
    return { type: 'open', label: '診療（9:00-12:30 / 14:30-18:00）' };
  }

  function updateDetail(date, status) {
    const dateText = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${weekdayLabel[date.getDay()]}）`;
    detailDate.textContent = dateText;
    detailHours.textContent = status.label;
    detailHours.classList.toggle('is-closed-text', status.type === 'closed' || status.type === 'irregular');
  }

  function buildCalendar(year, month) {
    monthLabel.textContent = `${year}年${month + 1}月`;
    grid.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const startWeekday = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((startWeekday + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i += 1) {
      const dayNum = i - startWeekday + 1;

      if (dayNum < 1 || dayNum > daysInMonth) {
        const empty = document.createElement('div');
        empty.className = 'cc-day is-empty';
        grid.appendChild(empty);
        continue;
      }

      const date = new Date(year, month, dayNum);
      const status = getStatus(date);
      const isToday =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = `cc-day cc-day--${status.type}`;
      if (isToday) cell.classList.add('is-today');
      cell.setAttribute('role', 'gridcell');
      cell.setAttribute(
        'aria-label',
        `${month + 1}月${dayNum}日 ${status.label}`
      );

      const numSpan = document.createElement('span');
      numSpan.textContent = String(dayNum);
      cell.appendChild(numSpan);

      const badge = document.createElement('span');
      badge.className = 'cc-day__badge';
      badge.textContent =
        status.type === 'open' ? '診療' :
        status.type === 'am' ? '午前' :
        status.type === 'irregular' ? '休' : '休診';
      cell.appendChild(badge);

      cell.addEventListener('click', () => {
        grid.querySelectorAll('.cc-day.is-selected').forEach((el) => {
          el.classList.remove('is-selected');
        });
        cell.classList.add('is-selected');
        updateDetail(date, status);
      });

      grid.appendChild(cell);

      if (isToday) {
        updateDetail(date, status);
        cell.classList.add('is-selected');
      }
    }
  }

  prevBtn.addEventListener('click', () => {
    viewMonth -= 1;
    if (viewMonth < 0) {
      viewMonth = 11;
      viewYear -= 1;
    }
    buildCalendar(viewYear, viewMonth);
  });

  nextBtn.addEventListener('click', () => {
    viewMonth += 1;
    if (viewMonth > 11) {
      viewMonth = 0;
      viewYear += 1;
    }
    buildCalendar(viewYear, viewMonth);
  });

  buildCalendar(viewYear, viewMonth);
})();
