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
  WinArr.forEach((condition, ind) => {
    if (condition.every(WinX)) {
      console.log(condition, ind);
      EndAnimationStripe(ind);
      let gg = Fieldstore.map((x) => (x = false));
      Fieldstore = gg;
    } else if (condition.every(WinO)) {
      EndAnimationStripe(ind);
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

    // console.log(newArr);
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

    resetTheEnd();

    everyField.forEach((field, i) => {
      field.innerHTML = "";
      Fieldstore[i] = field.dataset.Fieldcode;
    });
  });
}

clear();

function resetTheEnd() {
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
  YellowStripe.style.display = "none";
  YellowStripe.style.margin = "0px";
  YellowStripe.style.transform = "rotate(0deg)";
  YellowStripe.style.width = "650px";
  document.querySelector(".Yellow-Container .endYellow").style.width = "650px";
  document.querySelector(".Yellow-Container .endYellow").style.animationName =
    "end";
}

function EndAnimationStripe(ind) {
  YellowStripe.style.display = "flex";
  switch (ind) {
    case 0:
     
      YellowStripe.style.marginBottom = "450px";
      break;
    case 1:
      YellowStripe.style.display = "flex";
      break;
    case 2:
     
      YellowStripe.style.marginTop = "450px";
      break;
    case 3:
   
      YellowStripe.style.marginRight = "470px";
      YellowStripe.style.transform = "rotate(90deg)";
      break;
    case 4:
      
      YellowStripe.style.transform = "rotate(90deg)";
      break;
    case 5:
      
      YellowStripe.style.marginRight = "-470px";
      YellowStripe.style.transform = "rotate(90deg)";
      break;
    case 6:
      
      YellowStripe.style.width = "800px";
      YellowStripe.style.margin = "0px";
      YellowStripe.style.transform = "rotate(45deg)";
      document.querySelector(
        ".Yellow-Container .endYellow"
      ).style.animationName = "end135deg";
      document.querySelector(".Yellow-Container .endYellow").style.width =
        "800px";
      break;
    case 7:
      YellowStripe.style.margin = "0px";
      
      YellowStripe.style.width = "800px";
      YellowStripe.style.transform = "rotate(135deg)";
      document.querySelector(".Yellow-Container .endYellow").style.width =
        "800px";
      document.querySelector(
        ".Yellow-Container .endYellow"
      ).style.animationName = "end135deg";

      break;
  }
}
