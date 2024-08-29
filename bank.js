// console.log('it will run successfully');

document.getElementById('submit').addEventListener(
    'click',function(){
        // alert('submit button clicked')
        // console.log('submit button clicked');
        var emailFild = document.getElementById('email');
        var emailValue = emailFild.value ;
            console.log(emailValue);

            var passwordFild = document.getElementById('password');
            var passwordValue = passwordFild.value ;
            console.log(emailValue, passwordValue);

            if(emailValue =='example@gmail.com' && passwordValue== 123456){
                alert('login successfull')
                window.location.href="http://127.0.0.1:5500/amoun%20calculation.html";
            }

            else{
                alert('invalid credencial')
            }

    })