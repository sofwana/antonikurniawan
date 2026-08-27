
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation check
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            if(name && email && phone && service && message) {
                alert('Terima kasih, ' + name + '! Pesan Anda telah terkirim. Tim Antoni Kurniawan Attorney akan segera menghubungi Anda.');
                form.reset();
            } else {
                alert('Mohon lengkapi semua bidang pada formulir.');
            }
        });
    }
});
