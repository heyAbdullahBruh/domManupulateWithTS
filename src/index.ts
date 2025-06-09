console.log(`Hellow`);

const uForm = document.querySelector("#uForm") as HTMLFormElement;
const uName = document.querySelector("#name") as HTMLInputElement;
const uEmail = document.querySelector("#email") as HTMLInputElement;
const uPhone = document.querySelector("#phone") as HTMLInputElement;
const message = document.querySelector("#message") as HTMLInputElement;

uForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log({
    name: uName.value,
    email: uEmail.value,
    phone: uPhone.value,
    message: message.value,
  });
});
