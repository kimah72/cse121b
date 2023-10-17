/* W05: Programming Tasks */

/* Declare and initialize global variables */

// 1. Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
let templesElement = document.getElementById("temples");
// 2. Declare a global empty array variable to store a list of temples named templeList.
let templesList = [];

/* async displayTemples Function */

// Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
let displayTemples = (templesList) => {
    templesList.forEach(temple => {
        // Create an <article> element
        let articleElement = document.createElement("article");
        // Create an <h3> element and add the temple's templeName
        let nameElement = document.createElement("h3");
        nameElement.textContent = temple.templeName;
         // Create an <img> element and set its attributes
        let imgElement = document.createElement("img")
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("atl", temple.location);
        // Append the <h3> and <img> elements to the <article> element
        articleElement.appendChild(nameElement);
        articleElement.appendChild(imgElement);
        // Append the <article> element to the global 'templesElement' variable
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/

// Create another function expression called getTemples. Make it an async anonymous, arrow function
let getTemples = async() => {
    // In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
    let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    // Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
    let data = await response.json();
    templesList = (data)
    // The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
    displayTemples(templesList);
    console.log(templesList);
};

/* reset Function */

// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
function reset() {
    let templesElement = document.getElementById("temples");
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    };
};

/* sortBy Function */

// Declare a function expression named sortBy.
// The function should accept a argument in a parameter named temples.
let sortBy = (temples) => {
    reset();
    // Get the value of the HTML element with the ID of sortBy
    let filter = document.getElementById("sortBy").value;
    // Use a switch statement based on the filter
    switch (filter) {
        case "utah":
            // Filter for temples loacated in Utah
            displayTemples(temples.filter((temple) => temple.location.includes("Utah"))
            );
            break;
        case "notutah":
            // Filter for temples located outside Utah
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah"))
            );
            break;
        case "older":
            // Filter for temples dedicated before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1))
            );
            break;
        case "all":
            // Display all temples without any filter
            displayTemples(temples);
            break;
    };
};
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templesList)});

getTemples();