document.querySelector('.box').addEventListener('mouseover', function(){
    event.target.style.borderColor = 'green';
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочеш знати який?';
})

document.querySelector('.box').addEventListener('mousedown', function(){
    event.target.style.borderColor = 'yellow';
    event.target.style.backgroundColor = '#000';
    event.target.style.color = '#fff';
    event.target.textContent = 'А я тобі не скажу!';
})

document.querySelector('.box').addEventListener('mouseup', function(){
    event.target.style.borderColor = 'green';
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочеш знати який?';
})

document.querySelector('.box').addEventListener('mouseout', function(){
    event.target.style.borderColor = 'rgb(255, 187, 0)';
    event.target.style.backgroundColor = 'rgb(189, 43, 226)';
    event.target.style.color = 'blue';
    event.target.textContent = 'У мене є секрет!';
})