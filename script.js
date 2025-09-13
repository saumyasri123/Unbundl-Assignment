(() => {
  const list   = document.getElementById('whyList');
  const img    = document.getElementById('whyImage');
  if (!list || !img) return;

  const items  = Array.from(list.querySelectorAll('.why-item'));
  const defaultSrc = img.getAttribute('data-default') || img.src;

  items.forEach(li => {
    const s = li.dataset.image;
    if (s) { const pre = new Image(); pre.src = s; }
  });

  list.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.why-toggle');
    if (!btn || btn.disabled) return;

    const li = btn.closest('.why-item');
    const willOpen = btn.getAttribute('aria-expanded') !== 'true';

    items.forEach(item => {
      const b = item.querySelector('.why-toggle');
      b.setAttribute('aria-expanded', 'false');
      item.classList.remove('open');
    });

    if (willOpen) {
      btn.setAttribute('aria-expanded', 'true');
      li.classList.add('open');

      if (li.dataset.image) {
        img.src = li.dataset.image;
      } else {
        img.src = defaultSrc;
      }
    } else {
      img.src = defaultSrc;
    }
  });
})();


// FAQ accordion — single/collapsible items with icon swap
(() => {
  const lists = document.querySelectorAll('.faq-list');
  if (!lists.length) return;

  lists.forEach(list => {
    list.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-q');
      if (!btn) return;

      const item = btn.closest('.faq-item');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all items in this column (behavior from screenshot feels single-open)
      list.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(openBtn => {
        openBtn.setAttribute('aria-expanded', 'false');
        openBtn.closest('.faq-item').classList.remove('open');
      });

      // Toggle clicked
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
      }
    });
  });
})();


