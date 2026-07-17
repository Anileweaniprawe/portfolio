
const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

function select(i){
  tabs.forEach((t, idx) => {
    const on = idx === i;
    t.setAttribute('aria-selected', on);
    panels[idx].classList.toggle('active', on);
    panels[idx].hidden = !on;
  });
  tabs[i].focus();
}

tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(i));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length); }
  });
});


document.querySelectorAll('.img-slot img').forEach(img => {
  const markMissing = () => img.classList.add('is-missing');
  img.addEventListener('error', markMissing);
  if (img.complete && img.naturalWidth === 0) markMissing();
});
