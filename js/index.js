document.addEventListener("DOMContentLoaded", () => {
  app();
});

function app() {
  const entrada = document.querySelector("#entrada");
  const principal = document.querySelector(".principal");
  const enlaces = document.querySelectorAll(".pagina");

  entrada.addEventListener("click", (event) => {
    entrada.classList.add("principal");
    principal.classList.remove("principal");

    mover(principal);

    enlaces.forEach((element) => {
      element.animate([{ transform: "rotate(360deg)" }], {
        duration: 1000,
        iterations: 4,
      });
    });
  });
}

function mover(element) {
  element.animate(
    [{ transform: "translateY(0px)" }, { transform: "translateY(-300px)" }],
    {
      duration: 1000,
    }
  );
}
