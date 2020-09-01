const langJSON = JSON.parse(lang);

let mounth = [];
let date1 = new Date();

let summer = document.querySelector('.summer');
let autumn = document.querySelector('.autumn');
let winter = document.querySelector('.winter');
let spring = document.querySelector('.spring');

function fullWeek(date, json) {
    let week = {days: [], numbers: []};
    let key = json['english']['days'];
    let dayNum = new Date().getDate();
    let dayNow = String(date).slice(0, 3).toLowerCase();
    let days = Object.keys(key);
    let weekNow = [];
    let index = 0;

    for (let i = 0; i < days.length; i++) {
        if (days[i].slice(0, 3) == dayNow) {
            index = i;
        }
    }

    index += 1;         
    
    for (let i = index; i < key.length; i++) {
        weekNow.push(key[i]);
    }

    for (let i = 0; i < index; i++) {
        weekNow.push(key[i]);
    }

    week.days = weekNow;
    weekNow.forEach(() => {
        week.numbers.push(dayNum);
        dayNum++;
    });

    return week;
}

function buildTable(week) {
    let now = week.now;         // this day
    let table = document.querySelector('.summer').getElementsByTagName('table')[0];
    let tr = document.createElement('tr');
    let tr2 = document.createElement('tr');

    // apply mounth support -> {mounth: [{week: [days], [numbers]}, {week: [days], [numbers]}]}

    for (let i = 0; i < week.days.length; i++) {
        let th = document.createElement('th');
        let word = week.days[i];
        word = word[0].toUpperCase() + word.slice(1);

        th.textContent = word;
        tr.appendChild(th);
    }

    for (let i = 0; i < week.numbers.length; i++) {
        let td = document.createElement('td');
        td.textContent = week.numbers[i];
        if (week.days[i] == 'saturday' || week.days[i] == 'sunday') {
            td.style.color = 'deeppink';
        }
        if (week.numbers[i] == now) {
            td.style.background = 'mistyrose';
        }
        tr2.appendChild(td);
    }

    table.appendChild(tr);
    table.appendChild(tr2);
}

function langT() {

}


//console.log(date);
//console.log(fullWeek(date, langJSON));
///buildTable(fullWeek(date, langJSON));

function fullMounth(date, langJSON) {
//    let beginDay =
}

function fWeek(date, langJSON) {
    let week = {days: [], numbers: []};         // probably change to {names: [], values: []}
    let days = langJSON['english'].days;
    let currentDay = String(date).slice(0, 3).toLowerCase();
    let currentNum = date.getDate();
    let currentFullDayName = '';

    for (let i = 0; i < days.length; i++) {
        if (days[i].slice(0, 3) == currentDay) {
            currentFullDayName = days[i];
        }
    }

    let step = 0;           // step (on days) with monday and current's day

    for (let i = days.indexOf(currentFullDayName); i > 0; i--) {
        step++;
    }

    let weeksNum = [];

    function getNum(step) {
        if (step == 0) {
            return weeksNum;
        }
        let num = new Date(date.getTime() - (step * 1000 * 60 * 60 * 24)).getDate();
//        console.log(num);
        week.numbers.push(num);
        weeksNum.push(num);
        return getNum(step - 1);
    }

    getNum(step);

    for (let i = 0; i < 7 - weeksNum.length; i++) {
        week.numbers.push(i + currentNum);
    }

    week.days = days;
//    console.log(weeksNum);
    week.now = currentNum;
    return week;
}

//console.log(fWeek(date, langJSON));
//buildTable(fWeek(date, langJSON));

let date2 = new Date(Date.now() + 366 * 1000 * 60 * 60 * 24);
console.log(date2);

buildTable(fWeek(date2, langJSON));
