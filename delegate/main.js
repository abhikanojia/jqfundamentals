function DivStack(data) {
  this.container = data.container;
  this.divClass = data.divClass;
  this.addButton = data.addButton;
  this.status = data.status;
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

DivStack.prototype.addEventToDiv = function(div) {
  var _this = this;
  $(div).on('click', function(e){
    if(e.target == $(this).parent().find("div:first")[0]) {
      $(this).remove().end();
    } else {
      $(this).css({background: 'cyan'}).siblings().css({background: 'white'});
    }
  });
};

DivStack.prototype.updateStatus = function(div) {
  $(this.status).text($(div).text());
};

DivStack.prototype.appendNewDiv = function() {
  var newDiv;
  var firstDiv = $(this.container).find('div:first');
  if(firstDiv.length == 1) {
    newDiv = this.appendBeforeFirstDiv(firstDiv);
  } else {
    newDiv = this.appendFirstDiv();
  }
  this.updateStatus(newDiv);
  this.addEventToDiv(newDiv);
};

DivStack.prototype.init = function() {
  var _this = this;
  this.addButton.bind('click', function(){
    console.log('add');
    _this.appendNewDiv();
  });
};

var data = {
  container: $('.left'),
  divClass: 'small',
  addButton: $('[data-trigger=add]'),
  status: $('.status')
};

var stack = new DivStack(data);
stack.init();
console.log(stack);