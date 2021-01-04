
const wordEl = document.getElementById('word');
const wrongLettersContainerEl = document.getElementById('wrong-letters-container');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('figure-part'); 

const words = ['pandemic', 'confirmed case', 'immunity', 'outbreak', 'quarantine', 'self-isolation', 'mask', 'social distancing', 'ventilator', 'antibody', 'isolation'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
	wordEl.innerHTML = `
		${selectedWord
			.split('')
			.map(
				letter => `
					<span class="letter">
						${correctLetters.includes(letter) ? letter : ''}
					</span>
				`
			)
			.join('')
		}
	`;

	const WordFromSelectedLetters = wordEl.innerText.replace(/\n/g,'');
	
	if (WordFromSelectedLetters == selectedWord) {
		finalMessage.innerText = 'Congrats! You won!';
		popup.style.display = 'flex';
	}
}

function shownNotification() {
 console.log("wrong lettert");
}

//Keyboard pressing
window.addEventListener('keydown', e => {
	if((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 32 || e.keyCode == 189) {
		const pressedLetter = e.key;

		if (selectedWord.includes(pressedLetter)) {
			if (!correctLetters.includes(pressedLetter)) {
				correctLetters.push(pressedLetter);
				displayWord();
			} else {
				shownNotification();
			}
		} else {
			if (!wrongLetters.includes(pressedLetter)) {
				wrongLetters.push(pressedLetter);
				wrongLettersEl.innerText += pressedLetter;
				wrongLettersContainerEl.style.display = 'flex';
			}
		}
	}
});

displayWord();

