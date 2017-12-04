function TabNaviation(data) {
  this.className = data.className;
  this.divModules = data.divModules;
  this.firstDivModule = this.divModules.first();
}

TabNaviation.prototype.getSelector = function(id) {
  return "#".concat(id);
};


TabNaviation.prototype.createList = function() {
  var _this = this;
  $.each(this.divModules, function(){
    var heading = $(this).find('h2').text().toLowerCase();
    $(_this.newListItem(heading))
      .appendTo(_this.ul)
      .bind('click', function(){
        var idString = $(this).text().toLowerCase();
        var div = $(this).data('div');

        $(this).toggleClass(_this.className)
          .siblings()
          .removeClass(_this.className);
        $(_this.getSelector(div)).toggle()
          .siblings('.module')
          .hide();
      });
  });
};

TabNaviation.prototype.newListItem = function(content) {
  var $li = $("<li/>");
  return $li.attr('data-div', content).text(content);
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