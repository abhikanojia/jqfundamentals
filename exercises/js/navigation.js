function NavbarDropdown(data) {
  this.navigationElement = data.navigationElement;
  this.listItems = data.listItems;
  this.hoverClass = data.hoverClass;
  this.subListType = data.subListType;
}

NavbarDropdown.prototype.init = function() {
  var _this = this;
  this.listItems.each(function(){
    $(this).hover(function(){
      $(this).toggleClass(_this.hoverClass)
        .find(_this.subListType)
        .toggle();
    });
  });
};

var data = {
  subListType: 'ul',
  hoverClass: 'hover',
  listItems: $("ul#nav li"),
  navigationElement: $("ul#nav")
};

var navigation = new NavbarDropdown(data);
navigation.init();
