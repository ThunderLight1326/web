document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const extraText = document.getElementById('extraText');

    seeMoreBtn.addEventListener('click', function() {
        if (extraText.style.display === 'none') {
            extraText.style.display = 'block';
            seeMoreBtn.textContent = 'See Less';
        } else {
            extraText.style.display = 'none';
            seeMoreBtn.textContent = 'See More';
        }
    });
});
