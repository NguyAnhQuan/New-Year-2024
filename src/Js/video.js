// Đảm bảo rằng mã JavaScript này được thực thi sau khi trang được tải hoàn toàn
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến video
    var video = document.getElementById("myVideo");

    // Kiểm tra xem video có tồn tại không trước khi thêm sự kiện
    if (video) {
        // Lắng nghe sự kiện kết thúc video
        video.addEventListener('ended', function() {
            // Chuyển hướng sang trang mới
            window.location.href = 'intro.html';
        });
    } else {
        console.error("Không tìm thấy phần tử video với ID là 'myVideo'");
    }
});
