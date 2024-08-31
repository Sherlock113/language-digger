// Function to load and render Markdown content
function loadMarkdown(file) {
    fetch(`content/${file}`)
      .then(response => response.text())
      .then(text => {
        const contentElement = document.getElementById('book-content');
        contentElement.innerHTML = marked.parse(text);
        updateTableOfContents();
        highlightCurrentSection(file);
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        document.getElementById('book-content').innerHTML = '<p>Sorry, the content could not be loaded.</p>';
      });
  }
  
  // Function to update the table of contents
  function updateTableOfContents() {
    const headings = document.querySelectorAll('#book-content h2, #book-content h3');
    const toc = document.getElementById('table-of-contents');
    toc.innerHTML = '';
    
    headings.forEach((heading, index) => {
      const link = document.createElement('a');
      link.textContent = heading.textContent;
      link.href = `#heading-${index}`;
      heading.id = `heading-${index}`;
      
      const listItem = document.createElement('li');
      listItem.appendChild(link);
      
      if (heading.tagName === 'H3') {
        listItem.style.marginLeft = '20px';
      }
      
      toc.appendChild(listItem);
      
      // Add smooth scrolling
      link.addEventListener('click', (e) => {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  
  // Function to highlight the current section in the sidebar
  function highlightCurrentSection(file) {
    document.querySelectorAll('.sidebar ul li a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-file') === file) {
        link.classList.add('active');
      }
    });
  }
  
  // Add event listeners to sidebar toggle links
  document.querySelectorAll('.sidebar .toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.classList.toggle('active');
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
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
  
  // Implement search functionality
  document.getElementById('search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const contentElement = document.getElementById('book-content');
    const content = contentElement.innerText.toLowerCase();
    
    if (query.length > 2) {
      const regex = new RegExp(query, 'gi');
      contentElement.innerHTML = contentElement.innerHTML.replace(regex, match => `<mark>${match}</mark>`);
    } else {
      // Remove highlights if query is too short
      contentElement.innerHTML = contentElement.innerHTML.replace(/<mark>(.*?)<\/mark>/gi, '$1');
    }
  });
  
  // Initial load of the first content file
  loadMarkdown('introduction/challenges.md');