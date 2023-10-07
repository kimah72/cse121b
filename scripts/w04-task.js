/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kimberly Miner",
    photo: "images/myphoto2.jpg",
    favoriteFoods: ["Posole", "Ice Cream", "Cheese", "Chocolate"],
    hobbies: ["Sewing", "Crocheting", "Cooking", "Baking"],
    placesLived: []

    }
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Bountiful, UT',
        length: '21 years'
    },
    {
        place: 'Salt Lake, UT',
        length: '2 years'
    },
    {
        place: 'Orem, UT',
        length: '12 years'
    },
    {
        place: 'Spanish Fork, UT',
        length: '15 years'
    },
    {
        place: '',
        length: ''
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector('img');
imageElement.setAttribute('id', "photo")
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`)
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
const placesLivedElement = document.createElement("ul");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.innerHTML = `<strong>${place.place}`;

    let dd = document.createElement('dd');
    dd.innerHTML = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});