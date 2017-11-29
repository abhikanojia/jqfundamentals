function TabNaviation(data) {
  this.divModules = data.divModules;
  this.firstDivModule = data.firstDivModule;
  this.ul = data.ul;
}

TabNaviation.prototype.getDiv = function(id) {
  return $(this.getId(id));
};

TabNaviation.prototype.getId = function(id) {
  return "#".concat(id);
};

TabNaviation.prototype.hideDivSiblings = function(id) {
  $(this.getDiv(id)).siblings().hide();
};

TabNaviation.prototype.createList = function(headings) {
  var _this = this;
  $.each(headings, function(){
    $(_this.newListItem(this.valueOf()))
      .appendTo(_this.ul)
      .bind('click', function(){
        var idString = $(this).text().toLowerCase();
        $(this).toggleClass('current');
        $(this).siblings().removeClass('current');
        $(_this.getDiv(idString)).toggle();
        $(_this.getDiv(idString)).siblings('.module').hide();
      });
  });
};

TabNaviation.prototype.newListItem = function(content) {
  return '<li>' + content + '</li>';
};

TabNaviation.prototype.getHeadings = function() {
  var headings = [];
  this.divModules.each(function(){
    headings.push($(this).find('h2').text());
  });
  return headings;
};

TabNaviation.prototype.init = function() {
  this.divModules.hide();
  this.ul = $(this.ul).insertBefore(this.firstDivModule);
  this.createList(this.getHeadings());
};


$(document).ready(function(){
  var data = {
    divModules: $('div.module'),
    firstDivModule: $('div.module:first'),
    ul: '<ul></ul>'
  };
  var tabs = new TabNaviation(data);
  tabs.init();
});