let count = document.querySelector('.count');
let counter = 0;
setInterval(() => {
    if(counter < 500){
        counter++;
        count.innerText = counter;
    }
}, 10);