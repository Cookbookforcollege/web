// Recipe page specific functionality
let recipes = [];
let filteredRecipes = [];

// Load recipes when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for shared.js to load header first
    setTimeout(() => {
        loadRecipes();
        setupRecipeEventListeners();
    }, 100);
});

// Load recipes from JSON file
async function loadRecipes() {
    try {
        const response = await fetch('data/recipes.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        recipes = await response.json();
        filteredRecipes = [...recipes];
        displayRecipes(filteredRecipes);
    } catch (error) {
        console.error('Error loading recipes:', error);
        displayErrorMessage();
    }
}

// Display error message when recipes can't be loaded
function displayErrorMessage() {
    const recipesGrid = document.getElementById('recipes-grid');
    recipesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">
            <h3>Unable to Load Recipes</h3>
            <p>Please ensure that recipes.json exists in the data folder.</p>
            <p>Check the browser console for detailed error information.</p>
        </div>
    `;
}

// Display recipes in the grid
function displayRecipes(recipesToShow) {
    const recipesGrid = document.getElementById('recipes-grid');
    
    if (recipesToShow.length === 0) {
        recipesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">
                <h3>No Recipes Found</h3>
                <p>No recipes match your current search criteria.</p>
                <p>Try adjusting your search terms or filters.</p>
            </div>
        `;
        return;
    }
    
    recipesGrid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card" onclick="openRecipeModal('${recipe.id}')" data-recipe-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" 
                 onerror="handleImageError(this)" loading="lazy">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="recipe-time">${recipe.prepTime}</span>
                    <span class="recipe-servings">${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}</span>
                </div>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${formatTag(tag)}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Format tag names for display
function formatTag(tag) {
    const tagMap = {
        'breakfast': 'Breakfast',
        'lunch': 'Lunch', 
        'dinner': 'Dinner',
        'cheap': 'Budget-Friendly',
        'quick': 'Quick Prep',
        'healthy': 'Nutritious',
        'batch-cook': 'Meal Prep',
        'dorm-friendly': 'Dorm-Friendly'
    };
    return tagMap[tag] || tag.charAt(0).toUpperCase() + tag.slice(1);
}

// Set up event listeners for recipe page
function setupRecipeEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredRecipes = [...recipes];
    } else {
        filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.instructions.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    displayRecipes(filteredRecipes);
}

// Handle filter functionality
function handleFilter(event) {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => 
        btn.classList.remove('active')
    );
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    const filterTag = event.target.getAttribute('data-tag');
    
    if (filterTag === 'all') {
        filteredRecipes = [...recipes];
    } else {
        filteredRecipes = recipes.filter(recipe => 
            recipe.tags.includes(filterTag)
        );
    }
    
    // Clear search input when filtering
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    displayRecipes(filteredRecipes);
}

// Open recipe modal with detailed information
function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) {
        console.error('Recipe not found:', recipeId);
        return;
    }
    
    // Create modal HTML
    const modalHTML = `
        <div class="recipe-modal-overlay" onclick="closeRecipeModal()">
            <div class="recipe-modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeRecipeModal()">×</button>
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="${recipe.image}" alt="${recipe.title}" class="modal-image" 
                             onerror="this.src='assets/images/placeholder.jpg'">
                        <div class="modal-title-section">
                            <h2>${recipe.title}</h2>
                            <p class="modal-description">${recipe.description}</p>
                            <div class="modal-meta">
                                <span><strong>Prep Time:</strong> ${recipe.prepTime}</span>
                                <span><strong>Servings:</strong> ${recipe.servings}</span>
                            </div>
                            <div class="modal-tags">
                                ${recipe.tags.map(tag => `<span class="recipe-tag">${formatTag(tag)}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="ingredients-section">
                            <h3>Ingredients</h3>
                            <ul class="ingredients-list">
                                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="instructions-section">
                            <h3>Instructions</h3>
                            <p class="instructions-text">${recipe.instructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close recipe modal
function closeRecipeModal() {
    const modal = document.querySelector('.recipe-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Handle image loading errors more gracefully
function handleImageError(img) {
    // Try placeholder first
    if (!img.src.includes('placeholder.png')) {
        img.src = 'assets/images/placeholder.png';
        return;
    }
    
    // If placeholder fails, create a CSS-based placeholder
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.textContent = 'Image Not Available';
    placeholder.style.cssText = `
        width: 100%;
        height: 200px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        border-radius: 8px;
        font-size: 14px;
    `;
    
    // Handle modal images differently
    if (img.classList.contains('modal-image')) {
        placeholder.style.height = '200px';
        placeholder.style.borderRadius = '10px';
    }
    
    img.parentNode.insertBefore(placeholder, img);
}

// Make functions globally available
window.openRecipeModal = openRecipeModal;
window.closeRecipeModal = closeRecipeModal;
window.handleImageError = handleImageError;