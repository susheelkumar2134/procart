function clear()
{
    var clear_all = document.getElementsByClassName("error");
    for(let item of clear_all)
    {
        item.innerHTML = "";
    }
}


function validation(){
    var returnvalue = true;

    let fname = document.getElementById('f_name').value;
    let lname = document.getElementById('l_name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('p_num').value;
    let password = document.getElementById('pass').value;
    let dob = document.getElementById('dob').value;
    let gender = document.forms.myform.gender.value;
    let adr = document.forms.myform.adr.value;
    let country = document.forms.myform.country.value;

    clear()

    if(fname.length<3){
        document.getElementsByClassName("error1")[0].innerHTML = "* Length of name is too short."
        returnvalue = false;
    }
    if(email.length>30){
        document.getElementsByClassName("error2")[0].innerHTML = "* Email length is too long."
        returnvalue = false;
    }
    if(email.length===0){
        document.getElementsByClassName("error2")[0].innerHTML = "* Please enter your email."
        returnvalue = false;
    }
    if(phone.length!==10){
        document.getElementsByClassName("error3")[0].innerHTML = "* Phone number should be only 10 digits."
        returnvalue = false;
    }
    if(lname.length<2){
        document.getElementsByClassName("error4")[0].innerHTML = "* Length of name is too short."
        returnvalue = false;
    }
    if(password.length<=8){
        document.getElementsByClassName("error5")[0].innerHTML = "* Password should be at least 8 digits."
        returnvalue = false;
    }
    if(dob===""){
        document.getElementsByClassName("error6")[0].innerHTML = "* Please enter your date of birth."
        returnvalue = false;
    }
    if(gender===""){
        document.getElementsByClassName("error7")[0].innerHTML = "* Select your gender."
        returnvalue = false;
    }
    if(adr==="" || adr.length <= 8){
        document.getElementsByClassName("error8")[0].innerHTML = "* Please enter your address."
        returnvalue = false;
    }
    if(country==="Select your Country"){
        document.getElementsByClassName("error9")[0].innerHTML = "* Please select your country."
        returnvalue = false;
    }
    return returnvalue
}

export {clear,validation};