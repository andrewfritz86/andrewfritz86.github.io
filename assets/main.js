

var toggleUnderline = function toggleUnderline() {
  var attempt = document.querySelector('.attempting');
  attempt.setAttribute('class', 'attempting underline');
}

window.setTimeout(toggleUnderline, 100);

