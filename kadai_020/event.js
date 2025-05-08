
const btn = document.querySelector("#btn");

const text = document.querySelector("#text");
console.log(text);

btn.addEventListener('click', () => {
    setTimeout(()=> {

    text.textContent = 'ボタンがクリックされました';
    },2000);
});