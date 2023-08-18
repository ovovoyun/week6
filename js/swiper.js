const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false, //避免使用者移動
    slidesPerView: "auto", //能呈現幾個.swiper-slide
    speed: 5000,
    loop: true, //重播
    autoplay: {
        delay: 0, //切換時延遲
        disableOnInteraction: false //避免點擊造成跑馬燈失效
    }
});

