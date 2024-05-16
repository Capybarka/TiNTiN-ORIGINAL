$(document).ready(function () {

    // эффект при наведении на ссылки в навигации
    $('.nav-link').on('mouseenter', function () {
        $(this).css({
            // изменение стилей
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
        // each() выполняет указанную функцию для каждого элемента в выборке
        $(this).delay(index * 150).animate({ opacity: 1, }, 450);
        // .delay(index * 150) добавляет задержку перед запуском анимации.
        // Время задержки рассчитывается для каждой карточки, увеличиваясь с увеличением индекса

        // метод animate запускает анимацию изменения стилей элемента - изменяет прозрачность 
        // элемента на полную (opacity: 1) за 450 миллисекунд.
    });

    // фокус на инпутах в форме
    $('#reservation_name').on('focus', function () {
        // при фокусе переключаем класс
        $(this).toggleClass('focus')
    })

    $('#reservation_name').on('blur', function () {
        // при уведении фокуса переключаем класс обратно
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