var batton_help= document.querySelector('.batton-help');
var popup_help= document.querySelector('.question');
var batton_help_exist=true;

var img_geo= document.querySelector('.img-geo');
var popup_map= document.querySelector('.map');
var img_geo_exist=true;

var buy= document.querySelectorAll('.buy');
var popup_buy=document.querySelector('.added-item')

var popups= document.querySelectorAll('.pop-up');

var set_popup_handlers= function(popup){
  var popup_close=popup.querySelector('.close');

  popup_close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("pop-up-visible")
  })
};

for (var i = 0; i < popups.length; i++) {
  set_popup_handlers(popups[i]);
};

try {
  batton_help.addEventListener("click", function(evt){
    popup_help.classList.add("pop-up-visible");
  });
 q}
catch (e) {
  batton_help_exist=false;
};

try {
  img_geo.addEventListener("click", function(evt){
    popup_map.classList.add("pop-up-visible");
  });
} catch (e) {
  img_geo_exist=false;
};

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function(evt){
    evt.preventDefault();
    popup_buy.classList.add("pop-up-visible");
  });
};
