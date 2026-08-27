
document.addEventListener("DOMContentLoaded", function () {
    // Photo Gallery Filter
    const filterBtns = document.querySelectorAll('.btn-filter');
    const galleryItems = document.querySelectorAll('.masonry-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // Lightbox for Photos
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    if(lightbox && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img').src;
                lightboxImg.src = img;
                lightbox.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) lightbox.style.display = 'none';
        });
    }

    // Video Gallery Filter
    const vidFilterBtns = document.querySelectorAll('.btn-vid-filter');
    const vidItems = document.querySelectorAll('.vid-item');

    vidFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            vidFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-vid-filter');
            vidItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
