$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});



let solutionSwiper = new Swiper(".solution-slider", {
    slidesPerView: 2,
    spaceBetween: 96,
    slidesPerGroup: 2,
    speed: 1000,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 2,
            spaceBetween: 96,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".solution-button-next",
        prevEl: ".solution-button-prev",
    },
});
let receiveSwiper = new Swiper(".receive-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".receive-pagination",
        clickable: true,
    }
});




let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    breakpoints: {
        '991': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        '680': {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },

});


