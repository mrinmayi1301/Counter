const countEl = document.getElementById('count');
let countVal = 0;

function decreaseNo(){
   countVal --;
   countEl.textContent = countVal;
   btnColor();
   
}

function reset(){
    countVal = 0
    countEl.textContent = countVal
    countEl.style.color = "black";
}

function increaseNo(){
    countVal ++;
    countEl.textContent = countVal
    btnColor();
}

function btnColor(){
    if(countVal < 0){
        countEl.style.color = "red";
       }else if(countVal == 0){
        countEl.style.color = "black";
       }else{
        countEl.style.color = "green";
       }
}