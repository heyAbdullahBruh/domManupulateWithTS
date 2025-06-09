"use strict";
console.log(`Hellow`);
const uForm = document.querySelector("#uForm");
const uName = document.querySelector("#name");
const uEmail = document.querySelector("#email");
const uPhone = document.querySelector("#phone");
const message = document.querySelector("#message");
uForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({
        name: uName.value,
        email: uEmail.value,
        phone: uPhone.value,
        message: message.value,
    });
});
