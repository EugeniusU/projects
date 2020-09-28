
let input = document.querySelector('input');
let words = document.querySelector('.words');
let block = document.querySelector('.block');

input.addEventListener('change', function() {
    Array.prototype.forEach.call(input.files, function(file) {
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            let obj = JSON.parse(reader.result);
//            let keys = Object.keys(obj);
//            console.log(parse(obj));
            console.log(parse(obj, 0, 0));
            let so = parse(obj);

            so.forEach(el => {
                let k = Object.keys(el);
                let vAll = el[k[0]];
//                words.textContent += k + ': ' + vAll + '\n';
//                block.textContent += k + ': ' + vAll + '\n';
//                let str = '<pre>' + k + ': ' + vAll + '</pre>';
///                let str = k + ': ' + vAll + '\n';
                if (typeof vAll == 'object') {
                    vAll = vAll.join(', ');
                }
                let str = k + ': ' + vAll;
//                console.log(str);
//                block.textContent += '<pre>' + k + ': ' + vAll + '</pre>';
//                block.textContent += str;
                let p = elt('p');
                p.textContent = str;
                block.appendChild(p);
//                console.log(block.textContent);
//                document.write(str);
            });

        });
        reader.readAsText(file);
    });
});

/*
input.addEventListener("change", function() {
    Array.prototype.forEach.call(input.files, function(file) {
        var reader = new FileReader();
        reader.addEventListener("load", function() {
//                console.log("File", file.name, "starts with",
//                    reader.result.slice(0, 20));
            let j = 0;
            console.log(JSON.parse(reader.result));
            let obj = JSON.parse(reader.result);
            let i = 0;
            let w = document.querySelector('.words');
            for (key in obj) {
//                    let div = w.appendChild(elt('div', 'a' + i));
                //          let div = w.appendChild(elt('div', '' + key, key + ': ' + obj[key].join(', ')));
//                    let j= 0;
                obj[key].forEach(function(el) {
                    let e = elt('div', 'a' + i, el);
                    let n = Math.floor(Math.random() * colors.length);


                    //                       e.style.background = colors[n];
                    e.style.background = colors[j];
                    console.log(colors[j]);
                    j++;
                    e.textContent = el;
                    w.appendChild(e);
                    //                       let div = w.appendChild(elt('div', "", el));
                });
                console.log(key);
                console.log(obj[key]);
                i++;
            }
            //              let div = elt('div');
            console.log(document.body.childNodes);
        });
        reader.readAsText(file);
    });
});
 */

function elt(el) {
    let e = document.createElement(el);
    return e;
}