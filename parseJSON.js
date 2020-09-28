
//let obj = JSON.parse(file);
/*
function parse(obj) {
    let keys = Object.keys(obj);
    let values = [];

    for (key in obj) {
        values.push(obj[key]);
    }

    return {keys: keys, values: values};
}
*/
//console.log(parse(obj));

/*
function parse(obj) {
//    let keys = Object.keys(obj);
    let keys = [];
    let values = [];

    let some = [];

    for (key in obj) {
        if (typeof obj[key] != 'object') {
            values.push(obj[key]);
        } else {
//            keys.push()
            some.push(obj[key]);
        }
        keys.push(key);
    }

    return {keys: keys, values: values, some: some};
}
*/

//let keys = Object.keys(obj);

//let arr = [];
/*
function parse(obj, i, j) {
//    let arr = [];

    let keys = Object.keys(obj);

//    if (n == 0) {
//    if (i == keys.length - 1 && j == obj[keys[i]].length) {
    if (i == keys.length) {
        console.log(keys.length, i);
        return arr;
    } else {
        let k = keys[i];
        let v = obj[k];
        let pre = {k: v};

        if (j > 0) {
            let k2 = Object.keys(k);
            v = obj[k2[j]];
            pre = {k2: v};
        }


        arr.push(pre);
        console.log('so');
        if (typeof v == 'object') {
            console.log(v);
            return parse(obj, i, j = j + 1);
        } else {
            console.log('this');
            return parse(obj, i = i + 1, j);
        }
    }
}
*/

/*
function parse(obj) {
    let arr = [];
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let pre = {};
        let k = keys[i];
        let v = obj[k];
        pre[k] = v;
        arr.push(pre);
        console.log(1);
        if (typeof obj[keys[i]] == 'object') {
//            let k2 = Object.keys(obj[keys[i]]);
            let k2 = Object.keys(obj[k]);
            console.log(k2);
            console.log(k2[0]);
            console.log(obj[k][k2[0]]);
//            for (let j = 0; j < obj[keys[i]].length; j++) {
//            let a = '';
            let a = [];
            for (let j = 0; j < k2.length; j++) {
//                let a = '';
//                pre[k2[j]] = obj[k2[j]];
//                pre[k2[j]] = obj[k][k2[0]];
                pre[k2[j]] = obj[k][k2[j]];
//                arr.push(pre);
//                a += pre;
                a.push(pre);
                console.log(2);
            }
            arr.push(a);
        }
    }

    return arr;
}
*/

function parse(obj) {
    let arr = [];
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let pre = {};
        let k = keys[i];
        let v = obj[k];

        if (typeof v == 'object') {
            let k2 = Object.keys(v);
            pre[k] = typeof v;
            arr.push(pre);
            pre = {};
            for (let j = 0; j < k2.length; j++) {
                pre[k2[j]] = obj[k][k2[j]];
//                a.push(pre);
                arr.push(pre);
                pre = {};
                console.log(2);
            }

        } else {
            pre[k] = v;
            arr.push(pre);
            console.log(1);
        }
    }

    arr.forEach(el => {
//        console.log(el);
        let k3 = Object.keys(el);
//        console.log(k3, el[k3]);
//        console.log(k3[0], el[k3[0]]);

        let vAll = el[k3[0]];
        console.log(vAll);
//        console.log(vAll.join(', '));
//        console.log(vAll.toString());

    });

    return arr;
}



