const h1 = document.querySelector("h1");
const body = document.querySelector("body");
h1.style.color = "white";

const windowResizeHandler = () => {
  const width = window.innerWidth;
  if (width < 500) {
    body.style.backgroundColor = "blue";
  } else if (width < 700) {
    body.style.backgroundColor = "#904fad";
  } else {
    body.style.backgroundColor = "yellow";
  }
};

windowResizeHandler();
window.addEventListener("resize", windowResizeHandler);
