const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const errorDiv = document.getElementById("error");
const darkModeToggle = document.getElementById("darkModeToggle");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    searchMeal(query);
  }
});


async function searchMeal(query) {
  try {
    errorDiv.textContent = "";
    resultsDiv.innerHTML = "";

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    if (!response.ok) {
      throw new Error("Network response failed");
    }

    const data = await response.json();

    if (!data.meals) {
      showError("No recipes found.");
      return;
    }

    renderMeals(data.meals);

  } catch (error) {
    showError("Something went wrong. Please try again later.");
  }
}

function renderMeals(meals) {
  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" width="200">
      <button onclick="saveFavorite('${meal.strMeal}')">Favorite</button>
    `;

    resultsDiv.appendChild(card);
  });
}

function showError(message) {
  errorDiv.textContent = message;
}

function saveFavorite(mealName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(mealName);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("Saved to favorites!");
}

// Load saved mode
const savedMode = JSON.parse(localStorage.getItem("darkMode"));
if (savedMode) {
  document.body.classList.add("dark");
}

// Toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", JSON.stringify(isDark));
});

