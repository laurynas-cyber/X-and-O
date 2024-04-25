const everyField = document.querySelectorAll(".flex div");
let Xbox = document.createElement("div");
let XorO = true;

everyField.forEach((f) => {
  f.addEventListener("click", () => {
    if (XorO == true) {
      XorO = false;

      return Xplace(f);
    } else if (XorO == false) {
      XorO = true;
      return O(f);
    }
  });
});

// if (f.contains(Xbox)) {
//   f.removeEventListener("click", Xplace);
// } else

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

  console.log(parent.contains(Xbox));
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
