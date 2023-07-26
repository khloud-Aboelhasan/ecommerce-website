function validationform(){
    var valid = true;
    if(document.inputForm.first.value==""){
        alert("First Name Is Empty");
        document.inputForm.first.focus();
        valid = false;
    }
    if(document.inputForm.last.value==""){
        alert("Last Name Is Empty");
        document.inputForm.last.focus();
        valid = false;
    }
    if(document.inputForm.pass.value==""){
        alert("PassWord Is Empty");
        document.inputForm.pass.focus();
        valid = false;
    }
    if(document.inputForm.confirmpass.value==""){
        alert("confirm password Is Empty");
        document.inputForm.confirmpass.focus();
        valid = false;
    }
    if(document.inputForm.email.value==""){
        alert("Email Is Empty");
        document.inputForm.email.focus();
        valid = false;
    }
    else{
        if(document.inputForm.email.value.indexOf("@")==-1 || document.inputForm.email.value.indexOf(".")==-1){
            alert("Please Enter Vaild Email ,info@gmail.com")
            document.inputForm.email.focus();
            valid = false;
        }
    }
    if(document.inputForm.date.value==""){
        alert("Date Is Empty");
        document.inputForm.date.focus();
        valid = false;
    }
    if(valid == true){
        alert("You Register In Our WebSite");
    }
    return valid;
    
}