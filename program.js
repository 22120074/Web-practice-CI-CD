// Function thay đổi text trng text banner
const texts = ["FREE SHIPPING VỚI HÓA ĐƠN TỪ 900K", "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỮA NĂM BẢO HÀNH", "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN", "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE"];
let currentIndex = 0;

function updateText() {
    document.getElementById("textDisplay").innerText = texts[currentIndex];
}

function prevText() {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateText();
}

function nextText() {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText();
}

setInterval(nextText, 10000);
