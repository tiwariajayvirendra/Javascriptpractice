document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const displayText = document.getElementById('displayText');

    searchInput.addEventListener('input', function() {
        displayText.textContent = searchInput.value;
    });
});
