function CreateInputHint(form) {
  this.form = form;
  this.label = this.form.find('label');
  this.inputField = this.form.find('input[name=q]');
}

CreateInputHint.prototype.changeValueOfInput = function() {
  this.inputField.val(this.label.text());
};

CreateInputHint.prototype.removeLabel = function() {
  this.label.remove();
};

CreateInputHint.prototype.removeClass = function() {
  this.inputField.removeClass()
};

CreateInputHint.prototype.init = function() {
  var _this = this;
  this.inputField.bind('focus', _this.);
};

$(document).ready(function(){
  console.log("Dom is ready");
  var form = $("#main").find('form#search');
  var searchHandler = new CreateInputHint(form);
});