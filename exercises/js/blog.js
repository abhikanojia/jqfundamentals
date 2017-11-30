function Accordion(data) {
  this.accordionContainer = data.accordionContainer;
  this.headings = data.headings;
  this.toggleElementClass = data.toggleElementClass;
}


Accordion.prototype.init = function() {
  var _this = this;
  this.headings.bind('click', function(event){
    event.preventDefault();
    var heading = $(this);
    heading.siblings(_this.toggleElementClass).slideToggle();
    heading.parent('li').siblings().find(_this.toggleElementClass).slideUp();
  });
};

var data = {
  accordionContainer: $('#blog'),
  headings: $("#blog").find('h3'),
  toggleElementClass: 'p.excerpt'
};

var accordion = new Accordion(data);
accordion.init();
