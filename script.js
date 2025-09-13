// "Why Clove" interactive list — single/collapsible items with image swap
(() => {
  const list = document.getElementById('whyList');
  const img = document.getElementById('whyImage');
  if (!list || !img) return;

  const items = Array.from(list.querySelectorAll('.why-item'));
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


// swap content of footer in mobile view
(() => {
  const el = document.getElementById('footerCopy');
  if (!el) return;

  const mobileText =
    '© Copyright 2021 All Rights Reserved. Innovative Oral Care Solutions Pvt. Ltd. Managed By Unbundl';
  const desktopText =
    'All Rights Reserved – 2024, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited). Managed By Unbundl';

  const mq = window.matchMedia('(max-width: 440px)');

  const setCopy = e => { el.textContent = e.matches ? mobileText : desktopText; };
  setCopy(mq);                         
  mq.addEventListener('change', setCopy); 
})();


