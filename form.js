function validate(){
    const user = document.getElementById("name").value;
    const pwd = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    var msgbox =document.getElementById("msg");
    let message='';
    if(user==''){
        message="Please enter username";
        msgbox.style.color='red';
    }
    else if(pwd==''){
        message="Please enter password";
        msgbox.style.color='red';
    }
    else if (age== '') {
        message = "Please enter age";
        msgbox.style.color = 'red';
    }
    else{
        message="Login successful!";
        msgbox.style.color='green';
    }
    msgbox.innerText=message;
}
