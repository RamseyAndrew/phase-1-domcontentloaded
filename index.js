// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM has loaded');

    const textElement = document.getElementById("text")
    textElement.textContent = "This is really cool!";
    console.log(textElement.textContent);
})
console.log('This console.log() fires when index.js loads - before DOMContentLoaded is triggered');