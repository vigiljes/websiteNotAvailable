document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.id;
            const bgColor = item.style.backgroundColor;
            window.location.href = `display.html?id=${itemId}&color=${encodeURIComponent(bgColor)}`;
        });
    });
});

