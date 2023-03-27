window.addEventListener('load',()=>{
  const tmpSelectBox = document.querySelector(".tmp-select-box");   
  const simpleTmp = document.querySelector("#simple-tmp");
  let container = document.querySelector(".container-2");

  const tmpBox = document.querySelector("#tmp-value");
  const feelBox = document.querySelector("#feel-value");
  const weatherBox = document.querySelector("#weather-value");

  // 모달 관련
  const regTmpModal = document.querySelector("#reg-tmp-modal");
  const regFeelModal = document.querySelector("#reg-feel-modal");
  const modalCloseBtn = document.querySelectorAll("#modal-close-btn");
  const regmodal = document.querySelector(".reg-select-modal");

  tmpBox.addEventListener('click', ()=> {
    modalOpen(regTmpModal,container);
  })   

  feelBox.addEventListener('click', ()=>{
    modalOpen(regFeelModal,container);
  })

  for(let e of modalCloseBtn){
    e.addEventListener('click', ()=> {
      let activeModal = document.querySelector(".reg-select-modal.active");
      activeModal.addEventListener('click', ()=> {
        console.log("ghkrls");
      })
      modalClose(activeModal,container);
      modalClose(regmodal,container);  
    })
  }
/*
  modalCloseBtn.addEventListener('click', ()=>{
    let activeModal = document.querySelector(".reg-select-modal.active");
    activeModal.addEventListener('click', ()=> {
      console.log("ghkrls");
    })
    modalClose(activeModal,container);
    modalClose(regmodal,container);
  })
*/
  function modalOpen(modal, container){
    modal.classList.add('active');        
    container.classList.toggle('position-fixed');
  }

  function modalClose(modal, container){
    modal.classList.remove('active');      
    container.classList.toggle('position-fixed');
  }

  // 추후에 드랍다운 js 만들면서 빠져야할 부분.
  simpleTmp.addEventListener('click', ()=>{
    // tmpSelectBox.classList.toggle("d-none");
    tmpSelectBox.classList.toggle("active");
    simpleTmp.classList.toggle("color-bg-green-2");
    
  })
  

  
})      