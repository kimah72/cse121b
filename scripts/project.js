// Project JavaScript
let result = document.getElementById("result");
let searchButton = document.getElementById("search-button");
// entered the URL for the JSON file from TheMeal DB
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchButton.addEventListener("click", async () => {
    let userInput = document.getElementById("user-input").value;

    // This catches the error of not having an input
    if (userInput.length === 0) {
        result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
    } else {
        try {
            const response = await fetch(url + userInput);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            let theMeal = data.meals[0];
            console.log(theMeal);
            console.log(theMeal.strMealThumb);
            console.log(theMeal.strMeal);
            console.log(theMeal.strArea);
            console.log(theMeal.strInstructions);

            let count = 1;
            let ingredients = [];

            for (let i in theMeal) {
                let ingredient = "";
                let measure = "";
                if (i.startsWith("strIngredient") && theMeal[i]) {
                    ingredient = theMeal[i];
                    measure = theMeal[`strMeasure` + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}`);
                }
            }

            console.log(ingredients);

            result.innerHTML = `
                <img src=${theMeal.strMealThumb}>
                <div class="details">
                    <h2>${theMeal.strMeal}</h2>
                    <h4>${theMeal.strArea}</h4>
                </div>
                <div id="ingredient-con"></div>
                <div id="recipe">
                    <button id="hide-recipe">X</button>
                    <preview id="instructions">${theMeal.strInstructions}</preview>
                </div>
                <button id="show-recipe">View Recipe</button>
            `;

            let ingredientCon = document.getElementById("ingredient-con");
            let parent = document.createElement("ul");
            let recipe = document.getElementById("recipe");
            let hideRecipe = document.getElementById("hide-recipe");
            let showRecipe = document.getElementById("show-recipe");

            ingredients.forEach((i) => {
                let child = document.createElement("li");
                child.innerText = i;
                parent.appendChild(child);
                ingredientCon.appendChild(parent);
            });

            hideRecipe.addEventListener("click", () => {
                recipe.style.display = "none";
            });

            showRecipe.addEventListener("click", () => {
                recipe.style.display = "block";
            });
        } catch (error) {
            result.innerHTML = `<h3>${error.message}</h3>`;
        }
    }
});