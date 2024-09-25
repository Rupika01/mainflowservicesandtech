function openModal(imgSrc){
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}