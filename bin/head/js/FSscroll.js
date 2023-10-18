/*	/// Srolling via CSS3 ///  */
function goToOne() {
  document.getElementById("scrollMe").style.left = "0px";
  document.getElementById("scrollMe").style.top = "0px";
}
function goToTwo() {
  document.getElementById("scrollMe").style.left = "-100%";
  document.getElementById("scrollMe").style.top = "0px";
}
function goToThree() {
  document.getElementById("scrollMe").style.left = "-200%";
  document.getElementById("scrollMe").style.top = "0px";
}
function goToFour() {
  document.getElementById("scrollMe").style.left = "0px";
  document.getElementById("scrollMe").style.top = "-100%";
}
function goToFive() {
  document.getElementById("scrollMe").style.left = "-100%";
  document.getElementById("scrollMe").style.top = "-100%";
}
function goToSix() {
  document.getElementById("scrollMe").style.left = "-200%";
  document.getElementById("scrollMe").style.top = "-100%";
}

/* jQuery Button */

/* _--------------- Gliederung der Webseite --------------------
________________________________________________________________

--------------1----------------2------------------3-------------

--------------4----------------5------------------6-------------

______________________________________________________________-*/

$(document).ready(function () {
  "use strict";

  /* STARTZUSTAND = Zustand Bereich 1 */

  /* ------------------------------------------
					--------------Button - Status-------------- */
  $(".page1button").addClass("actual");
  $(".page2button").removeClass("actual");
  $(".page6button").removeClass("actual");
  $(".page4button").removeClass("actual");
  $(".page5button").removeClass("actual");
  $(".page3button").removeClass("actual");
  /* ------------------------------------------
						--------------Arrows--Visibility------------ */
  $(".navigationElement.up").addClass("off");
  $(".navigationElement.left").addClass("off");
  $(".navigationElement.down").removeClass("off");
  $(".navigationElement.right").removeClass("off");
  /* ------------------------------------------
						--------------Arrows--Functionality--------- */
  $("#upArrowOne").addClass("off");
  $("#upArrowTwo").addClass("off");
  $("#upArrowThree").addClass("off");
  $("#rightArrowOne").removeClass("off");
  $("#rightArrowTwo").addClass("off");
  $("#rightArrowThree").addClass("off");
  $("#rightArrowFour").addClass("off");
  $("#downArrowOne").removeClass("off");
  $("#downArrowTwo").addClass("off");
  $("#downArrowThree").addClass("off");
  $("#leftArrowOne").addClass("off");
  $("#leftArrowTwo").addClass("off");
  $("#leftArrowThree").addClass("off");
  $("#leftArrowFour").addClass("off");

  /* Zustand Bereich 1 */
  $(".page1button").click(function () {
    /* ------------------------------------------
					--------------Button - Status-------------- */
    $(".page1button").addClass("actual");
    $(".page2button").removeClass("actual");
    $(".page6button").removeClass("actual");
    $(".page4button").removeClass("actual");
    $(".page5button").removeClass("actual");
    $(".page3button").removeClass("actual");
    /* ------------------------------------------
						--------------Arrows--Visibility------------ */
    $(".navigationElement.up").addClass("off");
    $(".navigationElement.left").addClass("off");
    $(".navigationElement.down").removeClass("off");
    $(".navigationElement.right").removeClass("off");
    /* ------------------------------------------
						--------------Arrows--Functionality--------- */
    $("#upArrowOne").addClass("off");
    $("#upArrowTwo").addClass("off");
    $("#upArrowThree").addClass("off");
    $("#rightArrowOne").removeClass("off");
    $("#rightArrowTwo").addClass("off");
    $("#rightArrowThree").addClass("off");
    $("#rightArrowFour").addClass("off");
    $("#downArrowOne").removeClass("off");
    $("#downArrowTwo").addClass("off");
    $("#downArrowThree").addClass("off");
    $("#leftArrowOne").addClass("off");
    $("#leftArrowTwo").addClass("off");
    $("#leftArrowThree").addClass("off");
    $("#leftArrowFour").addClass("off");
    return false;
  });

  /* Zustand Bereich 2 */
  $(".page2button").click(function () {
    /* ------------------------------------------
					--------------Button - Status-------------- */
    $(".page1button").removeClass("actual");
    $(".page2button").addClass("actual");
    $(".page6button").removeClass("actual");
    $(".page4button").removeClass("actual");
    $(".page5button").removeClass("actual");
    $(".page3button").removeClass("actual");
    /* ------------------------------------------
						--------------Arrows--Visibility------------ */
    $(".navigationElement.up").addClass("off");
    $(".navigationElement.left").removeClass("off");
    $(".navigationElement.down").removeClass("off");
    $(".navigationElement.right").removeClass("off");
    /* ------------------------------------------
						--------------Arrows--Functionality--------- */
    $("#upArrowOne").addClass("off");
    $("#upArrowTwo").addClass("off");
    $("#upArrowThree").addClass("off");
    $("#rightArrowOne").addClass("off");
    $("#rightArrowTwo").removeClass("off");
    $("#rightArrowThree").addClass("off");
    $("#rightArrowFour").addClass("off");
    $("#downArrowOne").addClass("off");
    $("#downArrowTwo").removeClass("off");
    $("#downArrowThree").addClass("off");
    $("#leftArrowOne").removeClass("off");
    $("#leftArrowTwo").addClass("off");
    $("#leftArrowThree").addClass("off");
    $("#leftArrowFour").addClass("off");
    return false;
  });

  /* Zustand Bereich 3 */
  $(".page3button").click(function () {
    /* ------------------------------------------
					--------------Button - Status-------------- */
    $(".page1button").removeClass("actual");
    $(".page2button").removeClass("actual");
    $(".page6button").removeClass("actual");
    $(".page4button").removeClass("actual");
    $(".page5button").removeClass("actual");
    $(".page3button").addClass("actual");
    /* ------------------------------------------
						--------------Arrows--Visibility------------ */
    $(".navigationElement.up").addClass("off");
    $(".navigationElement.left").removeClass("off");
    $(".navigationElement.down").removeClass("off");
    $(".navigationElement.right").addClass("off");
    /* ------------------------------------------
						--------------Arrows--Functionality--------- */
    $("#upArrowOne").addClass("off");
    $("#upArrowTwo").addClass("off");
    $("#upArrowThree").addClass("off");
    $("#rightArrowOne").addClass("off");
    $("#rightArrowTwo").addClass("off");
    $("#rightArrowThree").addClass("off");
    $("#rightArrowFour").addClass("off");
    $("#downArrowOne").addClass("off");
    $("#downArrowTwo").addClass("off");
    $("#downArrowThree").removeClass("off");
    $("#leftArrowOne").addClass("off");
    $("#leftArrowTwo").removeClass("off");
    $("#leftArrowThree").addClass("off");
    $("#leftArrowFour").addClass("off");
    return false;
  });

  /* Zustand Bereich 4 */
  $(".page4button").click(function () {
    /* ------------------------------------------
					--------------Button - Status-------------- */
    $(".page1button").removeClass("actual");
    $(".page2button").removeClass("actual");
    $(".page6button").removeClass("actual");
    $(".page4button").addClass("actual");
    $(".page5button").removeClass("actual");
    $(".page3button").removeClass("actual");
    /* ------------------------------------------
						--------------Arrows--Visibility------------ */
    $(".navigationElement.up").removeClass("off");
    $(".navigationElement.left").addClass("off");
    $(".navigationElement.down").addClass("off");
    $(".navigationElement.right").removeClass("off");
    /* ------------------------------------------
						--------------Arrows--Functionality--------- */
    $("#upArrowOne").removeClass("off");
    $("#upArrowTwo").addClass("off");
    $("#upArrowThree").addClass("off");
    $("#rightArrowOne").addClass("off");
    $("#rightArrowTwo").addClass("off");
    $("#rightArrowThree").removeClass("off");
    $("#rightArrowFour").addClass("off");
    $("#downArrowOne").addClass("off");
    $("#downArrowTwo").addClass("off");
    $("#downArrowThree").addClass("off");
    $("#leftArrowOne").addClass("off");
    $("#leftArrowTwo").addClass("off");
    $("#leftArrowThree").addClass("off");
    $("#leftArrowFour").addClass("off");
    return false;
  });

  /* Zustand Bereich 5 */
  $(".page5button").click(function () {
    /* ------------------------------------------
					--------------Button - Status-------------- */
    $(".page1button").removeClass("actual");
    $(".page2button").removeClass("actual");
    $(".page6button").removeClass("actual");
    $(".page4button").removeClass("actual");
    $(".page5button").addClass("actual");
    $(".page3button").removeClass("actual");
    /* ------------------------------------------
					--------------Arrows--Visibility------------ */
    $(".navigationElement.up").removeClass("off");
    $(".navigationElement.left").removeClass("off");
    $(".navigationElement.down").addClass("off");
    $(".navigationElement.right").removeClass("off");
    /* ------------------------------------------
						--------------Arrows--Functionality--------- */
    $("#upArrowOne").addClass("off");
    $("#upArrowTwo").removeClass("off");
    $("#upArrowThree").addClass("off");
    $("#rightArrowOne").addClass("off");
    $("#rightArrowTwo").addClass("off");
    $("#rightArrowThree").addClass("off");
    $("#rightArrowFour").removeClass("off");
    $("#downArrowOne").addClass("off");
    $("#downArrowTwo").addClass("off");
    $("#downArrowThree").addClass("off");
    $("#leftArrowOne").addClass("off");
    $("#leftArrowTwo").addClass("off");
    $("#leftArrowThree").removeClass("off");
    $("#leftArrowFour").addClass("off");
    return false;
  });

  /* Zustand Bereich 6 */
  $(".page6button").click(function () {
    /* ------------------------------------------
					--------------Button - Status-------------- */
    $(".page1button").removeClass("actual");
    $(".page2button").removeClass("actual");
    $(".page6button").addClass("actual");
    $(".page4button").removeClass("actual");
    $(".page5button").removeClass("actual");
    $(".page3button").removeClass("actual");
    /* ------------------------------------------
						--------------Arrows--Visibility------------ */
    $(".navigationElement.up").removeClass("off");
    $(".navigationElement.left").removeClass("off");
    $(".navigationElement.down").addClass("off");
    $(".navigationElement.right").addClass("off");
    /* ------------------------------------------
						--------------Arrows--Functionality--------- */
    $("#upArrowOne").addClass("off");
    $("#upArrowTwo").addClass("off");
    $("#upArrowThree").removeClass("off");
    $("#rightArrowOne").addClass("off");
    $("#rightArrowTwo").addClass("off");
    $("#rightArrowThree").addClass("off");
    $("#rightArrowFour").addClass("off");
    $("#downArrowOne").addClass("off");
    $("#downArrowTwo").addClass("off");
    $("#downArrowThree").addClass("off");
    $("#leftArrowOne").addClass("off");
    $("#leftArrowTwo").addClass("off");
    $("#leftArrowThree").addClass("off");
    $("#leftArrowFour").removeClass("off");
    return false;
  });
});
