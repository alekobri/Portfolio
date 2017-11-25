$('body').scrollspy({target: ".navbar", offset: 80})

var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].removeEventListener('click', __linkClick);
  links[i].addEventListener('click', function(e) {
    e.preventDefault();
  });
}