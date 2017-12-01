function Slider(options) {
  this.loop = options.loop;
  this.delay = options.delay;
  this.speed = options.speed;
  this.sliderItems = options.sliderItems;
  this.mainContainer = options.mainContainer;
  this.sliderLength = this.sliderItems.length;
  this.sliderContainer = options.sliderContainer;
}

Slider.prototype.getNext = function(current) {
  if( (current + 1) == this.sliderLength) {
    return 0;
  } else {
    return current + 1;
  }
};

Slider.prototype.updateStatus = function(value) {
  $('.count').text(value + 1);
};

Slider.prototype.changeImage = function(current) {
  var _this = this;
  var nextElement = this.getNext(current);
  setTimeout(function(){
    $(_this.sliderItems[current]).fadeOut(_this.speed,function(){
      _this.updateStatus(current);
      $(_this.sliderItems[nextElement]).fadeIn(_this.speed / 2);
    });
    current = nextElement;
    _this.changeImage(current);
  }, this.delay);
};

Slider.prototype.appendTotalCount = function() {
  var text = $('.sliderstatus > .total').text();
  $('.sliderstatus > .total').text(text + this.sliderLength);
};

Slider.prototype.appendStatus = function() {
  $('<div/>', {
    class: 'sliderstatus',
    text: 'Showing: '
  }).insertAfter(this.sliderContainer);

  $('<span/>', {
    class: 'count'
  }).appendTo('.sliderstatus');

  $('<span/>',{
    class: 'total',
    text: ' Out of '
  }).appendTo('.sliderstatus');
};

Slider.prototype.init = function() {
  var current = 0;
  $(this.sliderContainer).prependTo(this.mainContainer);
  $(this.sliderItems[current]).nextAll().hide();
  this.changeImage(current);
  this.appendStatus();
  this.appendTotalCount();
  this.updateStatus(current);
};

var options = {
  delay: 5000,
  speed: 3000,
  mainContainer: $("#main"),
  sliderContainer: $("[data-slider=slideshow]"),
  sliderItems: $("[data-slider=slideshow] > li")
}

var slider = new Slider(options);
slider.init();
console.log(slider);