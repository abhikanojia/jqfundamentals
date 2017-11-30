function LoadContent(data) {
  this.headings = data.headings;
  this.externalFile = data.externalFile;
  this.failError = data.failError;
}

LoadContent.prototype.loadSection = function(sectionName) {
  var request = $.ajax({
    url: this.externalFile,
    method: "GET"
  });

  request.success(function(data){
    console.log('success')
    console.log(data);
  });

  request.fail(function(){
    alert(_this.failError);
  });
};

LoadContent.prototype.getAttributeFromString = function(string) {
  return string.substr(string.indexOf('#'));
};

LoadContent.prototype.addReference = function(element) {
  var href = $(element).find('a').attr('href');
  console.log(element);
  var dataValue = this.getAttributeFromString(href);
  console.log(dataValue);
  $(element).find('a').data('redirect',dataValue);
  console.log('done')
};

LoadContent.prototype.init = function() {
  var _this = this;
  this.headings.bind('click', function(event){
    event.preventDefault();
    _this.addReference(this)
  })
};


var data = {
  externalFile: 'file:///media/abhishekkanojia/harddisk/exercise/jqfundamentals/data/blog.html',
  failError: 'Something Went wrong.',
  headings: $('#blog').find('h3')
};

var loadContent = new LoadContent(data);
loadContent.init();
console.log(loadContent);