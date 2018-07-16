function playSound(e){
	const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
	const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

	if(!audio) return; // stop the function
	audio.currentTime = 0; // rewinding it to zero
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if necessary
    this.classList.remove('playing'); //this refers to 
  }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);