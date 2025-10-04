document.addEventListener('DOMContentLoaded', () => {
    const certificadoItems = document.querySelectorAll('.certificado-item');

    certificadoItems.forEach(item => {
        const overlay = item.querySelector('.certificado-overlay');
        overlay.addEventListener('click', () => {
            item.classList.toggle('visible');
        });
    });
});
