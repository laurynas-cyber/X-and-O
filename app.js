const everyField = document.querySelectorAll(".flex div");

let XorO = true;

everyField.forEach((f) => {

  f.addEventListener("click", () => {
    console.log(XorO);
    if (XorO == true) {
      f.style.backgroundColor = "red";
      return (XorO = false);
    }
    if (XorO == false) {
      f.style.backgroundColor = "gray";
      return (XorO = true);
    }
  });
});
