//validate email
$(document).ready(function(){
    $("#login-form").submit(function(event){

       event.preventDefault(); //prevent default action of form to quiz.html
       
       var email = $("#email").val();
       var password = $("#pwd").val();


        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validPwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      
        if (email.match(validRegex) && password.match(validPwdRegex) ){
      
          window.location = 'quiz.html'
    
        } else {
      
          alert("Invalid Password or email address!");
      
        }
      

    })

});


