
const wordEl = document.getElementById('word');
const wrongLettersContainerEl = document.getElementById('wrong-letters-container');
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
}

displayWord();

console.log(selectedWord);
