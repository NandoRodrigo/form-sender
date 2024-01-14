const scriptURL =
  "https://script.google.com/macros/s/AKfycbw-DhtUC1uMZTg0DBf-HKrgSW8LOZlb-RcsazIOiynGYl3AHDKLGH80_t5x_WuEYA3z/exec";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, { method: "POST", body: formData })
    .then((res) => alert("Enviado com sucesso!"))
    .catch((err) => console.error("Error!", err.message));

  [...e.target.children].forEach((element) => {
    if (element.tagName !== "BUTTON") {
      element.value = "";
    }
  });
});
