function Specials(data) {
  this.jsonFile = data.jsonFile;
  this.selectElement = data.selectElement;
  this.formContainer = data.formContainer;
  this.cache = data.cache;
  this.submitBtn = data.submitBtn;
  this.status = data.status;
  this.statusFields = data.statusFields;
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

var statusFields = {
  text: '.text',
  title: '.title',
  image: '.image'
};

var data = {
  cache: {},
  jsonFile: 'data/specials.json',
  selectElement: $('#specials select[name=day]'),
  formContainer: $("#specials"),
  status: $('.specialsdata'),
  submitBtn: $("#specials input:submit"),
  statusFields: statusFields
};

var specials = new Specials(data);
specials.init();