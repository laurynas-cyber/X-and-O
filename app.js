const everyField = document.querySelectorAll(".flex div");

let XorO = true;

everyField.forEach((f) => {
  f.addEventListener("click", () => {
    console.log(XorO);
    if (XorO == true) {
      // f.style.backgroundColor = "red";
      XorO = false;

      return X(f);
    }
    if (XorO == false) {
      // f.style.backgroundColor = "gray";
      O(f);
      return (XorO = true);
    }
  });
});

function X(parent) {
  let HtmlX = `<div class="Xcontainer1">
          <div class="X"></div>
    </div>
    <div class="Xcontainer2">
             <div class="X"></div>
    </div>`;
  let Xbox = document.createElement("div");
  let X = document.querySelector(".Xcontainer2 .X");
  Xbox.classList.add("box");
  Xbox.innerHTML = HtmlX;
  parent.appendChild(Xbox);
  X.style.visibility = "visible";
}

function O(parent) {
  let HtmlO = `<div class="Ocontainer">
        <div class="O"></div>
    </div>`;
  let O = document.createElement("div");
  O.classList.add("box");
  O.innerHTML = HtmlO;
  parent.appendChild(O);
}

function rules() {}
