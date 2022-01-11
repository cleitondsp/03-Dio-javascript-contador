var valorHtml = document.getElementById('valorHtml');
let count = 0;

function decrement () {
    count--;
    valorHtml.innerHTML = count;
}

function increment () {
    count++;
    valorHtml.innerHTML = count
}