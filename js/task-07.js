const inputChange = document.querySelector('input#font-size-control');
const magic = document.querySelector('span#text');

inputChange.addEventListener('change', el => {
    magic.style.fontSize = `${el.target.value}px`;
});