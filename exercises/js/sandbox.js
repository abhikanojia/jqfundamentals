$(document).ready(function(){
  // select all div with class module
  var divModule = $(".module");

  // Come up with three selectors that you could use to get the third item in the #myList unordered list.
  var thirdItem = $("#myListItem"); // fastest

  var thirdChild = $("ul > li#myListItem");

  var thirdListItem = $("ul > li:nth-child(3)");

  // Select the label for the search input using an attribute selector.
  var label = $("label:contains('Text input')");

  // Figure out how many elements on the page are hidden
  var hiddenElementsCount = $(":hidden").size();

  // Figure out how many image elements on the page have an alt attribute
  var imageWithAlt = $("img[alt]").length();

  // Select all of the odd table rows in the table body.
  var oddRowsOfTable = $("tbody > tr:nth-child(odd)");
});