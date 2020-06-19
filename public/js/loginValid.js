function validation(){

    var pass = document.getElementById("pwd");
    var email1= document.getElementById("emails");

    if(pass){
        passValid();
     }
     if(email1){
         return emailvalid();
     }



    function passValid()
    
    
    { 
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
            if(pwd.value.match(passw)){ 
               alert("valid password");
                return true;
            }
            else{ 
                    alert("password between 7 to 15 characters which contain at least one numeric digit and a special character");
                    return false;
            }

}





function emailvalid(){

    let emails = document.getElementById("emails").value;
    regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    

     if(regexp.test(emails)  ){
         alert("valid email");
   
         return true;
    
    } 
    else{
           
        alert("type valid email id");
        return false;
   
    
    }

    
    
    
}
   
   

   
}

