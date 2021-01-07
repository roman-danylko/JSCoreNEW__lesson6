let count = 1;

document.querySelector('.box').addEventListener('mouseover', function(){
    if(count == 1){
        event.target.style.backgroundColor = 'red'
    }else if(count == 2){
        event.target.style.backgroundColor = 'green'
    }else if(count == 3){
        event.target.style.backgroundColor = 'yellow'
        count = 0
    }
    count++
});

document.querySelector('.box').addEventListener('mouseout', function(){
    event.target.style.backgroundColor = 'blueviolet'
})