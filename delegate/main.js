function DivStack(data) {
  this.divClass = data.divClass;
  this.addButton = data.addButton;
  this.container = data.container;
  this.divSmall = 'div.' + this.divClass;
  this.defaultBackground = data.defaultBackground;
  this.changeBackground = data.changeBackground;
}

DivStack.prototype.createDiv = function(text) {
  return $('<div/>',{
    class: this.divClass,
    text: text
  });
};

DivStack.prototype.isFirstChild = function(element) {
  return $(element).is($(element).parent().children(this.divSmall).first());
};

DivStack.prototype.addEventToDiv = function(container) {
  var _this = this;
  container.on('click', this.divSmall, function(){
    if(_this.isFirstChild(this)) {
      $(this).remove();
    } else {
      $(this).css({background: _this.changeBackground})
        .siblings()
        .css({background: _this.defaultBackground});
    }
  });
};

DivStack.prototype.appendNewDiv = function() {
  var newDiv;
  var firstDiv = $(this.divSmall).first();

  if(firstDiv.length == 1) {
    var text = parseInt(firstDiv.text()) + 1;
    newDiv = this.createDiv(text).insertBefore(firstDiv);
  } else {
    newDiv = this.createDiv(firstDiv.length).appendTo(this.container);
  }
};

DivStack.prototype.init = function() {
  var _this = this;
  this.addEventToDiv(this.container);
  this.addButton.on('click', function(){
    _this.appendNewDiv();
  });
};

$(document).ready(function(){
  var data = {
    divClass: 'small',
    container: $('.left'),
    changeBackground: 'cyan',
    defaultBackground: 'white',
    addButton: $('[data-trigger=add]')
  };

  var stack = new DivStack(data);
  stack.init();
});
