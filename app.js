const everyField = document.querySelectorAll(".field");
const YellowStripe = document.querySelector(".Yellow-Container");
let Xbox = document.createElement("div");
let Obox = document.createElement("div");
const reset = document.querySelector(".reset");
let XorO = true;
let Fieldstore = [];
let winConditions = [
  ["A0", "A1", "A2"],
  ["A3", "A4", "A5"],
  ["A6", "A7", "A8"],
  ["A0", "A3", "A6"],
  ["A1", "A4", "A7"],
  ["A2", "A5", "A8"],
  ["A0", "A4", "A8"],
  ["A2", "A4", "A6"],
];

console.log(winConditions);

const WinX = (value) => value == 1;
const WinO = (value) => value == 0;

function GameOver(WinArr) {
  WinArr.forEach((condition) => {
    if (condition.every(WinX)) {
      alert("X Won");
      let gg = Fieldstore.map((x) => (x = false));
      Fieldstore = gg;
    } else if (condition.every(WinO)) {
      alert("O Won");
      let gg = Fieldstore.map((x) => (x = false));
      Fieldstore = gg;
    }
  });
}

function ChangeWinConditions(SelectedField, ChangedField) {
  winConditions.forEach((condition, i) => {
    let newArr = condition.map((fieldCode) =>
      fieldCode == SelectedField ? (fieldCode = ChangedField) : fieldCode
    );
    EndAnimationStripe(condition);
    console.log(newArr);
    winConditions[i] = newArr;
  });
}

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
      Fieldstore[i] = 1;
      console.log(Fieldstore[i]);
      document.querySelector(".smallO").style.display = "flex";
      document.querySelector(".smallbox").style.display = "none";
      ChangeWinConditions(field.dataset.Fieldcode, Fieldstore[i]);
      GameOver(winConditions);

      console.log(winConditions);
      return Xplace(field);
    }
    if (XorO == false && field.dataset.Fieldcode == Fieldstore[i]) {
      XorO = true;
      Fieldstore[i] = 0;
      console.log(Fieldstore[i]);
      document.querySelector(".smallbox").style.display = "flex";
      document.querySelector(".smallO").style.display = "none";
      ChangeWinConditions(field.dataset.Fieldcode, Fieldstore[i]);
      GameOver(winConditions);

      console.log(winConditions);
      return Oplace(field);
    }
  });
});

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
    winConditions = [
      ["A0", "A1", "A2"],
      ["A3", "A4", "A5"],
      ["A6", "A7", "A8"],
      ["A0", "A3", "A6"],
      ["A1", "A4", "A7"],
      ["A2", "A5", "A8"],
      ["A0", "A4", "A8"],
      ["A2", "A4", "A6"],
    ];
    everyField.forEach((field, i) => {
      field.innerHTML = "";
      Fieldstore[i] = field.dataset.Fieldcode;
    });
  });
}

clear();

function EndAnimationStripe(condition) {
  if (condition == [1, 1, 1]) {
    console.log("X");
  }
}
