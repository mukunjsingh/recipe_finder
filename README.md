🍽️ Recipe Finder App

A modern JavaScript single-page application that fetches live recipe data from a public API and dynamically renders results in the browser.

Built as part of the JavaScript Developer’s Handbook & Capstone Project.

📦 GitHub Repository

👉 https://github.com/your-username/recipe-finder

🧠 What This Project Demonstrates

This project was built to demonstrate practical understanding of:

ES6+ JavaScript fundamentals

Async/Await & API handling

DOM manipulation

Event handling & delegation

LocalStorage persistence

Error handling & robustness

Single Page Application logic

🛠 Tech Stack

HTML5

CSS3

JavaScript (ES6+)

TheMealDB Public API

API Used:
https://www.themealdb.com/api.php

✨ Features
🔍 Live Recipe Search

Users can search any recipe by name using a search bar.

📡 Live API Data

Data is fetched dynamically from TheMealDB API using fetch() and async/await.

🧩 Dynamic DOM Rendering

Recipe cards are generated using JavaScript (document.createElement) — no hardcoded HTML.

💾 Favorites with LocalStorage

Users can save favorite recipes. Favorites persist after page refresh.

🌙 Dark Mode Toggle

User theme preference is saved in LocalStorage and restored on reload.

⚠️ Error Handling

Shows message if no recipes found

Shows message if API fails

Prevents blank screen crashes

📁 Project Structure
recipe-finder/
│
├── index.html
├── style.css
├── script.js
└── README.md

🧠 How It Works (Developer Explanation)
1️⃣ Event Handling

The search button listens for a click event:

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    searchMeal(query);
  }
});


This triggers the async API request.

2️⃣ Fetching Data (Async/Await)
async function searchMeal(query) {
  try {
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
    showError("Something went wrong.");
  }
}


Why async/await?

Cleaner than Promises

Easier to read

Prevents callback hell

Allows proper error handling using try/catch

3️⃣ Dynamic DOM Creation
function renderMeals(meals) {
  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" width="200">
    `;

    resultsDiv.appendChild(card);
  });
}


No static HTML. Everything is generated dynamically.

4️⃣ LocalStorage Persistence
localStorage.setItem("favorites", JSON.stringify(favorites));


Since LocalStorage only stores strings:

JSON.stringify() converts objects → string

JSON.parse() converts string → object

This ensures data remains after refresh.

🧠 Core Concepts Used
Concept	Why It Matters
const & let	Prevent scope bugs
Arrow Functions	Cleaner syntax
Destructuring	Cleaner data access
Async/Await	Modern async handling
Event Loop	Non-blocking UI
DOM Manipulation	Dynamic interfaces
Error Handling	Production-ready logic
LocalStorage	State persistence
🧪 How to Run Locally

Clone the repository

git clone https://github.com/your-username/recipe-finder.git


Open folder

Open index.html in browser

No backend required.

🏗 How I Built This

Designed static HTML layout

Styled basic UI with CSS

Added event listeners

Integrated public API using async/await

Dynamically generated recipe cards

Added LocalStorage for persistence

Implemented error handling

Deployed via GitHub Pages

🎯 Future Improvements

Add loading spinner

Add pagination

Add detailed recipe modal

Improve UI design

Add search history tracking

Convert to React version

👨‍💻 Author

Mukunj Singh
B.Tech Computer Science
Focused on modern JavaScript & full-stack development
