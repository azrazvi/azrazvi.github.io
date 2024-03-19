const button = document.querySelector("button");
button.addEventListener('clicl', changeText);

const heading = document.querySelector("h1");

function changeText() {
    const head = prompt("tell me a secret");
    heading.textContent = head;
}