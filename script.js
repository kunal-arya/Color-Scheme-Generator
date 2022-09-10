// API to use - https://www.thecolorapi.com/
// API documentation - https://www.thecolorapi.com/docs#schemes

const selectMode = document.getElementById("select-box");
const colorSelect = document.getElementById("seed-color");
const getSchemeBtn = document.getElementById("color-btn");
const colors = document.querySelectorAll(".color");
const hexCodes = document.querySelectorAll(".hex");

function getColorSchemes() {
    const mode = selectMode.value;
    const seedColor = colorSelect.value;

    // TO remove the hash symbol for hex code
    const regex = /^#/;
    const hexCode = seedColor.replace(regex,"");

    // Fetching the color Scheme
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colorArr = data.colors;
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