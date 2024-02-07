window.onload = function() {
    const images = document.querySelectorAll('#album img');
    const audio = document.getElementById('song');
    const chu = document.getElementById('chu');

    function adjustImageSize() {
        images.forEach(image => {
            if (image.naturalWidth > image.naturalHeight) {
                image.style.width = '95%';
                image.style.height = '95%';
            } else {
                image.style.width = '50%';
                image.style.height = '95%';
            }
            image.addEventListener('click', function() {
                audio.play(); // Phát nhạc khi chạm vào ảnh
            }); // Thêm sự kiện click cho mỗi ảnh
        });
    }

    adjustImageSize(); // Đảm bảo rằng kích thước của ảnh được điều chỉnh khi trang được tải lần đầu tiên

    let currentIndex = 0;
    let isChuShown = false;

    function nextImage() {
        const currentImage = images[currentIndex];
        currentImage.classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        if (currentIndex === 18 && !isChuShown) { // Kiểm tra khi đến ảnh 19.jpg và chưa hiển thị chữ
            images.forEach(image => {
                image.classList.remove('active');
            });
            chu.style.display = 'block'; // Hiện chữ khi đến ảnh 19.jpg
            isChuShown = true; // Đặt cờ để chỉ hiển thị chữ một lần duy nhất
        } else {
            if (!isChuShown) {
                const nextImage = images[currentIndex];
                nextImage.classList.add('active');
                adjustImageSize(); // Đảm bảo rằng kích thước của ảnh được điều chỉnh khi chuyển sang ảnh tiếp theo
            }
        }
    }

    setInterval(nextImage, 3000); // Thay đổi 3000 để thay đổi tốc độ chuyển đổi ảnh (tính bằng mili giây)

    // Chuyển trang khi người dùng click vào div chu
    chu.addEventListener('click', function() {
        window.location.href = '../Html/phaohoa.html';
    });
};
