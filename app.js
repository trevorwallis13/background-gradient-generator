const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const randomColor = document.querySelector("#random-color");
const cssContent = document.querySelector(".css-content");
const body = document.querySelector("body");

const setBackgroundColor = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssContent.textContent = body.style.background + ";";
}

const rgbVal = () => {
    return Math.random() * 255
}

const generateRgb = () => {
    return `rgb(${rgbVal()}, ${rgbVal()}, ${rgbVal()})`;
}

const randBackgroundColor = () => {
    body.style.background = `linear-gradient(to right, ${generateRgb()}, ${generateRgb()})`;
    cssContent.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackgroundColor);
color2.addEventListener("input", setBackgroundColor);
randomColor.addEventListener("click", randBackgroundColor);

