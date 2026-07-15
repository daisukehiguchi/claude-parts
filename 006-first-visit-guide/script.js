(() => {
  const stepsList = document.getElementById('stepsList');
  const steps = Array.from(stepsList.querySelectorAll('.fc-step'));
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.getElementById('progressFill');
  const remainText = document.getElementById('remainText');
  const totalTimeEl = document.getElementById('totalTime');
  const resetBtn = document.getElementById('resetBtn');

  const totalMinutes = steps.reduce((sum, step) => sum + Number(step.dataset.minutes || 0), 0);
  totalTimeEl.textContent = `${totalMinutes}分`;

  function update() {
    const doneMinutes = steps
      .filter((step) => step.classList.contains('is-done'))
      .reduce((sum, step) => sum + Number(step.dataset.minutes || 0), 0);

    const percent = totalMinutes === 0 ? 0 : Math.round((doneMinutes / totalMinutes) * 100);
    progressFill.style.width = `${percent}%`;
    progressBar.setAttribute('aria-valuenow', String(percent));

    const remaining = totalMinutes - doneMinutes;
    const allDone = steps.every((step) => step.classList.contains('is-done'));

    if (allDone) {
      remainText.textContent = 'お疲れさまでした。本日の受診はこれで完了です。';
    } else if (doneMinutes === 0) {
      remainText.textContent = 'チェックを入れると、残り時間の目安が更新されます';
    } else {
      remainText.textContent = `残りの目安時間：約${remaining}分`;
    }
  }

  steps.forEach((step) => {
    const markBtn = step.querySelector('.fc-step__mark');
    markBtn.addEventListener('click', () => {
      step.classList.toggle('is-done');
      update();
    });
  });

  resetBtn.addEventListener('click', () => {
    steps.forEach((step) => step.classList.remove('is-done'));
    update();
  });

  update();
})();
