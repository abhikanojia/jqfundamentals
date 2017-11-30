function Slider(data) {
  this.slideShowContainer = data.slideShowContainer;
  this.pageBody = data.pageBody;
  this.sliderItems = data.sliderItems;
  this.countItems = this.sliderItems.length;
  this.startElement = data.startElement;
  this.hideClass = data.hideClass;
  this.interval = data.interval;
  this.activeClass = data.activeClass;
}

Slider.prototype.showNext = function(currentElement) {

};

Slider.prototype.start = function() {
  var _this = this;
  setInterval(function(){

    // $(_this.sliderItems[currentElement++]).fadeOut(3000, function(){
    //   $(_this.sliderItems[currentElement]).fadeIn(3000);
    // });
  },this.interval);
};

Slider.prototype.init = function() {
  var slideShow = this.slideShowContainer.remove();
  $(this.pageBody).prepend(slideShow);
  $(this.startElement)
  .addClass(this.activeClass)
  .nextAll().addClass(this.hideClass);

  this.start();
};

var data = {
  slideShowContainer: $("ul#slideshow"),
  pageBody: $('body'),
  startElement: $("ul#slideshow > li:first"),
  sliderItems: $("ul#slideshow > li"),
  hideClass: 'inactive',
  interval: 5000,
  activeClass: 'active'
};

var slideshow = new Slider(data);
slideshow.init();
console.log(slideshow);