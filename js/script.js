$(function () {
    const toggleBtn = $('.header-btn');
    const header = $('header');
    const fixedTop = $('.fixedTop')

    const body = $('body')
    $(toggleBtn).on('click', function (e) {
        e.preventDefault()
        body.toggleClass('navOpen');
    })

    $(window).on('scroll', function () {
        let i = $(this).scrollTop()
        console.log(i);

        if (i >= 100) {
            header.addClass('scroll');
        }
        else {
            header.removeClass('scroll');
        }

    })

    $(fixedTop).on('click', function () {
        let i = $(this).scrollTop();
        i = 0;
    })

    const swiper = new Swiper(".graphic", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        centeredSlides: true,
        loop:true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1110: {
                slidesPerView: 3,
                //   spaceBetween: 50,
            },
        },
      });
})