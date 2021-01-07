document.querySelector('ol').addEventListener('click', function () {
    console.log(event);
    event.target.style.color = `${event.target.textContent}`
})