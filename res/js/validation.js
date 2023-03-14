//Javascript

var loginBoxId = document.querySelector(".outBox-id");
var loginBoxPass = document.querySelector(".outBox-pass");
var loginInputBoxId = document.querySelector(".sample-id");
var loginInputBoxPass = document.querySelector(".sample-pass");
const id= document.querySelector("#id");
const password = document.querySelector("#passwd");
const loginbtn = document.querySelector("#loginbtn");
const idmiss = document.getElementById("idmiss");
const passwordmiss = document.getElementById("passwordmiss");

loginbtn.addEventListener('click', ()=>{
    if (id.value == '0000') {
        if (password.value == '0000') {
        
            loginbtn.type ="submit";

        }
        else {
        
            loginbtn.type ="reset";
            passwordmiss.classList.remove('blind');
            idmiss.classList.add('blind');
            loginBoxId.classList.remove('existence');   
            loginBoxPass.classList.remove('existence'); 
        }
    }
    else {
      
            loginbtn.type ="reset";
            idmiss.classList.remove('blind');
            passwordmiss.classList.add('blind');
            loginBoxId.classList.remove('existence');   
            loginBoxPass.classList.remove('existence'); 
    }

})

loginInputBoxId.addEventListener('keyup', function(){
    if(!loginInputBoxId.value == ''){
        //빈 값이 아닌 경우
        loginBoxId.classList.add('existence');   
    }else{
        //빈 값인 경우
        loginBoxId.classList.remove('existence');   
        
    }
});

loginInputBoxPass.addEventListener('keyup', function(){
    if(!loginInputBoxPass.value == ''){
        //빈 값이 아닌 경우
        loginBoxPass.classList.add('existence');   
    }else{
        //빈 값인 경우
        loginBoxPass.classList.remove('existence');   
    }
});



class inputForm{
    constructor(selector) {
        this.doc = document.querySelector(selector);


    this.doc.addEventListener('keyup', function(){
        if(!loginInputBoxPass.value == ''){
            //빈 값이 아닌 경우
            loginBoxPass.classList.add('existence');   
        }else{
            //빈 값인 경우
            loginBoxPass.classList.remove('existence');   
        }
    });
    }

    
}