const everyField = document.querySelectorAll(".field");

let Xbox = document.createElement("div");
let Obox = document.createElement("div");
const reset = document.querySelector(".reset");
let XorO = true;
let Fieldstore = [];

function fieldArrayDataSet() {
  everyField.forEach((f, i) => {
    let fieldcode = "A" + i;
    f.dataset.Fieldcode = fieldcode;
    Fieldstore.push(fieldcode);
  });
}
fieldArrayDataSet();

everyField.forEach((field, i) => {
  field.addEventListener("click", () => {
    if (XorO == true && field.dataset.Fieldcode == Fieldstore[i]) {
      XorO = false;
      Fieldstore[i] = 0;
      document.querySelector(".smallO").style.display = "flex";
      document.querySelector(".smallbox").style.display = "none";
      return Xplace(field);
    }
    if (XorO == false && field.dataset.Fieldcode == Fieldstore[i]) {
      XorO = true;
      Fieldstore[i] = 0;

      document.querySelector(".smallbox").style.display = "flex";
      document.querySelector(".smallO").style.display = "none";
      return Oplace(field);
    }
  });
});

console.log(Fieldstore);

function Xplace(parent) {
  let HtmlX = `<div class="Xcontainer1">
          <div class="X"></div>
    </div>
    <div class="Xcontainer2">
             <div class="X"></div>
    </div>`;
  Xbox = document.createElement("div");
  Xbox.classList.add("box");
  Xbox.innerHTML = HtmlX;
  parent.appendChild(Xbox);
}

function Oplace(parent) {
  let HtmlO = `<div class="Ocontainer">
        <div class="O"></div>
    </div>`;
  Obox = document.createElement("div");
  Obox.classList.add("box");
  Obox.innerHTML = HtmlO;
  parent.appendChild(Obox);
}

function clear() {
  reset.addEventListener("click", (_) => {
    everyField.forEach((field, i) => {
      field.innerHTML = "";
      Fieldstore[i] = field.dataset.Fieldcode;
    });
  });
}

clear();

console.log("flag", XorO);
// function TurnAlert() {
//   if (XorO == true) {
//     console.log("flag", XorO);
//     document.querySelector(".smallbox").style.display = "content";
//     document.querySelector(".smallO").style.display = "none";
//   } else if (XorO == false) {
//     console.log("flag", XorO);
//     document.querySelector(".smallO").style.display = "content";
//     document.querySelector(".smallbox").style.display = "none";
//   }
// }

// TurnAlert();
