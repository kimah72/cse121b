/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Kimberly Miner';
let currentYear = '2023';
let profilePicture = 'images/myphoto.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Posole', ' Avocado Toast', ' Banana Bread', ' Ice Cream'];
foodElement.innerHTML += `<br>${favoriteFoods}`;
let newFavoriteFood = ' Cheese';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop(favoriteFoods);
foodElement.innerHTML += `<br>${favoriteFoods}`;




