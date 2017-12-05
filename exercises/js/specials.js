function Specials(data) {
  this.cache = data.cache;
  this.status = data.status;
  this.jsonFile = data.jsonFile;
  this.statusFields = data.statusFields;
  this.formContainer = data.formContainer;
  this.submitBtn = this.formContainer.find('input:submit');
  this.selectElement = this.formContainer.find('select[name=day]');
}

Specials.prototype.getDataFromJson = function() {
  var _this = this;
  $.getJSON(this.jsonFile, function(response){
    _this.cache = response;
  });
};


Specials.prototype.getData = function(key) {
  var $status = $(this.status);
  if(key) {
    $status.show();
    var image = this.cache[key].image.substr(1, this.cache[key].image.length);
    $status.find(this.statusFields.title).text(this.cache[key].title);
    $status.find(this.statusFields.text).text(this.cache[key].text);
    $status.find(this.statusFields.image).attr('src', image);
    $status.find(this.statusFields.title).css({color: this.cache[key].color});
  } else {
    $status.hide();
  }
};

Specials.prototype.hideButton = function() {
  this.submitBtn.parent('li').hide();
};


Specials.prototype.init = function() {
  var _this = this;
  this.hideButton();
  this.getDataFromJson();
  this.selectElement.bind('change', function(){
    _this.getData(this.value);
  });
};

$(document).ready(function(){
  var statusFields = {
    text: '.text',
    title: '.title',
    image: '.image'
  };

  var data = {
    cache: {},
    jsonFile: 'data/specials.json',
    formContainer: $("#specials"),
    status: $('.specialsdata'),
    statusFields: statusFields
  };

  var specials = new Specials(data);
  specials.init();
});