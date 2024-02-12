const userText = document.getElementById('userText');

document.getElementById("userColor").addEventListener("change", (event) => {
    userText.classList.add(`text-[${event.target.value}]`);
});
document.getElementById("userTextSize").addEventListener("change", (event) => {
    userText.classList.add(`text-[${event.target.value}px]`);
});
document.getElementById("userAlignLeft").addEventListener("click", () => {
    userText.classList.add('text-left');
    userText.classList.remove('text-center','text-right')
});
document.getElementById("userAlignCenter").addEventListener("click", () => {
    userText.classList.add('text-center');
    userText.classList.remove('text-left','text-right')
});
document.getElementById("userAlignRight").addEventListener("click", () => {
    userText.classList.add('text-right');
    userText.classList.remove('text-left','text-center')
});

document.getElementById("userBold").addEventListener("click", () => {
    userText.classList.toggle('font-bold');
});
document.getElementById("userItalic").addEventListener("click", () => {
    userText.classList.toggle('italic');
});
document.getElementById("userUnderline").addEventListener("click", () => {
    userText.classList.toggle('underline');
});
