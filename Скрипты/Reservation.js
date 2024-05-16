"use strict";
// поиск нужных элементов по их селекторам
const reservationBtn = document.querySelector(".reservation-btn");
const reservationForm = document.querySelector(".reservation_container")
const inputContainer = document.querySelector(".input-container");
const reservationDateElement = document.querySelector(".reservation_message_date");
const messageContainer = document.querySelector(".reservation_message");

// добавление события нажатия на кнопку "забронировать"
reservationBtn.addEventListener('click', function (event) {
    // reservationForm - блок с формой
    // если у формы есть класс hidden , то он удаляется, если нет, то добавляется
    reservationForm.classList.toggle("hidden");

    if (!messageContainer.classList.contains("hidden")) {
        // messageContainer - блок с сообщением
        // если у блока есть класс , то он переключается, т.е. удаляется, 
        // так как при повторном нажатии на кнопку "забронировать" надо, чтобы сообщение о бронировани не было видно
        messageContainer.classList.toggle("hidden");
    }
})

//   высчитывание даты

// кнопка "готово"
const btnReady = document.querySelector(".reservation_form-btn");

// добавление события нажатия на кнопку "готово"
btnReady.addEventListener('click', function (event) {
    // убираем форму и показываем сообщение
    reservationForm.classList.toggle("hidden");
    messageContainer.classList.toggle("hidden");

    let date = new Date();
    // получаем текущую дату и добавляем два дня
    date.setDate(date.getDate() + 2);

    // получаем день
    let day = date.getDate();
    // получаем месяц (добавляем 1 т.к. индексация начинается с 0)
    let month = date.getMonth() + 1;
    // получаем год
    let year = date.getFullYear();

    // для красоты добавляем 0 для месяцев < 10
    if (month < 10) month = "0" + month;

    reservationDateElement.textContent = day + "-" + month + "-" + year;
})             