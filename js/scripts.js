var answers = function(string1, string2, string3, string4) {
  return string1 + string2 + string3 + string4;
}


$(function() {
  $("form#choose").submit(function(event) {
    event.preventDefault();
    $(".options").hide();
    ("span.user").text("#name");
    var ans1 = $("#firstQ").val();
    var ans2 = $("#firstQ").val();
    var ans3 = $("#firstQ").val();
    var ans4 = $("#firstQ").val();
    var ans5 = $("#firstQ").val();

    if (ans1 === "f") {
      ("#css").slideDown();
    }else if (maxLetter(answers(ans2, ans3, ans4, ans5)) === "j") {
      $("#java").slideDown();
    }else if (maxLetter(answers(ans2, ans3, ans4, ans5)) === "r") {
      $("#ruby").slideDown();
    }else if (maxLetter(answers(ans2, ans3, ans4, ans5)) === "c") {
      $("#csharp").slideDown();
    }else {
      $("#none").slideDown();
    }
  });
});
