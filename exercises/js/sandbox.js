$(document).ready(function(){
  // select all div with class module
  var divModule = $(".module");

  // Come up with three selectors that you could use to get the third item in the #myList unordered list.
  var thirdItem = $("#myListItem"); // fastest

  var thirdChild = $("ul > li#myListItem");

  var thirdListItem = $("ul > li:nth-child(3)");

  // Select the label for the search input using an attribute selector.
  var label = $("label[for=q]");

  // Figure out how many elements on the page are hidden
  var hiddenElementsCount = $(":hidden").size();

  // Figure out how many image elements on the page have an alt attribute
  var imageWithAlt = $("img[alt]").length();

  // Select all of the odd table rows in the table body.
  var oddRowsOfTable = $("tbody > tr:nth-child(odd)");


  // Exercise 2.2

  // Select all of the image elements on the page; log each image's alt attribute.
  var images = $("img");

  $.each(images, function(index, image){
    console.log(image.alt);
  });

  // Select the search input text box, then traverse up to the form and add a class to the form.
  var inputField = $("input[name=q]");
  var form = inputField.parent();
  form.addClass("form-horizontal");

  // Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  var className = "current";
  var listItem = $("li.current").removeClass(className);
  listItem.next().addClass(className);

  // Select the select element inside #specials; traverse your way to the submit button.
  var select = $("#specials > form > ul > li:nth-child(1) > select[name=day]");
  var submitButton = select.closest('ul').find('input:submit');

  // Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.

  var firstListItem = $("#slideshow > li:nth-child(1)");
  firstListItem.addClass(className);
  firstListItem.siblings().addClass("disabled");
});