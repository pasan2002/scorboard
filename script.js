let countEl = document.getElementById("countel")
let count = 0

function b1(){
    count += 1
    countEl.textContent = count
}

function b2(){
    count += 3
    countEl.textContent = count
}

function b3(){
    count += 5
    countEl.textContent = count
}

let countEl2 = document.getElementById("countel2")
let count2 = 0

function b11(){
    count2 += 1
    countEl2.textContent = count2
}

function b22(){
    count2 += 3
    countEl2.textContent = count2
}

function b33(){
    count2 += 5
    countEl2.textContent = count2
}

function back(){
    count = 0
    countEl.textContent = count
    count2 = 0
    countEl2.textContent = count2
}