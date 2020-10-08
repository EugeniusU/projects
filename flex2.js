
let one = document.querySelector('.one');
let two = document.querySelector('.two');

let divs = {one: one, two: two};

let all = document.querySelector('.all');

let settings = document.querySelector('.settings');
let message = document.querySelector('.message');

let select = document.querySelector('#one');
let select2 = document.querySelector('#two');

function elt(el, className) {
    let e = document.createElement(el);
    if (className) {
        e.className = className;
    }
    return e;
}

for (key in divs) {
    divs[key].addEventListener('click', function(event) {
        let div = elt('div', event.target.className + 's');
        all.appendChild(div);
    });
}

let button = document.querySelector('button');

button.addEventListener('click', function(event) {
    let nodes = all.childNodes;
    let nodesA = Array.prototype.slice.call(nodes, 0);
    console.log(nodes);
    console.log(nodesA);

    let keys = Object.keys(divs);
    let i = 0;

    nodesA.forEach(el => {
        if (el.className != undefined && el.className.slice(0, el.className.length - 1) in divs) {
            console.log(el);
            all.removeChild(el);
            i++;
        }
    });

    messageOut('It was ' + i + ' elements', 3000);

});

function messageOut(text, timeout) {
    message.textContent = text;

    setTimeout(function() {
        message.textContent = '';
    }, timeout);
}
/*
select.addEventListener('change', function(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

    let value = event.target.value;
    let num = 0;
    value.split(' ').forEach(el => {
        if (!isNaN(Number(el))) {
            num = Number(el);
        }
    });

    console.log(num);

    for (key in divs) {
//        divs[key].style.top = num + '%';
        divs[key].style.margin = num + '%';
    }

    messageOut('Now is ' + num + '%', 3000);

});
 */
