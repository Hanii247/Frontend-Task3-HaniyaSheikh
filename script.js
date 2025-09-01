const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
});
