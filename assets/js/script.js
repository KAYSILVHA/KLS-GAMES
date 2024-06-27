document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keyup', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            if (element.textContent.toLowerCase().includes(searchTerm)) {
                element.classList.add('highlight'); 
            } else {
                element.classList.remove('highlight');
            }
        });
    });
});
