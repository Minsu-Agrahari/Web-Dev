// selector 
const start = document.querySelector('.start')
const end = document.querySelector('.end');

const hexRange = ['0','1','2','3','4','5','6',7,'8','9','a','b','c','d','e','f'];


const hexCodeGenerator = function(){
    let hexCode = '#';
    for(let i=0; i<6; i++){
        hexCode += hexRange[Math.floor(Math.random()*16)]
    }
    return hexCode;
}

const changeBgColor = function(){
    document.body.style.backgroundColor = hexCodeGenerator()
}
let changeColorInterval;
start.addEventListener('click', function(){
    changeColorInterval = setInterval(changeBgColor, 1000)
})

end.addEventListener('click', function(){
    clearInterval(changeColorInterval);
})

