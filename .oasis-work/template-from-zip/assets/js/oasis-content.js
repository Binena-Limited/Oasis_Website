(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[data-oasis-unconfigured]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var status = form.querySelector('[role="status"]');
        if (!status) { status = document.createElement('p'); status.setAttribute('role', 'status'); form.appendChild(status); }
        status.textContent = 'This form is not connected. Please email oasisagroagent@gmail.com or call 0393 238073. Nothing has been sent.';
      });
    });
  });
}());
