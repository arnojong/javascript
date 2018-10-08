const typeList = document.querySelector('.car-type__list');
const form = document.querySelector('.car-search');
const typeExist = false;

const cars = [
    {
        type: 'tesla',
        doors: 5,
        color: 'green'
    },
    {
        type: 'ferrari',
        doors: 3,
        color: 'red'
    },
    {
        type: 'hummer',
        doors: 5,
        color: 'black'
    },
    {
        type: 'skoda',
        doors: 5,
        color: 'white'
    }
];

console.log(cars);

for (let car of cars) {
    const li = document.createElement('li');
    li.textContent = car.type;
    
    typeList.appendChild(li);
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const searchInput = document.querySelector('.car-search__type').value;

    for (var i = 0; i < cars.length; i++){
        if (cars[i].type == searchInput)
    }


    if (searchInput === car.type) {
        alert('Is aanwezig');
    } else {
        alert('Hebben we niet pik');
    }

});