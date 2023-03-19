// declaring and intializing our counter
let count = 0;

// get all the elements needed
let increaseBtn = document.querySelector("#increase-btn");
let decreaseBtn = document.querySelector("#decrease-btn");
let resetBtn = document.querySelector("#reset-btn");
let counterNum = document.querySelector("#h1");


// creating our functions
function increaseCount(){
    count++
    counterNum.textContent = count;
}

function decreaseCount() {
    if(count !== 0){
        count--
    }
    counterNum.textContent = count;
}

function resetCount() {
    count = 0;
    counterNum.textContent = count;
}
// now lets set the buttons
increaseBtn.addEventListener("click", increaseCount);
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);

