$(document).ready(function () {
  "use strict";

  $("nav .container ").removeClass("open");
  $("#closeElement").addClass("hideElement");
  $("#openElement").removeClass("hideElement");

  $("#open").click(function () {
    $("#openElement").addClass("hideElement");
    $("#closeElement").removeClass("hideElement");
    $("nav .container").addClass("open");
    return false;
  });

  $("#close").click(function () {
    $("#openElement").removeClass("hideElement");
    $("#closeElement").addClass("hideElement");
    $("nav .container").removeClass("open");
    return false;
  });
});
