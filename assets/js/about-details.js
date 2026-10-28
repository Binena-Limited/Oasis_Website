document.addEventListener('DOMContentLoaded', function () {
  var more = document.getElementById('oasis-about-more');
  var label = document.getElementById('oasis-about-toggle-label');
  if (!more || !label) return;
  more.addEventListener('shown.bs.collapse', function () { label.textContent = 'Read Less'; });
  more.addEventListener('hidden.bs.collapse', function () { label.textContent = 'Read More'; });
});
