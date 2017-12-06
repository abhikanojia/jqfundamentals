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

DivStack.prototype.isFirstChild = function(target) {
  return $(target).is($(target).parent().children('div').first());
};

DivStack.prototype.addEventToDiv = function(container) {
  var _this = this;
  $(container).on('click', this.divSmall, function(event){
    if(_this.isFirstChild(event.target)) {
      $(event.target).remove();
    } else {
      $(event.target).css({background: _this.changeBackground})
        .siblings()
        .css({background: _this.defaultBackground});
    }
  });
};

DivStack.prototype.appendNewDiv = function() {
  var newDiv;
  var firstDiv = $(this.container).find('div:first');

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