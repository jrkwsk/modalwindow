//wez diva modal
var modal = document.getElementById('simpleModal');
//wez guzik
var modalBtn = document.getElementById('modalBtn');
//wez krzyzyk zamykajacy
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//sprawdzaj czy klika na button
modalBtn.addEventListener('click', openModal);

function openModal() {
modal.style.display='block'
}


//sprawdzaj czy klika na krzyzyk
closeBtn.addEventListener('click', closeModal);

function closeModal() {
modal.style.display='none'
}