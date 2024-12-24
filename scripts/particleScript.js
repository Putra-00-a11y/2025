const particleCount = 200; // Jumlah partikel yang akan dibuat
const particleText = "2025"; // Teks yang akan digunakan untuk partikel

// Fungsi untuk membuat partikel dengan variasi animasi
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.innerText = particleText;

    // Mengatur posisi acak untuk setiap partikel
    const startPositionX = Math.random() * window.innerWidth; // Posisi acak horizontal berdasarkan ukuran layar
    const startPositionY = Math.random() * window.innerHeight; // Posisi acak vertikal berdasarkan ukuran layar
    particle.style.left = `${startPositionX}px`;
    particle.style.top = `${startPositionY}px`;

    // Variasi untuk pergerakan partikel
    const endPositionX = Math.random() * 200 - 100; // Posisi acak horizontal
    const endPositionY = Math.random() * 200 + 400; // Posisi acak vertikal
    particle.style.setProperty('--x-end', `${endPositionX}px`);
    particle.style.setProperty('--y-end', `${endPositionY}px`);

    // Warna acak untuk partikel
    const randomColor = `hsl(${Math.random() * 360}, 100%, 80%)`; // Warna acak (hue)
    particle.style.color = randomColor;

    // Ukuran acak untuk partikel
    const size = Math.random() * 30 + 10; // Ukuran antara 10px dan 40px
    particle.style.fontSize = `${size}px`;

    // Variasi kecepatan animasi dan delay acak
    const animationDuration = Math.random() * 5 + 4; // Antara 4 detik dan 9 detik
    particle.style.animationDuration = `${animationDuration}s`;

    const animationDelay = Math.random() * 3; // Delay animasi acak
    particle.style.animationDelay = `${animationDelay}s`;

    // Menambahkan partikel ke dalam container
    document.getElementById('particles').appendChild(particle);

    // Menghapus partikel setelah animasi selesai
    setTimeout(() => {
        particle.remove();
    }, animationDuration * 1000); // Sesuaikan dengan durasi animasi
}

// Membuat partikel secara terus-menerus
setInterval(createParticle, 500); // Partikel baru setiap 500ms

// Update ukuran partikel dan posisi saat window resize
window.addEventListener('resize', () => {
    // Update posisi dan ukuran partikel jika ukuran layar berubah
    document.querySelectorAll('.particle').forEach(particle => {
        const newStartPositionX = Math.random() * window.innerWidth;
        const newStartPositionY = Math.random() * window.innerHeight;

        particle.style.left = `${newStartPositionX}px`;
        particle.style.top = `${newStartPositionY}px`;
    });
});
