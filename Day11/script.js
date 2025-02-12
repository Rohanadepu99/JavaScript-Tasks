function changeImage(character) {
    let img = document.getElementById("img");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");

    if (character === "Rebal Star") {
        img.src = "https://th.bing.com/th/id/OIP.N6G6yCPkeeLxUvTH4la8nAHaLH?rs=1&pid=ImgDetMain";
        btn1.innerText = "Prabhas";
    } 
    else if (character === "Milky Beauty") {
        img.src = "https://lh5.googleusercontent.com/VzYT05sqfHtKR8Y0O0NDg2ugDsPPy5cghHI1Up4hf6iQpybTq6jIxdrrUE4Mc3A";
        btn2.innerText = "Anushka"; 
    } 
    else if (character === "Mahismathi") {
        img.src = "https://wallpapercave.com/wp/wp6965229.jpg";
        btn3.innerText = "Bahubali";  
    }
    else if (character === "Ranga") {
        img.src = "https://1.bp.blogspot.com/--yHdyIzTiOw/X5LIAf9DbKI/AAAAAAAACus/ooqXmcABmkcyNaxZWGnS2Re0J8w3at_3wCLcBGAsYHQ/s0/HDgallery%2BBilla%2B12.jpeg";
        btn4.innerText = "Billa"; 
    } 
   
}

function updateFavoriteCharacter() {
    let nameInput = document.getElementById("nameInput").value.trim();
    let favCharacter = document.getElementById("favCharacter");

    if (nameInput !== "") {
        favCharacter.innerText = nameInput + " is my favourite character";
    } else {
        favCharacter.innerText = "My favourite character is Inder";
    }
}

document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        updateFavoriteCharacter();
    }
});

let shapeIndex = 0;
function classchange() {
    let img = document.getElementById("shapeImage");
    shapeIndex++;

    if (shapeIndex % 4 === 1) {
        img.className = "shape1";  
    } else if (shapeIndex % 4 === 2) {
        img.className = "shape2";  
    } else if (shapeIndex % 4 === 3) {
        img.className = "shape3";  
    } else {
        img.className = "";  
    }
}

document.getElementById("themeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});