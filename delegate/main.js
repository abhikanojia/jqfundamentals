function DivStack(data) {
  this.container = data.container;
  this.divClass = data.divClass;
  this.addButton = data.addButton;
  this.defaultBackground = data.defaultBackground;
  this.changeBackground = data.changeBackground;
}

DivStack.prototype.appendBeforeFirstDiv = function(firstDiv) {
  return $('<div/>', {
    class: this.divClass,
    text: parseInt(firstDiv.text()) + 1
  }).insertBefore(firstDiv);
};

DivStack.prototype.appendFirstDiv = function() {
  return $('<div/>', {
    class: this.divClass,
    text: 1
  }).appendTo(this.container);
};

DivStack.prototype.isFirstChild = function(target) {
  return $(target).is($(target).parent().children('div').first());
};

DivStack.prototype.addEventToDiv = function(div) {
  var _this = this;
  $(div).on('click', function(e){
    if(_this.isFirstChild(e.target)) {
      $(this).remove();
    } else {
      $(this).css({background: _this.changeBackground}).siblings()
      .css({background: _this.defaultBackground});
    }
  });
};


DivStack.prototype.appendNewDiv = function() {
  var newDiv;
  var firstDiv = $(this.container).find('div:first');
  if(firstDiv.length == 1) {
    newDiv = this.appendBeforeFirstDiv(firstDiv);
  } else {
    newDiv = this.appendFirstDiv();
  }
  this.addEventToDiv(newDiv);
};

DivStack.prototype.init = function() {
  var _this = this;
  this.addButton.bind('click', function(){
    _this.appendNewDiv();
  });
};

var data = {
  container: $('.left'),
  divClass: 'small',
  addButton: $('[data-trigger=add]'),
  defaultBackground: 'white',
  changeBackground: 'cyan'
};

var stack = new DivStack(data);
stack.init();
