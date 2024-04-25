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
      console.log(Fieldstore);
      return Xplace(field);
    }
    if (XorO == false && field.dataset.Fieldcode == Fieldstore[i]) {
      XorO = true;
      Fieldstore[i] = 0;
      console.log(Fieldstore);
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

  // console.log(parent.contains(Xbox));
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

clear(); //neleidzia antra kart spaust del to nest once:true

function rules() {}
