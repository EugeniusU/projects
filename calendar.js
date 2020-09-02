const langJSON = JSON.parse(lang);

let mounth = [];
let date1 = new Date();

let summer = document.querySelector('.summer');
let autumn = document.querySelector('.autumn');
let winter = document.querySelector('.winter');
let spring = document.querySelector('.spring');

function langT() {

}

function buildTable2(weekOrMonth, season) {
//    console.log(weekOrMonth);
    let table = document.querySelector('.' + season).getElementsByTagName('table')[0];
    let dateNow = new Date().getDate();
    let dayNow = String(new Date()).slice(0, 3).toLowerCase();

    if (Array.prototype.isPrototypeOf(weekOrMonth)) {
        weekOrMonth.forEach(function(week) {
            let days = week.days;
            let numbers = week.numbers;

            let tr = elt('tr');
            let tr2 = elt('tr');

            days.forEach(function(name) {
                let th = elt('th');
                th.textContent = name;
                tr.appendChild(th);
            });

            table.appendChild(tr);

            numbers.forEach(function(value) {
                let td = elt('td');
                let index = numbers.indexOf(value);
                if (days[index] == 'saturday' || days[index] == 'sunday') {
                    td.style.color = 'deeppink';
                }
                if (numbers[index] == dateNow && days[index].slice(0, 3) == dayNow) {
                    td.style.background = 'mistyrose';
                }
                td.textContent = value;
                tr2.appendChild(td);
            });

            table.appendChild(tr2);
        });
    }

//    console.log(table);
}

function elt(el) {
    let element = document.createElement(el);
    return element;
}

function fWeek2(date, langJSON) {
    let week = {days: [], numbers: []};         // probably change to {names: [], values: []}
    let days = langJSON['english'].days;
    let currentDay = String(date).slice(0, 3).toLowerCase();
    let dateNowInMs = date.getTime();
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

    let monday = new Date(dateNowInMs - step * 1000 * 60 * 60 * 24).getTime();
//    console.log(monday);

    for (let i = 0; i < 7; i++) {
        let num = new Date(monday + i * 1000 * 60 * 60 * 24).getDate();
        week.numbers.push(num);
    }

    week.days = days;
    return week;
}

function fMounth2(weeksQ, dateS) {
    let dateInMs = dateS.getTime();
    let moun = dateS.getMonth();
    let firstDay;

    function pre(d, m) {
        if (m != moun) {
            console.log(new Date(d));
            return d;
        }
        d = d - 1000 * 60 * 60 * 24;
        m = new Date(d).getMonth();
        return pre(d, m);
    }

    if (!firstDay) {
        let firstDayInMs = pre(dateInMs, moun);
        firstDay = new Date(firstDayInMs);
        console.log(firstDay);
    }

    let mounth = [];
    let currentDay = firstDay;

    for (let i = weeksQ; i > 0; i--) {
        let week = fWeek2(currentDay, langJSON);
        mounth.push(week);
        currentDay = currentDay.getTime();
        currentDay += 7 * (1000 * 60 * 60 * 24);
        currentDay = new Date(currentDay);
        console.log(currentDay);
    }

    return mounth;
}


buildTable2(fMounth2(5, new Date()), 'summer');


