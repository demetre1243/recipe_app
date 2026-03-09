const searchbutton = document.getElementById("searchbutton");
const searchinput = document.getElementById("searchinput");
const recipeDiv = document.getElementById("recipes");

searchbutton.onclick = () => {
    const food = searchinput.value;
    getRecipes(food);
}

async function getRecipes(ingredient) {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`);
    const data = await response.json();

    if (!data.meals) {
        recipeDiv.innerText = "რეცეპტები ვერ მოიძებნა!";
        return;
    }

    data.meals.forEach((meal) => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("recipe-card");

        recipeDiv.appendChild(card);
    })
}

