const everyField = document.querySelectorAll(".flex div");

let XorO = true;

everyField.forEach((f) => {
  f.addEventListener("click", () => {
    if (XorO == true) {
      f.style.backgroundColor = "red";
      XorO = false;
    }
    if (XorO == false) {
      f.style.backgroundColor = "blue";
      XorO = true;
    }
  });
});
