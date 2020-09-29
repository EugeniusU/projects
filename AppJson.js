
let input = document.querySelector('input');
let words = document.querySelector('.words');
let block = document.querySelector('.block');

input.addEventListener('change', function() {
    Array.prototype.forEach.call(input.files, function(file) {
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            let obj = JSON.parse(reader.result);
            console.log(parse(obj, 0, 0));
            let so = parse(obj);

            so.forEach(el => {
                let k = Object.keys(el);
                let vAll = el[k[0]];
                if (typeof vAll == 'object') {
                    vAll = vAll.join(', ');
                }
                let str = k + ': ' + vAll;
                let p = elt('p');
                p.textContent = str;
                block.appendChild(p);
            });
        });
        reader.readAsText(file);
    });
});

function elt(el) {
    let e = document.createElement(el);
    return e;
}
