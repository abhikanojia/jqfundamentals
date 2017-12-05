function TabNaviation(data) {
  this.className = data.className;
  this.divModules = data.divModules;
  this.firstDivModule = this.divModules.first();
}

TabNaviation.prototype.createList = function() {
  var _this = this;
  this.divModules.each(function(){
    var currentDiv = $(this);
    var heading = currentDiv.find('h2').text().toLowerCase();
    $(_this.newListItem(heading)).appendTo(_this.ul)
      .on('click', function(){
        $(this).toggleClass(_this.className)
          .siblings()
          .removeClass(_this.className);
        currentDiv.toggle()
          .siblings('.module')
          .hide();
      });
  });
};

TabNaviation.prototype.newListItem = function(content) {
  return $("<li/>",{
    text: content
  });
};

TabNaviation.prototype.init = function() {
  this.divModules.hide();
  this.ul = $('<ul/>').insertBefore(this.firstDivModule);
  this.createList();
};


$(document).ready(function(){
  var data = {
    className: 'current',
    divModules: $('div.module')
  };
  var tabs = new TabNaviation(data);
  tabs.init();
});