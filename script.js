// Mobile menu toggle function
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    
    // Simple toggle - could probably use classList.toggle() but this works fine
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
}

var cartCount = 0;
var cartItems = []; // store items added to cart - maybe use objects with id, name, price?

function updateCartCount() {
    var cartDisplay = document.getElementById('cart-count');
    if (cartDisplay) {
        cartDisplay.textContent = cartCount;
    }
}

// Add item to cart - need to improve this later
function addToCart(productId) {
    cartCount++; // increment cart count
    updateCartCount();
    
    // Show simple alert for now - TODO: replace with nicer modal popup
    alert('Product added to cart!');
}

// Filter products by category
function filterProducts(category) {
    var cards = document.querySelectorAll('.card');
    var buttons = document.querySelectorAll('.filters button');
    
    // Update active button styling
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Show/hide cards based on category
    cards.forEach(function(card) {
        if (category === 'all') {
            // Show all cards when 'all' is selected
            card.style.display = 'block';
        } else {
            // Only show cards matching the category
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
    
}

// Select category from category cards - navigates to products page
function selectCategory(category) {
    // Navigate to products page with category parameter
    window.location.href = 'products.html?category=' + category;
}

// Initialize page when everything loads
window.onload = function() {
    // Set initial cart count
    updateCartCount();
    
    // Check if there's a category parameter in URL
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');
    
    if (category) {
        // Filter products if category is provided in URL
        filterProducts(category);
        
        // Find and activate the corresponding filter button
        var buttons = document.querySelectorAll('.filters button');
        buttons.forEach(function(btn) {
            if (btn.textContent.toLowerCase().includes(category)) {
                btn.classList.add('active');
            }
        });
    }
};