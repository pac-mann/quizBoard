//validate email
$(document).ready(function(){
    $("#login-form").submit(function(event){

       event.preventDefault(); //prevent default action of form to quiz.html
       
       var email = $("#email").val();
       var password = $("#pwd").val();
       console.log(email);

    }) //accessing the form

});
