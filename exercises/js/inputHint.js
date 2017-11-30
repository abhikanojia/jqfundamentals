function InputHint(data) {
  this.form = data.form;
  this.label = data.label;
  this.inputField = data.inputField;
  this.className = data.className;
}

InputHint.prototype.removeLabel = function() {
  this.addHint();
  this.label.remove();
};

InputHint.prototype.addHintClass = function(hintText) {
  var _this = this;
  return function(){
    if(_this.inputField.val().trim().length === 0) {
      _this.inputField.val(hintText);
      _this.addClassToField();
    }
  };
};

InputHint.prototype.addClassToField = function() {
  this.inputField.addClass(this.className);
};

InputHint.prototype.addHint = function() {
  this.inputField.val(this.label.text());
  this.addClassToField();
};

InputHint.prototype.removeClassFromField = function() {
  var _this = this;
  return function(){
    _this.inputField
      .val('')
      .removeClass(_this.className);
  };
};

InputHint.prototype.init = function() {
  $(this.inputField)
  .focus(this.removeClassFromField())
  .blur(this.addHintClass(this.label.text()));
  this.removeLabel();
};

$(document).ready(function(){
  var data = {
    form: $("#main").find('form#search'),
    label: $("form#search").find('label'),
    inputField: $("form#search").find('input[name=q]'),
    className: 'hint'
  };
  var searchHandler = new InputHint(data);
  searchHandler.init();
});