document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const luckyButton = document.getElementById('luckyButton');
    
    // Function to perform search
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            
            window.location.href = searchUrl;
        }
    }
    
    
    function feelingLucky() {
        const query = searchInput.value.trim();
        if (query) {
            
            const luckyUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I'm+Feeling+Lucky`;
            
            window.location.href = luckyUrl;
        } else {
            
            window.location.href = 'https://www.google.com/doodles';
        }
    }
    

    searchButton.addEventListener('click', performSearch);
    luckyButton.addEventListener('click', feelingLucky);
    
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    
    searchInput.focus();
    
    
    searchInput.addEventListener('focus', function() {
        document.querySelector('.search-box').style.boxShadow = '0 1px 6px rgba(32, 33, 36, 0.28)';
    });
    
    searchInput.addEventListener('blur', function() {
        document.querySelector('.search-box').style.boxShadow = '0 1px 6px rgba(32, 33, 36, 0.08)';
    });
});