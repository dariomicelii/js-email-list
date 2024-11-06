// function randMail() {
//   fetch("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.response);
//     });
// }

const listaMail = document.getElementById("lista-mail");

for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      currentMail = data.response;
      console.log(currentMail);
      listaMail.innerHTML = `<li>${currentMail}</li>`;
    });
}
