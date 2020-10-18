
const field = document.querySelector('.field');

function elt(el, i) {
    let e = document.createElement(el);
    if (i) {
        e.id = 'a' + i;
    }
    return e;
}

function build(index) {
    for (let j = 0; j < index; j++) {
        let div = elt('div', j);
        for (let i = 0; i < index; i++) {
//            let input = elt('input', j + i);
			let input = elt('input', j + '' + i);
            div.appendChild(input);
        }
        field.appendChild(div);
    }
}

build(9);

///const values = change(a2, a2reverse)[0];
///console.log(values);

///console.log(field);
///console.log(field.childNodes);

let find;


function make(values) {
    let divs = [];
    let inputs = [];

    let nodes = Array.prototype.slice.call(field.childNodes, 0);

/*    field.childNodes.forEach(el => {
        if (el.nodeName == 'DIV') {
            divs.push(el);
        }
    });*/

//    console.log(nodes);

    nodes.forEach(el => {
        if (el.nodeName == 'DIV') {
            divs.push(el);
        }
    });

    divs.forEach((el, index) => {
        let inputs2 = Array.prototype.slice.call(el.childNodes, 0);
//        for (let i = 0; i < divs.length; i++) {
        for (let i = 0; i < inputs2.length; i++) {
            let input;
            if (inputs2[i].nodeName == 'INPUT') {
                input = inputs2[i];
                input.value = values[index][i];
            }
//            el.value = values[index][i];

        }
    });

    console.log(divs);

}

///make();

const button = document.querySelector('#make');

button.addEventListener('click', event => {
    console.log(event);
///    console.log(read());

    let arrays = read();
    let reverse = abs23(arrays);
    let values = change(arrays, reverse)[0];

    make(values);

//    console.log(arrays);
//    console.log(reverse);

});

function read() {
//    let divs = [];
//    let inputs = [];

    let arrays = [];

    let nodes = Array.prototype.slice.call(field.childNodes, 0);


    nodes.forEach(el => {
        let array = [];
        if (el.nodeName == 'DIV') {
//            let array = [];
//            divs.push(el);
            let inputs2 = Array.prototype.slice.call(el.childNodes, 0);
            inputs2.forEach(e => {
                if (e.nodeName == 'INPUT') {
                    if (e.value == '') {
                        array.push(0);
                    } else {
                        array.push(Number(e.value));
                    }
                }
            });
            arrays.push(array);
        }
//        arrays.push(array);
    });

    return arrays;
}

const ch = document.querySelector('#ch');
const hint = document.querySelector('#hint');

const message = document.querySelector('.message');

ch.addEventListener('click', event => {
	console.log(event);
	const values = read();
	const reverseV = abs23(values);
	
	const checked = testing(values, reverseV);
	
	if (!checked) {
		message.textContent = 'All right!';
	} else {
		message.textContent = 'Some was wrong, ' + checked + ' finded equals';
	}
});

let pressed = false;

hint.addEventListener('click', event => {
	
		let values = read();
		
//		console.log('v');
//		console.log(values);
		
		let reverseV = abs23(values);
	    find = change(values, reverseV);
	
		let l = function(event) {
		console.log(event);
		console.log(event.target.id);
					
		let f = event.target.id.slice(1, 2);
		let s = event.target.id.slice(2, 3);
					
		f = Number(f);
		s = Number(s);
					
		f = Math.abs(f);
		s = Math.abs(s);
					
		console.log(f, 'f', s, 's');
					
		event.target.value = find[0][f][s];
		
//		console.log('v2');
//		console.log(read());
	};
	
	
	let inputs = inp();
	
	if (!pressed) {
		
//		const values = read();
//		const reverseV = abs23(values);
	
///		const find = change(values, reverseV);
//		find = change(values, reverseV);
		
		hint.textContent = 'Just select input';
		pressed = true;
		
		inputs.forEach(array => {
			array.forEach(el => {
///				el.addEventListener('change', l);
				el.addEventListener('click', l);
//				console.log(inputs);
/*				el.addEventListener('change', event => {
					console.log(event);
					console.log(event.target.id);
					
					let f = event.target.id.slice(1, 2);
					let s = event.target.id.slice(2, 3);
					
					f = Number(f);
					s = Number(s);
					
					f = Math.abs(f);
					s = Math.abs(s);
					
					console.log(f, 'f', s, 's');
					
					event.target.value = find[0][f][s];
					
				});*/
			});
		});
		
	} else {
		hint.textContent = 'hint';
		pressed = false;
		
///		inputs.forEach(array => {
///			array.forEach(el => {
///				el.removeEventListener('change', l);
///				el.removeEventListener('click', l);
//				console.log('d');
//				console.log(inputs);
///				el.removeEventListener('change', event => {
/*					console.log(event);
					console.log(event.target.id);
					
					let f = event.target.id.slice(1, 2);
					let s = event.target.id.slice(2, 3);
					
					f = Number(f);
					s = Number(s);
					
					f = Math.abs(f);
					s = Math.abs(s);
					
					console.log(f, 'f', s, 's');
					
					event.target.value = find[0][f][s];*/
///				});

				

///			});
///		});
		
		let v2 = read();
		
		for (let i = field.childNodes.length - 1; i >= 0; i--) {
//			if (field.childNodes[i].nodeName == 'DIV') {
				field.removeChild(field.childNodes[i]);
//			}
		}
		
//		let v2 = read();
		
		console.log(field.childNodes);
		
		build(9);
		
//		write(values);
		write(v2);
		console.log(values);
	}
	
	
//	function l(event) {
/*	let l = function(event) {
		console.log(event);
		console.log(event.target.id);
					
		let f = event.target.id.slice(1, 2);
		let s = event.target.id.slice(2, 3);
					
		f = Number(f);
		s = Number(s);
					
		f = Math.abs(f);
		s = Math.abs(s);
					
		console.log(f, 'f', s, 's');
					
		event.target.value = find[0][f][s];
	};*/
	
});


function inp() {
	
	let inputs = [];
	
	let nodes = Array.prototype.slice.call(field.childNodes, 0);

    nodes.forEach(el => {
        let array = [];
        if (el.nodeName == 'DIV') {
            let inputs2 = Array.prototype.slice.call(el.childNodes, 0);
            inputs2.forEach(e => {
                if (e.nodeName == 'INPUT') {
					array.push(e);
                }
            });
			
			inputs.push(array);
        }
    });
	
	return inputs;
}


function write(arrays) {
//    let divs = [];
//    let inputs = [];


    let nodes = Array.prototype.slice.call(field.childNodes, 0);


    nodes.forEach((el, index) => {
 //       let array = [];
        if (el.nodeName == 'DIV') {
//            let array = [];
//            divs.push(el);
            let inputs2 = Array.prototype.slice.call(el.childNodes, 0);
            inputs2.forEach((e, index2) => {
                if (e.nodeName == 'INPUT') {
//					console.log(index, 'i', index2, 'i2');
//					console.log(arrays);
					if (arrays[index][index2] == 0) {
						e.value = '';
					} else {
					e.value = arrays[index][index2];
					}
                }
            });
        }
    });
}


