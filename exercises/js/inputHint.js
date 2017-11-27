function CreateInputHint(form) {
  this.form = form;
  this.label = this.form.find('label');
  this.inputField = this.form.find('input[name=q]');
}

CreateInputHint.prototype.ClassName = 'hint';

CreateInputHint.prototype.changeValueOfInput = function() {
  this.inputField.val(this.label.text());
};

CreateInputHint.prototype.removeLabel = function() {
  this.addHint();
  this.label.remove();
};

CreateInputHint.prototype.showHint = function(hintText) {
  var _this = this;
  return function(){
    if(_this.inputField.val().length === 0) {
      _this.inputField.val(hintText);
      _this.addClassToField();
    }
  };
};

CreateInputHint.prototype.addClassToField = function() {
  this.inputField.addClass(this.ClassName);
};

CreateInputHint.prototype.addHint = function() {
  this.inputField.val(this.label.text());
  this.addClassToField();
};

CreateInputHint.prototype.removeClassFromField = function() {
  var _this = this;
  return function(){
    _this.inputField.val('');
    _this.inputField.removeClass(_this.ClassName);
  };
};

CreateInputHint.prototype.init = function() {
  var _this = this;
  var labelText = this.label.text();
  $(this.inputField).focus(_this.removeClassFromField());
  $(this.inputField).blur(_this.showHint(labelText));
  this.removeLabel();
};

$(document).ready(function(){
  var form = $("#main").find('form#search');
  var searchHandler = new CreateInputHint(form);
  searchHandler.init();
});