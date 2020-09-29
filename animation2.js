
let colors = ['green', 'yellow', 'pink', 'magenta', 'purple', 'deeppink', 'mistyrose', 'springgreen', 'aliceblue', 'indigo'];

function random(n, s) {
    if (s) {
        return Math.abs(Math.floor(Math.random() * n + s));
    }
    return Math.floor(Math.random() * n);
}

function elt(el, id) {
    let e = document.createElement(el);
    if (id) {
        e.id = 'a' + id;
    }
    return e;
}


function place(r) {
    return Math.PI * r * r;
}
console.log(place(100));
console.log(place(200));


function Vector(x, y) {
    this.x = x;
    this.y = y;
}

function position(center, radius) {
    let pos = {};
    if (Math.random() > 0.5) {
        pos.x = random(center.x, radius);
        if (Math.random() > 0.5) {
            pos.y = random(center.y, radius);
        } else {
            pos.y = random(center.y, -radius);
        }
    } else {
        pos.x = random(center.x, -radius);
        if (Math.random() < 0.5) {
            pos.y = random(center.y, -radius);
        } else {
            pos.y = random(center.y, radius);
        }
    }
    return pos;
}

let c = new Vector(100, 100);

console.log(position(c, 100));
console.log(position(c, 100));

let canvas = document.querySelector('canvas').getContext('2d');
console.log(canvas);

canvas.canvas.height = 300;
canvas.canvas.width = 300;

canvas.canvas.style.position = 'absolute';

canvas.canvas.style.borderRadius = 50 + '%';

canvas.canvas.style.left = 400 + 'px';
canvas.canvas.style.top = 100 + 'px';

console.log(canvas);

function draw(vector, radius, width, height) {

    let pos = position(vector, radius);
    let color = random(colors.length);

    canvas.beginPath();
    canvas.strokeStyle = colors[color];
    canvas.lineWidth = 10;
    canvas.moveTo(pos.x, pos.y);
    canvas.lineTo(pos.x + width, pos.y + height);

    canvas.stroke();
}

let vectors = [];

function draw2(vector, radius, object) {
    let pos, color;
    if (object) {
        pos = object.pos;
        color = object.color;
    } else {
        pos = position(vector, radius);
        color = random(colors.length);

        let obj = {pos: pos, color: color};
        vectors.push(obj);
    }

    canvas.beginPath();
    canvas.strokeStyle = colors[color];
    canvas.lineWidth = 10;
    canvas.arc(pos.x, pos.y, 5, 0, 7);
    canvas.stroke();
}


let pl = canvas.canvas.getBoundingClientRect();
let c2 = new Vector(pl.width / 2 + pl.left, pl.height / 2 + pl.top);

let start = null;
let i = 0;
let j = 0;
function animate(time) {
    if (!start) {
        start = time;
    }
    let progress = time - start;
    draw2(c2, 5);
    requestAnimationFrame(animate);
    if (i == 100) {
        canvas.fillStyle = 'white';
        canvas.fillRect(0, 0, pl.width, pl.height);
        console.log(vectors);
        j++;
        let v2 = vectors.slice(vectors.length - 50);
        console.log(v2);
        vectors = [];
        i = 0;
        v2.forEach(function (el) {
            draw2(c2, 5, el);
        });
    }
    i++;
}

requestAnimationFrame(animate);


//console.log(performance.now());

console.log(canvas.canvas.height);
console.log(canvas.canvas.style.top);

//console.log(canvas.canvas.x);

console.log(canvas.canvas.getBoundingClientRect());

console.log(vectors);

for (let i = 0; i < 1; i++) {
    draw2(c2, 10);
    console.log(vectors);
    console.log(vectors[0]['pos']);
}

console.log(vectors);
console.log(c2);
