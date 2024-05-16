$(document).ready(function () {

    // эффект при наведении на ссылки в навигации
    $('.nav-link').on('mouseenter', function () {
        $(this).css({
            "background-color": "rgb(63, 63, 63)",
            "border-radius": "1rem",
            "padding": "0.5rem",
            "color": "white"
        })
    })

    $('.nav-link').on('mouseleave', function () {
        $(this).css({
            "background-color": "",
            "border-radius": "",
            "padding": "",
            "color": ""
        })
    })


    // анимация карточек категорий
    $('.categoty_card').each(function (index) {
        $(this).delay(index * 200).animate(
            {
                opacity: 1,
            }, 500);
    });

    // фокус на инпутах в форме
    $('#reservation_name').on('focus', function () {
        $(this).toggleClass('focus')
    })

    $('#reservation_name').on('blur', function () {
        $(this).toggleClass('focus')
    })

    $('#reservation_tel').on('focus', function () {
        $(this).toggleClass('focus')
    })

    $('#reservation_tel').on('blur', function () {
        $(this).toggleClass('focus')
    })

    $('#reservation_email').on('focus', function () {
        $(this).toggleClass('focus')
    })

    $('#reservation_email').on('blur', function () {
        $(this).toggleClass('focus')
    })
})