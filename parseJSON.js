
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
        let k3 = Object.keys(el);
        let vAll = el[k3[0]];
        console.log(vAll);
    });

    return arr;
}
