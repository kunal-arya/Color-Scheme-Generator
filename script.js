// API to use - https://www.thecolorapi.com/
// API documentation - https://www.thecolorapi.com/docs#schemes

const selectMode = document.getElementById("select-box");
const colorSelect = document.getElementById("seed-color");
const getSchemeBtn = document.getElementById("color-btn");
const colors = document.querySelectorAll(".color");
const hexCodes = document.querySelectorAll(".hex");
const bodyEl = document.querySelector("body");

function getColorSchemes() {
    const mode = selectMode.value;
    const seedColor = colorSelect.value;

    // To remove the hash symbol for hex code 
    // reason: b/c API needs only hex code without hash Symbol
    const hexCode = seedColor.replace("#","");

    // Fetching the color Scheme from the API
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colorArr = data.colors;
        
            // Change body element background with gradient of first and last color
            const lastColor = colorArr[colorArr.length - 1].hex.value;
            const firstColor = colorArr[0].hex.value;
            bodyEl.style.backgroundImage = `linear-gradient(to right, ${firstColor} ,${lastColor}`;

            // Getting color Scheme
            for(let i = 0; i < colorArr.length; i++) {
                const hex = colorArr[i].hex.value;
                colors[i].style.backgroundColor = hex;
                hexCodes[i].innerText = hex;
            }
        })
}



// Load the color Schemes initially
getColorSchemes();


function getSchemeClickHandler() {
    getColorSchemes();
}

getSchemeBtn.addEventListener("click", getSchemeClickHandler);