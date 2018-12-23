var batton_help= document.querySelector('.batton-help');
var module_help= document.querySelector('.question');
var img_geo= document.querySelector('.img-geo');
var module_map= document.querySelector('.map');
var module_= document.querySelector('.pop-up');
var module_close= document.querySelectorAll('.close');

batton_help.addEventListener("click", function(evt) {
  evt.preventDefault();
  module_help.classList.add("pop-up-visible");
});

img_geo.addEventListener("click", function(evt){
  module_map.classList.add("pop-up-visible");
});

module_close.addEventListener("click", function(evt){
  evt.preventDefault();
  module_.classList.remove("pop-up-visible");
});
