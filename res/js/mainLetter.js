const HITEXT = ["안녕하세요!", "하루를 정리해주세요","오길 기다렸어요", "이야기를 들려주세요","어서오고","반갑고"]

let addHello = document.querySelector("#add-hello");
// console.log(Math.floor(Math.random() * HITEXT.length))
addHello.insertAdjacentHTML('beforeend',`<div class="h2 mgt-2">${HITEXT[Math.floor(Math.random() * HITEXT.length)]}`)