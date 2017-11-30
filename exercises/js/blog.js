function Accordion(data) {
  this.div = data.div;
  this.bindEventTo = data.bindEventTo;
  this.toggleElementClass = data.toggleElementClass;
}


Accordion.prototype.init = function() {
  var _this = this;
  this.bindEventTo.each(function(index, element){
    $(element).bind('click', function(event){
      event.preventDefault();
      var h3 = $(this);
      h3.siblings(_this.toggleElementClass).slideToggle();
      h3.parent().siblings().find(_this.toggleElementClass).slideUp();
    });
  });
};

var data = {
  div: $('#blog'),
  bindEventTo: $("#blog").find('h3'),
  toggleElementClass: 'p.excerpt'
};

var accordion = new Accordion(data);
accordion.init();
console.log(accordion);