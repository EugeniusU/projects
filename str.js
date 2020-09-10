
// testing str

let str = '';
let arr = [];

const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', function(error, file) {
	if (error) {
		throw error;
	}
	str = new String(file);
  
	let keys = Object.keys(str);
	let i = 0;
	let values = [];
	
	keys.forEach(key => {
		values.push(str[key]);
	});
	
	let array = [];
	
	values.forEach(key => {
		arr.push(key);
		if (key == '\n') {
			array.push(arr.join(''));
			arr = [];
		} 
		if ((arr.length > 0) && i == (values.length - 1)) {
			console.log('this');
			array.push(arr.join(''));
		}
		i++;
		console.log(i);
	});
	
	console.log(arr);
	console.log(array);
	
	console.log(array[0]);
});
