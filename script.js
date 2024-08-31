// Function to load and render Markdown content
function loadMarkdown(file) {
    fetch(`content/${file}`)
        .then(response => response.text())
        .then(text => {
            document.getElementById('book-content').innerHTML = marked.parse(text);
        })
        .catch(error => {
            console.error('Error loading markdown:', error);
            document.getElementById('book-content').innerHTML = '<p>Sorry, the content could not be loaded.</p>';
        });
}

// Add event listeners to sidebar toggle links
document.querySelectorAll('.sidebar .toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        this.classList.toggle('active');
        const submenu = this.nextElementSibling;
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

// Add event listeners to sidebar links to load Markdown
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const file = this.getAttribute('data-file');
        loadMarkdown(file);
    });
});

// Placeholder for search functionality
document.getElementById('search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    // Implement search functionality here
    console.log('Search query:', query);
});
