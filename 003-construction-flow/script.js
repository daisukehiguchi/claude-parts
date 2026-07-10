(function(){
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var railFill = document.getElementById('railFill');
  var flow = document.getElementById('flow');

  function updateFill(){
    var lastInView = -1;
    steps.forEach(function(s, i){
      if(s.classList.contains('in-view')) lastInView = i;
    });
    if(lastInView === -1){ railFill.style.height = '0%'; return; }
    var target = steps[lastInView];
    var flowRect = flow.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var nodeCenterY = targetRect.top - flowRect.top + 22; // approx node vertical center
    var totalHeight = flow.scrollHeight;
    var pct = Math.min(100, (nodeCenterY / totalHeight) * 100);
    railFill.style.height = pct + '%';
  }

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
        }
      });
      updateFill();
    }, { threshold: 0.35, rootMargin: '0px 0px -10% 0px' });

    steps.forEach(function(s){ io.observe(s); });
  } else {
    steps.forEach(function(s){ s.classList.add('in-view'); });
    updateFill();
  }
})();
