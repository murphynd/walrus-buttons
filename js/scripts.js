$(document).ready(function() {
  $(".toggle-walrus").click(function() {
    $("#walrus-initially-showing").toggle();
    $("#walrus-initially-hidden").toggle();
  });
  $(".toggle-panda").click(function() {
    $("#panda-initially-showing").toggle();
    $("#panda-initially-hidden").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});