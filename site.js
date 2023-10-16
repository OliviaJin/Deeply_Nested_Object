const TPBeefSoup = {
    name: "T, P & Beef Soup",
    type: "Soup",
    vegetarianAlternative: false,
    ingredients: [
        { item: 'beef stew meat', quantity: 450, unit: 'g' },
        { item: 'potatoes', quantity: 3, unit: 'medium' },
        { item: 'onion', quantity: 1, unit: 'large' },
        { item: 'garlic cloves', quantity: 3 },
        { item: 'diced tomatoes', quantity: 14, unit: 'oz' },
        { item: 'beef broth', quantity: 4, unit: 'cups' },
        { item: 'carrots', quantity: 2 },
        { item: 'celery stalks', quantity: 2 },
        { item: 'bay leaf', quantity: 1 },
        { item: 'dried thyme', quantity: 1, unit: 'tsp' },
        { item: 'dried rosemary', quantity: 1, unit: 'tsp' },
        { item: 'olive oil', quantity: 2, unit: 'tbsp' },
        { item: 'salt and pepper', quantity: 'to taste' },
        { item: 'fresh parsley', optional: true }
    ],

    instructions: [
        "Brown the Beef: In a large pot, heat the olive oil over medium-high heat. Add the beef cubes and brown them on all sides (approximately 5 minutes). Remove the beef and set aside.",
        "Sauté Vegetables: In the same pot, add a bit more olive oil if needed. Add the chopped onions and garlic, sautéing until they become translucent (about 3 minutes). Add the carrots and celery, continuing to sauté for an additional 5 minutes.",
        "Combine Ingredients: Return the browned beef to the pot. Add the diced tomatoes (with their juice) and stir to combine. Add the potatoes, beef broth, bay leaf, thyme, and rosemary. Season with salt and pepper to taste.",
        "Simmer the Soup: Bring the mixture to a boil, then reduce the heat to low. Allow the soup to simmer, covered, for approximately 1.5 to 2 hours. The beef should become tender, and the flavors meld together.",
        "Final Touches: Check the seasoning and adjust with more salt and pepper if needed. Remove the bay leaf and discard it. Optionally, garnish each serving with fresh parsley.",
        "Serve and Enjoy: Ladle the soup into bowls and serve hot. Pair with a slice of crusty bread or a side salad for a complete meal."
    ],

    notes: [
        "Vegetarian Alternative: Replace beef with mushrooms and use vegetable broth.",
        "Additional Veggies: Feel free to add other vegetables like peas or green beans.",
        "Storage: Store leftovers in an airtight container in the refrigerator for up to 4 days or freeze for up to 3 months."
    ],

    memoir: "In the cozy kitchen of our family home, where the walls absorbed the laughter and tales of generations, a particular aroma wafted through the air, signaling the amalgamation of celebration, love, and a dash of nostalgia. It was the scent of my mom’s tomato, potato, and beef soup, a simple yet profoundly significant dish that became synonymous with warmth, family, and festivity in our household.",
    isHealthy: function() {

        return this.ingredients.some(ingredient => ingredient.item === 'vegetables');
    },

    getIngredientQuantity: function(ingredientName) {

        const ingredient = this.ingredients.find(ing => ing.item.includes(ingredientName));
        return ingredient ? `${ingredient.quantity} ${ingredient.unit}` : 'Ingredient not found';
    }, 

    additionalInfo: {
        preparationTime: "2.5 hours",
        serves: 4,
        difficulty: "Medium",
        cuisine: "Homemade",
        createdBy: "Mom"
    },

    reviews: [
        { user: "Alex", rating: 5, comment: "Absolutely delicious and comforting!" },
        { user: "Jordan", rating: 4, comment: "Really enjoyed it, but it needed a bit more salt for my taste." }
    ],

    tags: ['hearty', 'comforting', 'family recipe', 'beef soup'],
    isPopular: true,
    relatedRecipes: [
        { name: 'Vegetable Soup', link: 'http://example.com/vegetable-soup' },
        { name: 'Chicken Noodle Soup', link: 'http://example.com/chicken-noodle-soup' }
    ],

    calculateAverageRating: function() {
        const totalRating = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        return (totalRating / this.reviews.length).toFixed(1);
    },

    getTagsString: function() {
        return this.tags.join(', ');
    },

    addReview: function(user, rating, comment) {
        this.reviews.push({ user, rating, comment });
    }
    
};


console.log(`Average Rating: ${TPBeefSoup.calculateAverageRating()}/5`);
console.log(`Tags: ${TPBeefSoup.getTagsString()}`);
TPBeefSoup.addReview('Taylor', 5, 'This soup is a must-try!');
console.log(`New Review Added: ${TPBeefSoup.reviews[TPBeefSoup.reviews.length - 1].user} said "${TPBeefSoup.reviews[TPBeefSoup.reviews.length - 1].comment}" and rated it ${TPBeefSoup.reviews[TPBeefSoup.reviews.length - 1].rating}/5`);
console.log(`Is the soup healthy? ${TPBeefSoup.isHealthy() ? 'Yes' : 'No'}`);
console.log(`Quantity of beef needed: ${TPBeefSoup.getIngredientQuantity('beef stew meat')}`);
