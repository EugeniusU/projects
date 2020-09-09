
const html = document.querySelector('html');

let settingsUsed = {};
//settingsUsed.text = {fontSize: '', color: ''};
settingsUsed = getFromStorage();

function parse(type) {

}

function type() {

}

//function parseHTML()          // may be better make self parse functions for each type


let content = document.querySelector('.content');
console.log(content);
console.log(content.childNodes);

let text = document.querySelector('.text');
console.log(text);
console.log(text.childNodes);

let settings = document.querySelector('.settings');
console.log(settings);
console.log(settings.childNodes);

//sett


let textSize = settings.querySelector('select');
console.log(textSize);

let textSizes = [];



textSize.addEventListener('change', function(event) {

    if (textSizes.length == 0) {
//        let arr = Array.prototype.call.slice(0, event.currentTarget);
//        console.log(arr);

        let opts = textSize.querySelectorAll('option');
        console.log(opts);

        opts.forEach(opt => {
            if (opt.value) {
                textSizes.push(Number(opt.value));
            }
        });

        console.log(textSizes);
    }

    console.log(event);
    console.log(event.target);
//    console.log(event.value);         // undefined
    console.log(event.currentTarget);
//    console.log(event.currentTarget.value);           // this equal
//    console.log(event.target.value);                  // this

    let now = event.target.value;

    console.log('now', now);
//    console.log(Number(now) in textSizes);
//    console.log(Number(now));
//    console.log(18 in textSizes);
//    console.log(textSizes);

    if (Number(now) in textSizes) {
        console.log(now);

    }

    text.style.fontSize = Number(now) + 'px';
///    settingsUsed.text = {fontSize: Number(now) + 'px'};
    settingsUsed.text.fontSize = Number(now) + 'px';
//    settingsUsed.text.fontSize = event.target.value;
    console.log(settingsUsed);

    saveButton();
});

let textColor = settings.querySelector('input');
console.log(textColor);

textColor.addEventListener('change', function(event) {
    console.log(event);

    text.style.color = event.target.value;
///    settingsUsed.text.color = event.target.value;
    settingsUsed.text.color = event.target.value;

    saveButton();
});


function saveToStorage(type) {
//    let t = type;
    for (key in type) {
        let value = JSON.stringify(type[key]);
//        localStorage.getItem(key, value);
        localStorage.setItem(key, value);
    }
    console.log('done');
}

function saveFile(file) {

}

function saveSettings(settings) {
//    let obj = JSON.stringify(settings);
//    return obj;
    return settings;
}
/*
let button = document.querySelector('button');

button.addEventListener('click', function (event) {
//    settingsUsed = getFromStorage();
    let saved = getFromStorage().text;
//    console.log(saved.text);
    console.log(saved);
    console.log(settingsUsed);

    for (key in saved) {
        console.log(key in settingsUsed.text);
        console.log(settingsUsed.text);
        if (!(key in settingsUsed.text)) {
            console.log(key);
            settingsUsed.text[key] = saved[key];
        }
    }

//    console.log(settingsUsed);
    saveToStorage(saveSettings(settingsUsed));
//    console.log(getFromStorage());
});
*/
function getFromStorage() {
    let json = {};
//    var json;
    for (key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
//            json[key] = localStorage.getItem(key);
            json[key] = JSON.parse(localStorage[key]);
        }
    }
//    settingsUsed
//    json = JSON.parse(json);
//    settingsUsed = json;
    return json;
}

console.log(getFromStorage());

function changeSettings(obj) {
    for (key in obj) {
        if (typeof obj[key] == 'object') {
            console.log(obj[key]);
            let names = obj[key];
            for (value in names) {
                console.log(names[value]);
//                settings.style.value = names[value];
                console.log(value);
                text.style[value] = names[value];
            }
        } else {
            //           let value = obj[key];
            //           settings[value] =
            console.log(typeof obj[key]);
            console.log(obj[key]);
        }
    }
    console.log('change');
}

changeSettings(getFromStorage());

console.log(settingsUsed.text);

function saveButton() {
    let saved = getFromStorage().text;

    for (key in saved) {
        if (!(key in settingsUsed.text)) {
            settingsUsed.text[key] = saved[key];
        }
    }

    saveToStorage(saveSettings(settingsUsed));
}

let input = document.querySelector('#file');
console.log(input);
let data = '';
input.addEventListener('change', function(event) {
    console.log(event);
    Array.prototype.forEach.call(input.files, function(file) {
        console.log('2', event);
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            console.log('File', file.name, 'starts with', reader.result.slice(0, 20));
//            data = reader.result;
//            console.log(data);
            console.log(reader.result);
            parseText(reader.result);
        });
        reader.readAsText(file);
    });
});

function parseText(file) {
    let div = elt('div', 'test');
    text.appendChild(div);
    let t = document.querySelector('#test');


    let w = file.split(' ');
//    console.log(w);

//    let regexp = /(\\r\\n\\r|\\n)/g;
//    let regexp = /(\r|\n)/g;
//    let regexp = /((\r)*\n)/g;
///    let regexp = /((\r)*\n)/;
    let regexp = /(\r?\n)+/;
//    let regexp2 = /\s/g;
//    let regexp3 = /^./g;

///    console.log(regexp.exec(file));
//    console.log(file.match(regexp));
///    console.log(regexp.exec(file).index);
//    console.log(file.slice(0, 49));

//    console.log(regexp2.exec(file));
//    console.log(file.match(regexp2));

//    console.log(regexp.exec(file).index);

//    console.log(regexp2.test(file));

    console.log(file.indexOf('\r\n'));

//    console.log(file.indexOf)
    console.log(file.trim());

    let file2 = file;

    if (regexp.test(file)) {
        file2 = file.split('\n');
        file2.forEach(str => {
            if (str != '\n') {
                let p = elt('p');
                p.textContent = str;
                text.appendChild(p);
            }
        });
    }


/*    if (regexp.test(file)) {
//        console.log(regexp.exec(file));
//        console.log(file.match(regexp));
//       let file2 = file.split('\r');
       console.log(file2);
       file2.forEach(a => {
           String(a).trim();
           console.log(a);
       });
       console.log(file2);
    }

    console.log(file2[4]);
    console.log(file2[4].trim());

    let str = '\n abc \r\n';
    str.trim();
    console.log(str);*/
/*    let file2 = file;

    if (regexp.test(file2)) {
        let original = '';
        let array = [];
        let arr2 = [];
//        let f =
        let i = 0;
        let now = 0;
        while (regexp.test(file2) && i < 10) {
//        while (regexp.test(file)) {
//        while (i < 5) {
//        while (regexp.exec(file).index && i < 10) {
            i++;
//            original += file.slice(0, regexp2.exec(file).index);
///            let pre = file.slice(0, regexp.exec(file).index);
            let pre = regexp.exec(file2).index;

            array.push(pre);
            console.log(array);

            if (pre == 0) {
                pre = 1;
            }

//            now = regexp2.exec(file).index;
///            console.log(regexp.exec(file).index);
///            file = file.slice(regexp.exec(file).index);
            file2 = file2.slice(pre);
            arr2.push(file2);
///            console.log(file);
        }
//        console.log(i);
        console.log(array);
        console.log(arr2);*/
/*
        array.forEach(el => {
//            console.log(file[el]);
            if (el != 0) {
                file = file.slice(el);
//                console.log(file.slice(0, el));
                console.log(file);
            }
        });
*/
//        console.log(file.match(regexp).index);
//        console.log(file.match(regexp).index);
//        let arr = file.split(regexp.exec(file)[0]);
//        console.log(arr);
//        let str = file.split('');
//        str.forEach(s => {
//            if (s == )
//        })
///    }

//    console.log(regexp3.exec(file));
//    console.log(file.match(regexp3));

//    t.textContent = file;
//    text.appendChild(t);
}

function elt(element, id) {
    let el = document.createElement(element);
    if (id) {
        el.id = id;
    }
    return el;
}

//console.log(onclick(input));
/*
input.onclick = function(event) {
    console.log(event);
    console.log(22);
};
*/

console.log(input.click());
