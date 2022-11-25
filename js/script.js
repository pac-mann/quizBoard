//validate email
$(document).ready(function(){
    $("#login-form").submit(function(event){

       event.preventDefault(); //prevent default action of form to quiz.html
       
       var email = $("#email").val();
       var password = $("#pwd").val();

       Validatepassword(input) {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (password.match(validRegex)) {
      
          alert("Valid password!");
      
          document.form1.email.focus();
      
          return true;
      
        } else {
      
          alert("Invalid email address!");
      
          document.form1.email.focus();
      
          return false;
      
        }
      
      }

    }) //accessing the form

});

windows.target

