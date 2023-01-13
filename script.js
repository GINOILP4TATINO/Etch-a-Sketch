const sizeValue=document.getElementById("sizeValue");
const sizeSlider=document.getElementById("sizeSlider");
const color=document.getElementById("color");
const gridContainer=document.getElementById("gridContainer");
const colorMode=document.getElementById("colorButton");
const rainbowMode=document.getElementById("rainbowButton");
const clear=document.getElementById("clearButton");
const credits=document.getElementById("credits");
const logo=document.getElementById("gitLogo");
const creditsName=document.getElementById("name");
const options=document.querySelector(".options");
let grid=document.getElementById("grid");
let square=document.querySelectorAll(".square");
let mode="color";
updateGrid();
const password=prompt("Enter Password:");
if (password==="vito") {
    const vitoMode=document.createElement("button");
    vitoMode.textContent="Vito Mode";
    options.insertBefore(vitoMode, rainbowMode);
    vitoMode.addEventListener("click", () => {
        mode="vito";
        vitoMode.classList.add("active");
        colorMode.classList.remove("active");
        rainbowMode.classList.remove("active");
    });
    colorMode.addEventListener("click", () => {
        mode="color";
        colorMode.classList.add("active");
        rainbowMode.classList.remove("active");
        vitoMode.classList.remove("active");
    });
    rainbowMode.addEventListener("click", () => {
        mode="rainbow";
        rainbowMode.classList.add("active");
        colorMode.classList.remove("active");
        vitoMode.classList.remove("active");
    });
}
function updateSize() {
    sizeValue.textContent=`${sizeSlider.value} x ${sizeSlider.value}`;
}
function updateGrid() {
    gridContainer.removeChild(grid);
    createGrid();
}
function colorSquare() {
    if (mode==="color") this.style.backgroundColor=color.value;
    else if(mode==="rainbow") {
        let color1=Math.floor(Math.random()*(255-0)+0);
        let color2=Math.floor(Math.random()*(255-0)+0);
        let color3=Math.floor(Math.random()*(255-0)+0);
        this.style.backgroundColor="rgb("+color1+", "+color2+", "+color3+")";
    }
    else if(mode==="vito") {
        let image=document.createElement("img");
        image.setAttribute("src", "aa.jpg");
        image.setAttribute("style", "max-width: 90%; max-height: 90%;");
        if (!this.hasChildNodes()) this.appendChild(image);
    }
}
function createGrid() {
    grid=document.createElement("div");
    grid.setAttribute("id", "grid");
    gridContainer.appendChild(grid);
    for (let i=0; i<sizeSlider.value; i++) {
        let column=document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);
        for (let j=0; j<sizeSlider.value; j++) {
            let square=document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", colorSquare);
            column.appendChild(square);
        }
    }
}
setInterval(updateSize, 1);
sizeSlider.addEventListener("mouseup", updateGrid);
if (password!=="vito") {
    colorMode.addEventListener("click", () => {
        mode="color";
        colorMode.classList.add("active");
        rainbowMode.classList.remove("active");
    });
    rainbowMode.addEventListener("click", () => {
        mode="rainbow";
        rainbowMode.classList.add("active");
        colorMode.classList.remove("active");
    });
}
clear.addEventListener("click", updateGrid);
credits.addEventListener("mouseover", () => {
    logo.classList.add("hover");
    setTimeout(() => {
        if ("hidden"===window.getComputedStyle(credits).getPropertyValue('border-top-style')) creditsName.textContent="GINO_IL_P4TATINO";
    }, 450);
})
credits.addEventListener("mouseout", () => {
    logo.classList.remove("hover");
    setTimeout(() => {
        creditsName.textContent="";
    }, 450);
})