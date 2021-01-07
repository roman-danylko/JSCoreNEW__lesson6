let url;

document.querySelector('.container').addEventListener('click', function(){
    if(event.target.className == 'box'){
        url = prompt('Введіть url зображення');
    }
    
    event.target.style.backgroundImage = `url(${url})`;
})

