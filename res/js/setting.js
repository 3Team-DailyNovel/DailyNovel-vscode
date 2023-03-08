
// 프로필-------------------------------------------
window.addEventListener("load",function(){
    let s1 = document.querySelector("section");
    let profileBtn = s1.querySelector(".upload-btn");
    let profileTrigerBtn = s1.querySelector(".pro-img");

    profileTrigerBtn.onclick = function(){
        let event = new MouseEvent("click", {
            'view':window,
            'bubbles': true,
            'cancelable':true
        });
        profileBtn.dispatchEvent(event)
    }

    profileBtn.addEventListener("change",()=>{
        let reader = new FileReader();
        reader.readAsDataURL(profileBtn.files[0]);
        reader
    })

});

