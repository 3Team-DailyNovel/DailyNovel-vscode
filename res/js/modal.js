window.addEventListener('load',()=>{
  const tmpSelectBox = document.querySelector(".tmp-select-box");   
  const simpleTmp = document.querySelector("#simple-tmp");
  const container = document.querySelector(".container-2");

  const tmpBox = document.querySelector("#tmp-value");
  const feelBox = document.querySelector("#feel-value");
  const weatherBox = document.querySelector("#weather-value");

  // 모달 관련
  const regTmpModal = document.querySelector("#reg-tmp-modal");
  const modalCloseBtn = document.querySelector("#modal-close-btn");
  const modal = document.querySelector(".reg-select-modal");

  tmpBox.addEventListener('click', ()=> {
    modalOpen(regTmpModal,container);
  })   

  modalCloseBtn.addEventListener('click', ()=>{
    modalClose(modal,container);
  })

  function modalOpen(modal, container){
    modal.classList.add('modal-active');
    modal.classList.toggle('pointer-none');
    container.classList.toggle('pointer-none');
    container.classList.toggle('position-fixed');
  }

  function modalClose(modal, container){
    modal.classList.remove('modal-active');
    modal.classList.toggle('pointer-none');
    container.classList.toggle('pointer-none');
    container.classList.toggle('position-fixed');
  }

  // 추후에 드랍다운 js 만들면서 빠져야할 부분.
  simpleTmp.addEventListener('click', ()=>{
    tmpSelectBox.classList.toggle("d-none");
    tmpSelectBox.classList.toggle("active");
    simpleTmp.classList.toggle("color-bg-green-2");
    
  })
  

  
})      