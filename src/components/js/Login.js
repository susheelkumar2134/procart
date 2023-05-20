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

    let user_id = document.forms.login_form.user_id.value;
    let user_pass = document.forms.login_form.user_pass.value;
    
    clear()
    if(user_id!="sumit"){
        document.getElementsByClassName("error1")[0].innerHTML = "* Please enter correct id."
        returnvalue = false;
    }
    if(user_pass!=1234){
        document.getElementsByClassName("error2")[0].innerHTML = "* Please enter correct password."
        returnvalue = false;
    }
    return returnvalue;
}