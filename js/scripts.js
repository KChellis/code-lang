var answers = function(string1, string2, string3, string4) {
  return string1 + string2 + string3 + string4;
}
var maxLetter= function(string) {
  var exp = string ;
  var expCounts = {};
  var maxKey = '';
  for(var i = 0; i < exp.length; i++)
  {
      var key = exp[i];
      if(!expCounts[key]){
       expCounts[key] = 0;
      }
      expCounts[key]++;
      if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
          maxKey = key;
      }
  }
  return maxKey;
}

$(function() {
  $("form#choose").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    if (name) {
      $(".options").hide();
      $(".questions").hide();
      $("span").text(name);
      var ans1 = $("#firstQ").val();
      var ans2 = $("#secondQ").val();
      var ans3 = $("#thirdQ").val();
      var ans4 = $("#fourthQ").val();
      var ans5 = $("#fifthQ").val();
      var result= maxLetter(answers(ans2, ans3, ans4, ans5));
      if (ans1 === "f") {
        $("#css").slideDown();
      }else if (result === "j") {
        $("#java").slideDown();
      }else if (result === "r") {
        $("#ruby").slideDown();
      }else if (result === "c") {
        $("#csharp").slideDown();
      }else {
        $("#none").slideDown();
      }
    } else {
      alert("Please enter a name!");
    }
  });
});
