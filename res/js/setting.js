
// 프로필-------------------------------------------

window.addEventListener("load",function(){
    let s1 = document.querySelector("section");
    let profileBtn = s1.querySelector(".upload-btn");
    let profileTrigerBtn = s1.querySelector(".pro-img");

    profileTrigerBtn.onclick = function(){       // 프로필 이미지를 누르면 input type="file"이 실행되는 트리거
        let event = new MouseEvent("click", {
            'view':window,
            'bubbles': true,
            'cancelable':true
        });
        profileBtn.dispatchEvent(event)
    }

    profileBtn.addEventListener("change",()=>{  // 사진을 올리면 프로필 사진이 바뀌게 만들기
        let reader = new FileReader();
        reader.readAsDataURL(profileBtn.files[0]);
        console.log(profileBtn.files[0]);
        profileTrigerBtn.style.backgroundImage=url(profileBtn.files[0]);
            
    
    })

});

