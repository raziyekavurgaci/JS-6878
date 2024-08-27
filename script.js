const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
});

let div = document.getElementById("tab1-content");
let display = 0;

function hideShow() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}

let div2 = document.getElementById("tab2-content");
let display2 = 0;

function hideShow2() {
  if (display2 == 1) {
    div2.style.display = "block";
    display2 = 0;
  } else {
    div2.style.display = "none";
    display2 = 1;
  }
}

let div3 = document.getElementById("tab3-content");
let display3 = 0;

function hideShow3() {
  if (display3 == 1) {
    div3.style.display = "block";
    display3 = 0;
  } else {
    div3.style.display = "none";
    display3 = 1;
  }
}
