
const fbButton = document.getElementById('F');
const twButton = document.getElementById('T');
const igButton = document.getElementById('I');

fbButton.addEventListener('click', toggleOpacity);
twButton.addEventListener('click', toggleOpacity);
igButton.addEventListener('click', toggleOpacity);


function toggleOpacity(event) {
  event.preventDefault();
  
 
  const bgElements = document.querySelectorAll('.social-icons li');
  
 
  bgElements.forEach(element => {
    element.classList.toggle('opaque');
  });
}



