// // loops.js
// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years",
//         },
//         {
//             place: "Ammon, ID",
//             length: "3 years",
//         },
//         {
//             place: "Sandy, UT",
//             length: "1 year",
//         },
//     ],
// };
// // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// // let favoriteFoods1 = document.createElement("li");
// // favoriteFoods1.textContent = myInfo.favoriteFoods[0];

// // let favoriteFoods2= document.createElement("li");
// // favoriteFoods2.textContent = myInfo.favoriteFoods[1];

// // let favoriteFoods3 = document.createElement("li");
// // favoriteFoods3.textContent = myInfo.favoriteFoods[2];

// // let favoriteFoods4 = document.createElement("li");
// // favoriteFoods4.textContent = myInfo.favoriteFoods[3];

// // let favoriteFoods5 = document.createElement("li");
// // favoriteFoods5.textContent = myInfo.favoriteFoods[4];

// // // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// // document.querySelector("#favorite-foods").appendChild(favoriteFoods1);
// // document.querySelector("#favorite-foods").appendChild(favoriteFoods2);
// // document.querySelector("#favorite-foods").appendChild(favoriteFoods3);
// // document.querySelector("#favorite-foods").appendChild(favoriteFoods4);
// // document.querySelector("#favorite-foods").appendChild(favoriteFoods5);

// // with .forEach
// // Make a variable that accesses "#favorite-foods" in the HTML
// // const foodsElement = document.querySelector("#favorite-foods");
// // // creating a loop function that calls the favoriteFoods property placing it's value in the <li> element
// // function createandAppendFoodItem(food) {
// //     let favoriteFood = document.createElement("li");
// //     // adding the argument food to the text content
// //     favoriteFood.textContent = food;
// //     // appending the children of the <ul> element to the variable
// //     foodsElement.appendChild(favoriteFood);
// // }
// // // adding the loop forEach food item
// // myInfo.favoriteFoods.forEach(createandAppendFoodItem);

// // The map example could be simplified as below:
// const foodsElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join("");

// // OR even more simple - which I like
// // document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
// //   .map((food) => `<li>${food}</li>`)
// //   .join("");
// // reusable!
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  // requires an food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires an place string
  // returns that string embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );