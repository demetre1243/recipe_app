const searchButton = document.getElementById("searchbutton");
const searchInput = document.getElementById("searchinput");
const recipeDiv = document.getElementById("recipes");

searchButton.onclick = () => {
    const food = searchInput.value;
    getRecipes(food);
}

async function getRecipes(ingredient) {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`);
    const data = await response.json();

    recipeDiv.innerHTML = '';

    if (!data.meals) {
        recipeDiv.innerText = "რეცეპტები ვერ მოიძებნა!";
        return;
    }

    data.meals.forEach((meal) => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        `;
        recipeDiv.appendChild(card);
    })
}

