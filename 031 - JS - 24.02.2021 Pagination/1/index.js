let users = [
    {name: 'name1', surname: 'name1', age: 25},
    {name: 'name2', surname: 'name2', age: 25},
    {name: 'name3', surname: 'name3', age: 25},
    {name: 'name4', surname: 'name4', age: 25},
    {name: 'name5', surname: 'name5', age: 25},
    {name: 'name6', surname: 'name6', age: 25},
    {name: 'name7', surname: 'name7', age: 25},
    {name: 'name8', surname: 'name8', age: 25},
    {name: 'name9', surname: 'name9', age: 25},
    {name: 'name10', surname: 'name10', age: 25},
    {name: 'name11', surname: 'name11', age: 25},
    {name: 'name12', surname: 'name12', age: 25},
    {name: 'name13', surname: 'name13', age: 25},
];

let table = document.querySelector('#table');

let pagination = document.querySelector('#pagination');

let notesOnPages = 3;

let countOfItems = Math.ceil(users.length / notesOnPages);

let showPage = (function () {
    let active;

    return function (item) {
        if(active) {
            active.classList.remove('active');
        }

        active = item;

        item.classList.add('active');

        let pageNum = item.innerHTML;

        let start = (pageNum-1)*notesOnPages;

        let end = (pageNum==Math.ceil(users.length / notesOnPages))?(users[users.lastIndexOf]):(start + notesOnPages);

        let notes = users.slice(start, end);

        table.innerHTML = '';

        for (let note of notes) {
            let tr = document.createElement('tr');
            table.append(tr);
            createCell(note.name, tr);
            createCell(note.surname, tr);
            createCell(note.age, tr);
        }

    }
}());

let items = [];

for (let i = 0; i < countOfItems; i++) {
    let li = document.createElement('li');
    li.innerHTML = i+1;
    pagination.appendChild(li);
    items.push(li);
}

showPage(items[0]);

for (let item of items) {
    item.addEventListener('click', function () {
        showPage(this);
    })
}

function createCell(text, tr) {
    let td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}