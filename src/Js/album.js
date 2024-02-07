window.onload = function() {
    const images = document.querySelectorAll('#album img');

    function adjustImageSize() {
        images.forEach(image => {
            if (image.naturalWidth > image.naturalHeight) {
                image.style.width = '100%';
                image.style.height = '100%';
            } else {
                image.style.width = '50%';
                image.style.height = '100%';
            }
        });
    }

    adjustImageSize(); // Đảm bảo rằng kích thước của ảnh được điều chỉnh khi trang được tải lần đầu tiên

    let currentIndex = 0;

    function nextImage() {
        const currentImage = images[currentIndex];
        currentImage.classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        const nextImage = images[currentIndex];
        nextImage.classList.add('active');
        adjustImageSize(); // Đảm bảo rằng kích thước của ảnh được điều chỉnh khi chuyển sang ảnh tiếp theo
    }

    setInterval(nextImage, 3000); // Thay đổi 3000 để thay đổi tốc độ chuyển đổi ảnh (tính bằng mili giây)
};
