const buttons = document.querySelectorAll("button");




// const button = document.querySelector("button");
// button.addEventListener('clicl', changeText);

const button1 = document.querySelector(".button1");
button1.addEventListener('click',changeText);

const button2 = document.getElementById("button2");
button1.addEventListener('click',changeItem);


const heading = document.querySelector("h1");

function changeText() {
    const head = prompt("tell me a secret");
    heading.textContent = head;
}

    
