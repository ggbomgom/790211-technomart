var batton_help= document.querySelector('.batton-help');
var popus_help= document.querySelector('.question');
var img_geo= document.querySelector('.img-geo');
var popus_map= document.querySelector('.map');

var popus= document.querySelectorAll('.pop-up');
var popus_close= [];

for (var i = 0; i < popus.length; i++) {
    popus_close[i]=popus[i].querySelector('.close');

    popus_close[i].addEventListener("click", function(evt){
      evt.preventDefault();
      popus[i].classList.remove("pop-up-visible");
    });
};

batton_help.addEventListener("click", function(evt) {
  evt.preventDefault();
  popus_help.classList.add("pop-up-visible");
});

img_geo.addEventListener("click", function(evt){
  popus_map.classList.add("pop-up-visible");
});
