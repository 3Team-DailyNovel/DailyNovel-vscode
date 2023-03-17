//자바스크립트로 이벤트 주기위한 변수들 설정
let words=document.querySelectorAll(".index-text-fade");
let currentNum =0;
let beforeNum =0;
let wordArray = [];


for(let i=0; i<words.length; i++){
    wordArray.push(words[i]);
}

fadeFunction=setInterval(function(){
    words[currentNum].classList.remove("fade-out-text");
    words[currentNum].classList.add("fade-in-text");

    setTimeout(function(){
        words[currentNum].classList.add("fade-out-text");
        words[currentNum].classList.remove("fade-in-text");
        if (currentNum==wordArray.length) {
            currentNum=0;
        }
        else{
            beforeNum+=currentNum;
            currentNum+=1;
        }
    },3000);
},3000);



