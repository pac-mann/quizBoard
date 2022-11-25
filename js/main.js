var result1 = 1;
var result2 = 2;
var result3 = 3;


function score () {
  return "you have scored" + total;
}
$(document).ready(function() {
  $("#quiz").submit(function() {
    var question1 = $("input[name='question1']:checked").val();
    var question2 = $("input[name='question2']:checked").val();
    var question3 = $("input[name='question3']:checked").val();
   
    console.log(question1);
    console.log(question2);
    console.log(question3);
    

    if (question1 === "right") {
      result1 = 20;
    }else {
      result1 = 0;
    }
    if (question2 ==="right") {
      result2 = 20;
    } else {
      result2 = 0;
    }
    if (question3 === "right") {
      result3 = 20;
    } else {
      result3 = 0;
    }
  
    var score = (result1 + result2 + result3);
    console.log(score);

    $("#result").text("You have gotten " + score + " points.");
    
  })
})