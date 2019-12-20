// Get DOM Elements
const modal = document.querySelector('#my-modal');
//const modal = $("#my-modal")
const modalBtn = document.querySelector('#modal-btn');
const closeBtnX = document.querySelector('.close');
const closeBtn = document.querySelector('#buttonClose');

// Events
modalBtn.addEventListener('click', openModal);
closeBtnX.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

//Calculate
function calculate(){
  var op1=parseInt(document.getElementById("operand1").value)
  var op2=parseInt(document.getElementById("operand2").value)
  document.getElementById("result").value=op1*op2
}
