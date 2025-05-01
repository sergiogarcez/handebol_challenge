// Basic script for future interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Regulation accordion functionality
    const regulationItems = document.querySelectorAll('.regulation-item');
    regulationItems.forEach(item => {
        const header = item.querySelector('.regulation-header');
        header.addEventListener('click', () => {
            console.log('Regulation header clicked:', header);
            // Close all other items
            regulationItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Mobile menu toggle functionality (can be added later)
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰ Menu';
    
    // Games table sorting functionality
    const gamesTable = document.querySelector('.games-table table');
    if (gamesTable) {
        const headers = gamesTable.querySelectorAll('th');
        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                sortTable(index);
            });
        });
    }

    function sortTable(column) {
        const table = gamesTable;
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        rows.sort((a, b) => {
            const aText = a.querySelectorAll('td')[column].textContent;
            const bText = b.querySelectorAll('td')[column].textContent;
            
            // Special handling for dates
            if (column === 0) { // Date column
                return new Date(aText.split('/').reverse().join('-')) - 
                       new Date(bText.split('/').reverse().join('-'));
            }
            
            return aText.localeCompare(bText);
        });

        // Clear and re-add sorted rows
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        rows.forEach(row => tbody.appendChild(row));
    }

    console.log('Handball Challenge website loaded');
});

