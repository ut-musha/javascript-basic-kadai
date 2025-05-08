
const btn = document.querySelector("#btn");

const text = document.querySelector("#text");
console.log(text);

btn.addEventListener('click', () => {
    
    text.textContent = 'ボタンがクリックされました。';
});