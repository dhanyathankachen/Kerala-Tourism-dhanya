
// SignIn Page validations

let email = document.getElementById("email");
let pwd = document.getElementById("password");
let phone = document.getElementById("phone");
let error = document.getElementById("error");

function validateEmail(){
   let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
   if(regexp.test(email.value)){
    email.style.border = "1px solid green";
    return true;
   }
   else{
       email.style.border = "1px solid red";
    //    error.innerHTML = "Enter a valid email";
       return false;
   }
}

function validatePhone(){
    let regexp  = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexp.test(phone.value)){
        phone.style.border = "1px solid green";
        return true;
       }
       else{
           phone.style.border = "1px solid red";
           return false;
       }
    }
 
    function checkPasswordMatch() {
        var password = document.getElementById("password");
        var cpassword = document.getElementById("confirm-password");
        if (password.value != cpassword.value)
            cpassword.style.border = "1px solid red";
            

        else
            cpassword.style.border = "1px solid green";
    }
        
    function checkform() {
        var password = document.getElementById("password");
        var cpassword = document.getElementById("confirm-password");
        if (password.value != cpassword.value)
           {
               alert("Please check Password Fields");
               return false
           }
           else{
               return true;
           }
    }


    
    $(document).ready(function() {

        $('#password').keyup(function() {
            var password = $('#password').val();
            if (checkStrength(password) == false) {
                $('#sign-up').attr('disabled', true);
            }
        });
    

        function checkStrength(password) {
            var strength = 0;
            //If password contains both lower and uppercase characters, increase strength value.
            if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
                strength += 1;
                $('.low-upper-case').addClass('text-success');
                $('.low-upper-case i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');


            } else {
                $('.low-upper-case').removeClass('text-success');
                $('.low-upper-case i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            //If it has numbers and characters, increase strength value.
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
                strength += 1;
                $('.one-number').addClass('text-success');
                $('.one-number i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.one-number').removeClass('text-success');
                $('.one-number i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            //If it has one special character, increase strength value.
            if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
                strength += 1;
                $('.one-special-char').addClass('text-success');
                $('.one-special-char i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.one-special-char').removeClass('text-success');
                $('.one-special-char i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            if (password.length > 7) {
                strength += 1;
                $('.eight-character').addClass('text-success');
                $('.eight-character i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.eight-character').removeClass('text-success');
                $('.eight-character i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            // If value is less than 2

            if (strength < 2) {
                $('#result').removeClass()
                $('#password-strength').addClass('bg-danger');
                $('#result').addClass('text-danger').text('Very Weak');
                $('#password-strength').css('width', '10%');
            } else if (strength == 2) {
                $('#result').addClass('good');
                $('#password-strength').removeClass('bg-danger');
                $('#password-strength').addClass('bg-warning');
                $('#result').addClass('text-warning').text('Weak')
                $('#password-strength').css('width', '60%');
                return 'Weak'
            } else if (strength == 4) {
                $('#result').removeClass()
                $('#result').addClass('strong');
                $('#password-strength').removeClass('bg-warning');
                $('#password-strength').addClass('bg-success');
                $('#result').addClass('text-success').text('Strong');
                $('#password-strength').css('width', '100%');

                return 'Strong'
            }

        }

    });
