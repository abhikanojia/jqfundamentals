$(document).ready(function(){
  // select all div with class module
  $("div.module");

  // Come up with three selectors that you could use to get the third item in the #myList unordered list.
  $("#myListItem"); // fastest

  $("ul > li#myListItem");

  $("ul > li:nth-child(3)");

  // Select the label for the search input using an attribute selector.
  $("label[for=q]");

  // Figure out how many elements on the page are hidden
  $(":hidden").length;

  // Figure out how many image elements on the page have an alt attribute
  $("img[alt]").length;

  // Select all of the odd table rows in the table body.
  $("#fruits tbody > tr:odd");


  // Exercise 2.2

  // Select all of the image elements on the page; log each image's alt attribute.
  $("img").each(function(){
    console.log(this.alt);
  });

  // Select the search input text box, then traverse up to the form and add a class to the form.
  $("input[name=q]").parent().addClass("form-horizontal");

  // Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  $("li.current").removeClass('current').next().addClass('current');

  // Select the select element inside #specials; traverse your way to the submit button.
  $("#specials > form > ul > li:nth-child(1) > select[name=day]").closest('ul').find('input:submit');

  // Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.

  $("#slideshow > li:nth-child(1)").addClass('current').siblings().addClass("disabled");


  // Exercise 2.3

  // Add five new list items to the end of the unordered list #myList.
  var ul = $("#myList");
  for (var i = 7; i <= 12; i++) {
    var li = "<li> List Item " + i + "</li>";
    ul.append(li);
  }

  $("#myList li:odd").remove();

  // Add another h2 and another paragraph to the last div.module
  $("div.module:last")
  .append("<h2> Another Heading </h2>")
  .append("<p>Here is another paragraph. </p>");

  // Add another option to the select element; give the option the value "Wednesday"
  $("select[name=day]").append("<option value='wednesday'>Wednesday</option>");

  // Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $("#main").append("<div class='module'></div>");
  $("img:first").clone().appendTo('div.module:last');
});