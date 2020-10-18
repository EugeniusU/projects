
const numbers = [];

for (let i = 1; i < 10; i++) {
    numbers.push(i);
}

const numbers2 = [];

for (let i = 9; i > 0; i--) {
    numbers2.push(i);
}

//console.log(numbers);

function full(i2, j2) {
    let array = [];

    for (let i = 0; i < i2; i++) {
        array.push([]);
        for (let j = 0; j < j2; j++) {
            array[i].push(0);
        }
    }

    return array;
}

function printStr(arrays) {
    arrays.forEach(array => {
//        console.log(array.toString());
//        console.log(array + '\n');
        console.log(array.join(' '));
    });
}

///let a2 = full(9, 9);

function abs23(arrays) {
    let v2 = [];
    for (let i = 0; i < arrays.length; i++) {
        let v = [];
        for (let j = 0; j < arrays[i].length; j++) {
            v.push(arrays[j][i]);
        }
        v2.push(v);
    }
    return v2;
}

///let a2reverse = abs23(a2);

function change(arrays, reverse) {
    let indexes = copy(arrays);
    console.log('ind');
    console.log(indexes);
    let c = 0;
    function pre(i, j) {
        if (i == 9 && j == 9) {
            console.log('this');
            return null;
        }

        arrays[i].forEach(el => {
            if (el === 0) {
                console.log('not');
                c++;
            }
        });

        if (c) {
            f2(i, arrays, reverse, indexes);
            console.log('this2');
            c = 0;
        }

    }

    function ff(i) {
        if (i == 9) {
            console.log('all done');
            return null;
        }
        pre(i);
        return ff(++i);
    }

    ff(0);

    console.log(c);

    return [arrays, reverse];
}

function random() {
    return Math.floor(Math.random() * 9);
}


function f2(i, arrays, reverse, indexes) {

    function pre(i, arrays, reverse, indexes) {
        let c = 0;
///        let num = pre3(0, []);
//        let num = pre4(0, arrays[i]);
//        let num = pre22(0, [], indexes[i]);
        let num = pre32(0, [], indexes[i]);
//        console.log(num);
        let first = false;

//        num.forEach(el => {
//            if (el != 0) {
//                first = true;
//            }
//        });

//        first = true;

        arrays[i].forEach((el, index) => {
/*            if (!first) {

                for (let i2 = 0; i2 < arrays.length; i2++) {
///                    if ((arrays[i][i2] != indexes[i][i2]) || (indexes[i][i2] == 0)) {
///                    if (indexes[i][i2] == 0) {
                        arrays[i][i2] = 0;
                        reverse[i2][i] = 0;
///                    arrays[i][i2] = indexes[i][i2];
///                    reverse[i2][i] = indexes[i][i2];
///                    }
                }

                first = true;
            }*/
///            num.forEach((el2, index2) => {
	
			   for (let q = arrays.length - 1; q >= 0; q--) {
	
///                if ((arrays[i].indexOf(el2) < 0) && (reverse[index].indexOf(el2) < 0)) {
//				   if ((arrays[i].indexOf(num[index]) < 0) && (reverse[index].indexOf(num[index]) < 0)) {			// fine
				   if ((arrays[i].indexOf(num[q]) < 0) && (reverse[index].indexOf(num[q]) < 0)) {
///                    arrays[i][index] = el2;			// fixed [index]
///                    reverse[index][i] = el2;			// fixed [index]
					
//					arrays[i][index] = num[index];			// fine
//                    reverse[index][i] = num[index];			// fine
					
					arrays[i][index] = num[q];			
                    reverse[index][i] = num[q];			
					
					
                }
			}
///            });
        });

        arrays[i].forEach(el => {
            if (el === 0) {
///                console.log('not');
                c++;
            }
        });

        if (c) {
            return pre(i, arrays, reverse, indexes);
        } else {
            console.log('fine');
        }
    }

    pre(i, arrays, reverse, indexes);
}

///let test2 = change(a2, a2reverse);
//console.log(test2);

///printStr(test2[0]);
///console.log('');
///printStr(test2[1]);

function testing(arrays, reverse) {
    let finded = 0;

    arrays.forEach((array, ind) => {
        let one = 1;
        array.forEach((el, index) => {
            array.forEach((e, index2) => {
                if (el === e && index !== index2) {
                    one++;
                }
            });
        });
        if (one != 1) {
            console.log(one);
            console.log('not');
            finded++;
        } else {
            console.log('fine');
            console.log(ind);
        }
    });

    reverse.forEach((array, ind) => {
        let one = 1;
        array.forEach((el, index) => {
            array.forEach((e, index2) => {
                if (el === e && index !== index2) {
                    one++;
                }
            });
        });
        if (one != 1) {
            console.log(one);
            console.log('not');
            finded++;
        } else {
            console.log('fine');
            console.log(ind);
        }
    });

    if (!finded) {
        console.log('all done');
    }

    return finded;

}

let u2 = full(9, 9);
//printStr(u2);

//u2[0][5] = 5;

u2[0][0] = 4;
u2[0][1] = 8;

u2[2][3] = 2;

printStr(u2);

let u2reverse = abs23(u2);

console.log('');

printStr(u2reverse);

console.log('');

let t100 = change(u2, u2reverse);

printStr(t100[0]);

console.log('');

printStr(t100[1]);

function copy(arrays) {
    let indexes = [];
    arrays.forEach(array => {
        let arr = [];
        array.forEach(el => {
            if (el != 0) {
                arr.push(el);
            } else {
                arr.push(0);
            }
        });
        indexes.push(arr);
    });
    return indexes;
}

//console.log(copy(u2));
//printStr(copy(u2));

function pre32(i2, array, indexes) {

    if (array.length == numbers.length) {
		console.log('pre32s array', i2);
		console.log(array);
		console.log(indexes);
        return array;
    }

    let n = random();

    if (indexes[i2] != 0) {
        array.push(indexes[i2]);
        return pre32(++i2, array, indexes);
    }

    if (array.indexOf(numbers[n]) < 0) {
        array.push(numbers[n]);
        return pre32(++i2, array, indexes);
    } 
		
    return pre32(i2, array, indexes);
}

///console.log(u2[0]);

///let t20 = copy(u2);

//printStr(t20);

///console.log(pre32(0, [], t20[0]));


//console.log(testing(t100[0], t100[1]));



