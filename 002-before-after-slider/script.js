// ClaudeParts.002 Before/After スライダー
// input[type=range] の値を --pos カスタムプロパティに反映し、
// After画像のclip-pathと境界線の位置、ラベルの濃淡を連動させる

document.addEventListener('DOMContentLoaded', () => {

  const sliders = document.querySelectorAll('.ba-slider');

  sliders.forEach((slider) => {
    const range = slider.querySelector('.ba-slider__range');
    if (!range) return;

    const update = (value) => {
      slider.style.setProperty('--pos', value);
    };

    // 初期値を反映（HTML側のvalue属性と揃える）
    update(range.value);

    range.addEventListener('input', (e) => {
      update(e.target.value);
    });
  });

});
