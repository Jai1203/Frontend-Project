function hideLoader() {
    const loader = document.getElementById('loader-wrapper');
    if (loader) loader.style.display = 'none';
}
const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
if (openModal && modal && closeModal) {
    openModal.addEventListener('click', () => modal.style.display = 'block');
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}
document.querySelectorAll('button, .cta-btn').forEach(btn => {
    btn.classList.add('ripple');
    btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        circle.className = 'ripple';
        const rect = btn.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});
const carouselImages = [
    'assets/sample-image1.jpg',
    'assets/sample-image2.jpg',
    'assets/sample-image3.jpg'
];
let carouselIndex = 0;
const carouselImg = document.getElementById('carousel-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
function updateCarousel() {
    if (carouselImg) carouselImg.src = carouselImages[carouselIndex];
}
if (prevBtn && nextBtn && carouselImg) {
    prevBtn.addEventListener('click', () => {
        carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        updateCarousel();
    });
}
const modeToggle = document.getElementById('mode-toggle');
if (modeToggle) {
    modeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', current);
        modeToggle.textContent = current === 'dark' ? '☀️' : '🌙';
    });
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.getElementById('mode-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', current);
    document.getElementById('mode-toggle').textContent = current === 'dark' ? '☀️' : '🌙';
});
