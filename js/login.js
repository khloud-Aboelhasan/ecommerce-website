function signIn(){
    var Email = document.getElementById("inputemail").value;
    var PassWordd = document.getElementById("inputPassword").value ;
    if(Email == "admin@gmail.com" && PassWordd == 12345)
    {
        document.location.href = "file:///C:/Users/Mohamed/Desktop/New%20folder/image/Ecommerc%20project/admin.html";
    }
   
    else if(Email == "" && PassWordd ==""){
     alert("Please FilL the form");
    }
    else{
    
    window.location.href = "file:///C:/Users/Mohamed/Desktop/New%20folder/image/Ecommerc%20project/index.html";
  }
}