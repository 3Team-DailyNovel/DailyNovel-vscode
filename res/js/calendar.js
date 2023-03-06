let calHeader = document.querySelector("#calendar-header"),
calDate = document.querySelector("#calendar-date"),
calToday = document.querySelector("#current-day");

let curdate = new Date();

let year = curdate.getFullYear();//년
let month = curdate.getMonth()+3;//월
let date = curdate.getDate();//일
let day = curdate.getDay();//요일



function drawDate() {
    
let prevLastDay = new Date(year, month, 0).getDay(); //전달 끝 요일
let prevLastDate = new Date(year, month, 0).getDate(); // 전달 말일
let curDay = new Date(year,month,1).getDay(); //이달 첫 요일
let curLastDay = new Date(year,month+1,0).getDate(); //이달 말일
let nextFirstDay = new Date(year, month+1, 1).getDay(); //다음달 첫 요일

    let dateList = ""; //날짜 표시할 태그 

    // ------날짜 표시 시작 ------
    let tmpPrevDate = prevLastDate;
    for(let i=0 ; i<=prevLastDay;i++){
        // console.log(tmpPrevDate+i-prevLastDay); //전 달 채우기
        dateList+= `<li class ="inactive mgt-3">${tmpPrevDate+i-prevLastDay}</li>`; //전 달 말일까지 표시
    }
    for(let i =0 ;i < curLastDay;i++){
        // console.log(i+1);//이달 채우기
        dateList+= `<li class ="active mgt-3">${i+1}</li>`; //1일부터 차례대로 
    }
    let nextDay = 1;
    for(let i=nextFirstDay;i<=6;i++){
        // console.log(nextDay++); //다음달 채우기 이거 다시생각
        dateList += `<li class ="inactive mgt-3">${nextDay++}</li>`;
    }

    calDate.innerHTML = dateList ;
} 
drawDate();

// calDate.innerHTML = aaaaaa;
let aaa= new Date(year,month,0,day);
// console.log(aaa);