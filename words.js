
let word = 'цветение';

let words = ['цвет', 'тени', 'нет'];

let list = document.querySelector('.list');
let letters = document.querySelector('.letters');
let point = document.querySelector('.point');
let choosen = [];
let finded = [];
let points = 0;
function elt(el, id) {
	let e = document.createElement(el);
	if (id) {
		e.id = id;
	}
	return e;
}
point.textContent = points;
function build(word) {
	for (let i = 0; i < word.length; i++) {
		let span = elt('span', 'a' + i);
		span.textContent = word[i];
		letters.appendChild(span);
	}
}

function e(letters) {
	let spans = letters.querySelectorAll('span');
	
	for (let i = 0; i < spans.length; i++) {
		spans[i].addEventListener('click', event => {
			console.log(event.target.textContent);
			
			let id = event.target.id.slice(1);
			
			let find = false;
			let pos = 0;
			choosen.forEach((el, index) => {
				if (el.id == id) {
					find = true;
					pos = index;
				}
			});
			
			if (find) {
				choosen.splice(pos, 1);
				
				event.target.style.background = 'magenta';
				
				console.log(choosen);
			} else {
			
			let obj = {};
			obj.value = event.target.textContent;
			obj.id = event.target.id.slice(1);
			obj.state = true;
			
			choosen.push(obj);
			
			event.target.style.background = 'pink';
			
			console.log(choosen);
			}
		});
	}
}

build(word);

e(letters);

let button = document.querySelector('button');

button.addEventListener('click', event => {
	let state = false;
	let find = 0;
	
	let divs = list.querySelectorAll('div');
	let divsA = Array.prototype.slice.call(divs, 0);
	console.log(divsA);
	let array = [];
	
	choosen.forEach(el => {
		array.push(el.value);
	});
	
	let str = array.join('');
	
	console.log(str);
	divsA.forEach((el, index) => {
		if (el.textContent == str) {
			state = true;
			find = index;
		}
	});
	
	if (state) {
		divsA[find].style.color = 'white';
		console.log('fine');
		
		let l = letters.querySelectorAll('span');
		
		let lA = Array.prototype.slice.call(l, 0);
		lA.forEach(el => {
			el.style.background = 'magenta';
		});
		
		choosen = [];
		if (finded.indexOf(str) < 0) {
		finded.push(str);
		points += str.length;
		point.textContent = points;
		button.style.background = 'green';
		setTimeout(() => {
			button.style.background = '';
		}, 1000);
		} else {
			button.style.background = 'orange';
			setTimeout(() => {
				button.style.background = '';
			}, 1000);
		}
	} else {
		button.style.background = 'orange';
		setTimeout(() => {
			button.style.background = '';
		}, 1000);
		lA.forEach(el => {
			el.style.background = 'magenta';
		});
		choosen = [];
	}
	
	
});

function buildList(words) {
	for (let i = 0; i < words.length; i++) {
		let div = elt('div', words[i]);
		for (let j = 0; j < words[i].length; j++) {
			let span = elt('span');
			span.textContent = words[i][j];
			div.appendChild(span);
		}
		list.appendChild(div);
	}
}

buildList(words);
