var carouselContainer = document.querySelector('.box');

let prev = document.querySelector('#prev-btn');
var next = document.querySelector('#next-btn');

var array = ['a','b','c','d','e'];
let i = array.length;

// function for next btn

function nextImg(){
    
    if(i<array.length){
        i = i+1;

    }else{
        i=1;
    }
    carouselContainer.innerHTML = "<img src="+array[i-1]+".jpg>";
}

function prevImg(){
    if(i<array.length && i>1){
        i = i-1;

    }else{
        i=array.length;
    }
    carouselContainer.innerHTML = "<img src="+array[i-1]+".jpg>";
}


var interval = setInterval(nextImg,2000);

carouselContainer.addEventListener('mouseover', ()=>{
  
 clearInterval(interval);
});

carouselContainer.addEventListener('mouseleave', ()=>{
interval = setInterval(nextImg,2000); 
});

next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);