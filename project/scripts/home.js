// Get DOM elements
const year = document.getElementById('year');
const lastModified = document.getElementById('lastmodified');

// Set footer information
const today = new Date();
const newYear = today.getFullYear();
year.innerHTML = `© ${newYear}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Recipe Data
const breakfastRecipes = {
    classicBreakfast: {
        name: "Avocado Toast with Egg",
        ingredients: [
            "2 slices of whole-grain bread",
            "1 ripe avocado",
            "2 eggs",
            "Salt and pepper to taste",
            "Olive oil (optional)",
            "Chili flakes (optional)"
        ],
        instructions: [
            "Toast the slices of bread until golden brown.",
            "Peel and mash the avocado with a fork, adding a pinch of salt and pepper.",
            "Cook the eggs to your preference (scrambled, fried, or poached).",
            "Spread the mashed avocado onto the toast and place the eggs on top.",
            "Drizzle with olive oil and sprinkle chili flakes if desired."
        ]
    },
    healthyBreakfast: {
        name: "Fruit Smoothie Bowl",
        ingredients: [
            "1 frozen banana",
            "1 cup of frozen strawberries",
            "1/2 cup of plain or coconut yogurt",
            "1/4 cup of milk (can be plant-based)",
            "Toppings: granola, chia seeds, banana slices, berries"
        ],
        instructions: [
            "Blend the banana, strawberries, yogurt, and milk in a blender until smooth and creamy.",
            "Pour the mixture into a bowl.",
            "Decorate with toppings: granola, banana slices, berries, and chia seeds.",
            "Serve immediately and enjoy!"
        ]
    },
    energizingBreakfast: {
        name: "Banana Oat Pancakes",
        ingredients: [
            "1 ripe banana",
            "1 egg",
            "1/2 cup of rolled oats",
            "1/4 cup of milk (can be plant-based)",
            "1/2 teaspoon of baking powder",
            "Honey, fruits, or peanut butter for serving"
        ],
        instructions: [
            "Mash the banana in a bowl until smooth.",
            "Add the egg, oats, milk, and baking powder. Mix well to form a batter.",
            "Heat a non-stick pan and pour some of the batter to form small pancakes.",
            "Cook over medium heat for 2-3 minutes on each side or until golden brown.",
            "Serve with honey, fresh fruits, or peanut butter."
        ]
    }
};

const lunchRecipes = {
    heartyLunch: {
        name: "Grilled Chicken Salad",
        ingredients: [
            "2 chicken breasts",
            "1 head of lettuce, chopped",
            "1 cup of cherry tomatoes, halved",
            "1/2 cucumber, sliced",
            "1/4 cup of shredded carrots",
            "2 tablespoons of olive oil",
            "Salt and pepper to taste",
            "Salad dressing of choice"
        ],
        instructions: [
            "Season the chicken breasts with salt, pepper, and a drizzle of olive oil.",
            "Grill the chicken on medium heat for 6-8 minutes on each side or until fully cooked. Let it rest before slicing.",
            "In a large bowl, combine the lettuce, cherry tomatoes, cucumber, and shredded carrots.",
            "Add the sliced chicken on top.",
            "Drizzle with your favorite dressing and serve."
        ]
    },
    quickLunch: {
        name: "Vegetable Stir-Fry with Rice",
        ingredients: [
            "2 cups of cooked rice (white or brown)",
            "1 tablespoon of vegetable oil",
            "1 red bell pepper, sliced",
            "1 cup of broccoli florets",
            "1/2 cup of snap peas",
            "2 cloves of garlic, minced",
            "3 tablespoons of soy sauce",
            "1 teaspoon of sesame oil (optional)"
        ],
        instructions: [
            "Heat vegetable oil in a large pan or wok over medium-high heat.",
            "Add garlic and sauté until fragrant, about 30 seconds.",
            "Add the bell pepper, broccoli, and snap peas. Stir-fry for 5-7 minutes until tender-crisp.",
            "Stir in the soy sauce and sesame oil (if using).",
            "Serve the stir-fry over the cooked rice."
        ]
    },
    comfortingLunch: {
        name: "Spaghetti Bolognese",
        ingredients: [
            "200g of spaghetti",
            "1 tablespoon of olive oil",
            "1/2 onion, finely chopped",
            "2 cloves of garlic, minced",
            "300g of ground beef",
            "1 can (400g) of diced tomatoes",
            "2 tablespoons of tomato paste",
            "1 teaspoon of dried oregano",
            "Salt and pepper to taste",
            "Grated Parmesan cheese (optional)"
        ],
        instructions: [
            "Cook the spaghetti according to the package instructions. Drain and set aside.",
            "Heat olive oil in a pan over medium heat. Add the onion and garlic, and sauté until soft.",
            "Add the ground beef and cook until browned, breaking it up with a spoon.",
            "Stir in the diced tomatoes, tomato paste, oregano, salt, and pepper. Simmer for 10-15 minutes.",
            "Serve the sauce over the spaghetti and sprinkle with grated Parmesan if desired."
        ]
    }
};

const dinnerRecipes = {
    lightDinner: {
        name: "Baked Salmon with Asparagus",
        ingredients: [
            "2 salmon fillets",
            "1 bunch of asparagus, trimmed",
            "2 tablespoons of olive oil",
            "1 lemon, sliced",
            "2 cloves of garlic, minced",
            "Salt and pepper to taste",
            "Fresh dill or parsley (optional)"
        ],
        instructions: [
            "Preheat the oven to 400°F (200°C).",
            "Place the salmon fillets and asparagus on a baking sheet lined with parchment paper.",
            "Drizzle with olive oil, and sprinkle with minced garlic, salt, and pepper.",
            "Place lemon slices on top of the salmon.",
            "Bake for 12-15 minutes or until the salmon is cooked through and flaky.",
            "Garnish with fresh dill or parsley before serving."
        ]
    },
    heartyDinner: {
        name: "Beef Tacos",
        ingredients: [
            "300g of ground beef",
            "1 tablespoon of taco seasoning",
            "8 small taco shells or tortillas",
            "1 cup of shredded lettuce",
            "1/2 cup of diced tomatoes",
            "1/2 cup of shredded cheese",
            "1/4 cup of sour cream",
            "Salsa (optional)"
        ],
        instructions: [
            "Cook the ground beef in a skillet over medium heat until browned. Drain excess fat.",
            "Add the taco seasoning and a splash of water, stirring to combine. Cook for 2-3 minutes.",
            "Warm the taco shells or tortillas in a pan or microwave.",
            "Assemble the tacos: fill each shell with beef, lettuce, tomatoes, cheese, and sour cream.",
            "Top with salsa if desired and serve immediately."
        ]
    },
    comfortingDinner: {
        name: "Chicken Alfredo Pasta",
        ingredients: [
            "200g of fettuccine pasta",
            "2 chicken breasts, sliced",
            "2 tablespoons of olive oil",
            "2 cloves of garlic, minced",
            "1 cup of heavy cream",
            "1/2 cup of grated Parmesan cheese",
            "1 teaspoon of dried parsley",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook the fettuccine according to the package instructions. Drain and set aside.",
            "Season the chicken slices with salt and pepper. Heat olive oil in a pan over medium heat and cook the chicken until golden and cooked through. Remove and set aside.",
            "In the same pan, add garlic and sauté until fragrant. Pour in the heavy cream and simmer for 2-3 minutes.",
            "Stir in Parmesan cheese until melted and smooth. Add parsley, and season with salt and pepper.",
            "Toss the cooked pasta in the sauce, and top with the chicken slices.",
            "Serve hot and enjoy."
        ]
    }
};

// Function to create recipe card
function createRecipeCard(recipe, category) {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    const recipeName = document.createElement('h3');
    recipeName.textContent = recipe.name;

    const ingredientsList = document.createElement('ul');
    ingredientsList.innerHTML = '<h4>Ingredients:</h4>';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    const instructionsList = document.createElement('ol');
    instructionsList.innerHTML = '<h4>Instructions:</h4>';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = 'Add to Favorites';
    favoriteButton.className = 'favorite-btn';
    favoriteButton.addEventListener('click', () => addToFavorites(recipe, category));

    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(ingredientsList);
    recipeCard.appendChild(instructionsList);
    recipeCard.appendChild(favoriteButton);

    return recipeCard;
}

// Function to add recipe to favorites
function addToFavorites(recipe, category) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if recipe is already in favorites
    const isAlreadyFavorite = favorites.some(fav => fav.name === recipe.name);

    if (!isAlreadyFavorite) {
        favorites.push({
            ...recipe,
            category: category
        });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Recipe added to favorites!');
    } else {
        alert('This recipe is already in your favorites!');
    }
}

// Function to display favorite recipes
function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites-container');
    if (!favoritesContainer) return;

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No favorite recipes yet!</p>';
        return;
    }

    favoritesContainer.innerHTML = '';
    favorites.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe, recipe.category);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Favorites';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', () => removeFromFavorites(recipe));
        recipeCard.appendChild(removeButton);
        favoritesContainer.appendChild(recipeCard);
    });
}

// Function to remove recipe from favorites
function removeFromFavorites(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => fav.name !== recipe.name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
    alert('Recipe removed from favorites!');
}

// Initialize recipe display
function initializeRecipes() {
    if (window.location.pathname.includes('recipes.html')) {
        // Display breakfast recipes
        const breakfastSection = document.getElementById('breakfast');
        if (breakfastSection) {
            Object.values(breakfastRecipes).forEach(recipe => {
                breakfastSection.appendChild(createRecipeCard(recipe, 'breakfast'));
            });
        }

        // Add lunch and dinner sections
        const lunchSection = document.getElementById('lunch');
        if (lunchSection) {
            Object.values(lunchRecipes).forEach(recipe => {
                lunchSection.appendChild(createRecipeCard(recipe, 'lunch'));
            });
        }

        const dinnerSection = document.getElementById('dinner');
        if (dinnerSection) {
            Object.values(dinnerRecipes).forEach(recipe => {
                dinnerSection.appendChild(createRecipeCard(recipe, 'dinner'));
            });
        }
    }

    // Initialize favorites page
    if (window.location.pathname.includes('favorites.html')) {
        displayFavorites();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeRecipes);