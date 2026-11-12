// Sente Safe: two small extras. The pages work without JavaScript.

// Home page: show a random scam tip, and a new one on click
var tipText = document.getElementById('tip-text');
var tipBtn = document.getElementById('tip-btn');
var tips = [
  'A real prize never asks you to pay first.',
  'Nobody from your provider needs your PIN. Not ever.',
  'Rushed to pay? That is the scammer talking.',
  'Call the organisation on the number from its official website, not the one in the message.',
  'A job that charges you to be hired is not a job.',
  'Offer to deduct the fee from the prize. Scammers hang up.'
];

function showTip() {
  tipText.textContent = tips[Math.floor(Math.random() * tips.length)];
}

if (tipText && tipBtn) {
  showTip();
  tipBtn.addEventListener('click', showTip);
}

// Check-before-you-pay: count the ticked red flags and update the verdict
var flags = document.querySelectorAll('.flag');
var verdict = document.getElementById('verdict');

function updateVerdict() {
  var n = document.querySelectorAll('.flag:checked').length;
  var msg = 'Nothing ticked yet. Even so, confirm the offer through an official channel before you pay.';
  var cls = 'v0';
  if (n >= 3) {
    msg = n + ' red flags. This is very likely a scam. Do not pay.';
    cls = 'v2';
  } else if (n > 0) {
    msg = n + ' red flag' + (n > 1 ? 's' : '') + '. Be careful. Do not pay until you have checked it independently.';
    cls = 'v1';
  }
  verdict.textContent = msg;
  verdict.className = 'verdict ' + cls;
}

if (flags.length && verdict) {
  flags.forEach(function (box) {
    box.addEventListener('change', updateVerdict);
  });
  document.querySelector('.checkform').addEventListener('reset', function () {
    setTimeout(updateVerdict, 0);
  });
}
