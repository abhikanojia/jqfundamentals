function LoadContent(data) {
  this.headings = data.headings;
  this.filePath = data.filePath;
  this.attribute = data.attribute;
}


LoadContent.prototype.getTarget = function(element) {
  var href = $(element).find('a').attr('href');
  return href.substr(href.indexOf('#'));
};

LoadContent.prototype.addReference = function() {
  var _this = this;
  this.headings.each(function(){
    $('<div/>').insertAfter(this).attr(_this.attribute, _this.getTarget(this));
  });
};

LoadContent.prototype.loadData = function(element) {
  var container = $(element).next('div[data-target]');
  $(container).load(this.filePath + " " + $(container).data('target'));
};

LoadContent.prototype.init = function() {
  var _this = this;
  this.addReference();
  this.headings.bind('click', function(event){
    event.preventDefault();
    _this.loadData(this);
  })
};


var data = {
  filePath: 'data/blog.html',
  headings: $('#blog').find('h3'),
  attribute: 'data-target'
};

var loadContent = new LoadContent(data);
loadContent.init();
