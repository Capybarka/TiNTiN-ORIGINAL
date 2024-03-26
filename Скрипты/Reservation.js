"use strict";

const reservationBtn = document.querySelector(".reservation-btn");
const reservationForm = document.querySelector(".reservation_container")
const inputContainer = document.querySelector(".input-container");
const reservationDateElement = document.querySelector(".reservation_message_date");
const messageContainer = document.querySelector(".reservation_message");

reservationBtn.addEventListener('click', function (event) {
    reservationForm.classList.toggle("hidden");
    if (!messageContainer.classList.contains("hidden")) {
        messageContainer.classList.toggle("hidden");
    }
})

const btnReady = document.querySelector(".reservation_form-btn");

btnReady.addEventListener('click', function (event) {
    reservationForm.classList.toggle("hidden");
    messageContainer.classList.toggle("hidden");

    let date = new Date();
    date.setDate(date.getDate() + 2);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;

    reservationDateElement.textContent = day + "-" + month + "-" + year;
})             