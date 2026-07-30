(function () {
  document.querySelectorAll('.tool-filters[data-grid]').forEach(function (container) {
    var grid = document.getElementById(container.dataset.grid);
    if (!grid) return;
    var btns  = container.querySelectorAll('.tool-filter');
    var cards = grid.querySelectorAll('.ticket');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.dataset.filter;
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        this.classList.add('is-active');
        cards.forEach(function (card) {
          var cats = (card.dataset.categories || '').split(' ');
          var hide = filter !== 'all' && !cats.includes(filter);
          card.closest('.ticket-wrap').hidden = hide;
        });
      });
    });
  });
}());
