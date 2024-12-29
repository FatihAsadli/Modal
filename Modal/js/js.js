let mainBtn = document.querySelector(".main-btn")
let main = document.querySelector(".main-overlay")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".fa-times")

mainBtn.addEventListener("click", function () {
    modal.classList.add("show-modal");
    main.classList.add("hidden");
  });
  
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    main.classList.remove("hidden");
  });
  