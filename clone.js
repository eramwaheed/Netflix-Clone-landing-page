const swipers = document.querySelectorAll(".mySwiper");
        swipers.forEach(swiperEl => {
            new Swiper(swiperEl, {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: swiperEl.querySelector(".swiper-button-next"),
                    prevEl: swiperEl.querySelector(".swiper-button-prev"),
                },
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                },
            });
        });