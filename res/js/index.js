//자바스크립트로 이벤트 주기위한 변수들 설정
let words=document.querySelectorAll(".index-text-fade");
let sections = document.querySelectorAll(".index-section")
let currentNum =0;
let beforeNum =0;
let wordArray = [];




let observer = new IntersectionObserver((e)=>{
    e.forEach((박스)=>{
        if(박스.isIntersecting){
            박스.target.classList.remove("opacity-0");
            박스.target.classList.add("fade-in");
            박스.target.classList.remove("fade-out");
    }
        else{
            박스.target.classList.add("opacity-0");
            박스.target.classList.add("fade-out");
            박스.target.classList.remove("fade-in");
            
        }
    })
});

for(let  i=0; i<sections.length; i++){
        observer.observe(sections[i]);
     
}


fadeFunction=setInterval(function(){
    setTimeout(function(){
        if (currentNum==words.length-1) {
            beforeNum=currentNum;
            currentNum=0;
        }
        else{
            beforeNum=currentNum;
            currentNum+=1;
        }
    },3000);
    words[currentNum].classList.remove("d-none");
    words[currentNum].classList.add("fade-in");    
    words[beforeNum].classList.remove("fade-in");
    words[beforeNum].classList.add("d-none");

  
},3000);
