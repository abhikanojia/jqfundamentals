function Navigation(data) {
  this.navigationElement = data.navigationElement;
  this.listItems = data.listItems;
  this.hoverClass = data.hoverClass;
  this.subListType = data.subListType;
}

Navigation.prototype.init = function() {
  var _this = this;
  this.listItems.each(function(){
    $(this).hover(function(){
      $(this).toggleClass(_this.hoverClass);
      $(this).find(_this.subListType).toggle();
    });
  });
};

var data = {
  navigationElement: $("ul#nav"),
  listItems: $("ul#nav li"),
  hoverClass: 'hover',
  subListType: 'ul'
};

var navigation = new Navigation(data);
navigation.init();
