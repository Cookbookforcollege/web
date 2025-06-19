// Load header and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});

// Function to load HTML components
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // Set active navigation after header loads
        if (elementId === 'header-placeholder') {
            setActiveNavigation();
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.tab-btn');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Handle index.html as home
    if (currentPage === 'index.html') {
        const homeLink = document.querySelector('.tab-btn[data-page="home"]');
        if (homeLink) homeLink.classList.add('active');
    }
}