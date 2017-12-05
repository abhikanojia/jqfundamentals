function SpecialOffer(data) {
  this.cache = {};
  this.jsonFile = data.jsonFile;
  this.formContainer = data.formContainer;
  this.offerContainerSelector = data.offerContainerSelector;
  this.submitBtn = this.formContainer.find('input:submit');
  this.selectElement = this.formContainer.find('select[name=day]');
}

SpecialOffer.prototype.cacheDataFromJson = function() {
  var _this = this;
  $.getJSON(this.jsonFile, function(response){
    _this.cache = response;
  });
};

SpecialOffer.prototype.showOffer = function(key, $offercontainer) {
  var image = this.cache[key].image.substr(1, this.cache[key].image.length);
  $offercontainer.show().find('h3').text(this.cache[key].title);
  $offercontainer.find('p').text(this.cache[key].text);
  $offercontainer.find('img').attr('src', image);
  $offercontainer.find('p').css({color: this.cache[key].color});
};

SpecialOffer.prototype.getData = function(key) {
  var $offercontainer = $(this.offerContainerSelector);
  if(key) {
    this.showOffer(key, $offercontainer);
  } else {
    $offercontainer.hide();
  }
};

SpecialOffer.prototype.hideButton = function() {
  this.submitBtn.parent('li').hide();
};

SpecialOffer.prototype.createElement = function(type) {
  return $(type);
};

SpecialOffer.prototype.appendOfferContainer = function() {
  $('<div/>', {
    class: 'special'
  }).insertAfter(this.formContainer)
  .append(this.createElement('<h3/>'))
  .append(this.createElement('<p/>'))
  .append(this.createElement('<img/>'));
};

SpecialOffer.prototype.init = function() {
  var _this = this;
  this.hideButton();
  this.cacheDataFromJson();
  this.appendOfferContainer();
  this.selectElement.bind('change', function(){
    _this.getData(this.value);
  });
};

$(document).ready(function(){
  var JSON_FILE = 'data/specials.json';

  var data = {
    jsonFile: JSON_FILE,
    formContainer: $("#specials"),
    offerContainerSelector: '.special'
  };

  var specials = new SpecialOffer(data);
  specials.init();
});