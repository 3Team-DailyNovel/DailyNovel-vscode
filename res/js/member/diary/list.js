let listParent = document.querySelector("#list-container")

let listBox = ` <div id="list-box" class="list-box flex-type1 ">
<div class="card-header lc-center">
  <div class="list-feel-img"></div>
  <div>2022/12/31 (토) </div>
  <div>15:34</div>
</div>
  <div class="title">제목: ------------</div>
  <div class="description">내용: -------------------</div>
</div>`;


let boxCount = 0;

for(let i=0; i<6; i++) {
    
    listParent.innerHTML += listBox;
    boxCount++;

    if(boxCount>5)
    listParent.style.

}

console.log(boxCount);