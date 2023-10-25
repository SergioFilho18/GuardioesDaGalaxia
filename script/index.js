const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
const images = document.getElementById('images')

  function changeStatusButtons() {

    let prev = document.getElementById('button_prev')


    let next = document.getElementById('button_next')


  if(activeMember == 0){
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if(activeMember == members.length - 1) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
  
}

changeStatusButtons();

function navigationMember(direction) {
  activeMember = activeMember + direction

  images.style.transform = `translateY(${-100 * activeMember}vh)`;
  changeStatusButtons();
}