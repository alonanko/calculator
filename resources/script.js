function add(a, b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a,b){
    //if(b === 0){
        
    //}
    return a / b;
}

function operate(op, a, b){
    if(op === "+"){
        return add(a, b);
    }
    if(op === "-"){
        return sub(a, b);
    }
    if(op === "*"){
        return mult(a, b);
    }
    if(op === "/"){
        return div(a, b);
    }
}

function evaluate(exp){
    console.log(exp);
    
    exp = exp.split(" ");

    var ans = operate(exp[1], parseFloat(exp[0]), parseFloat(exp[2]));
    console.log(ans);
    return ans;
}

function recordNum(){
    exp += this.id;
    console.log(exp);
    displayExp(exp);
}

function recordOp(){
    exp += " " + this.innerHTML + " ";
    console.log(exp);
    displayExp(exp);
}

function display(ans){
    soln = document.getElementById("soln");
    soln.innerHTML = ans;
}

function displayExp(exp){
    x = document.getElementById("exp");
    x.innerHTML = exp;
}

var exp = "";

nums = Array.from(document.getElementsByClassName("num"));
nums.forEach(num => {num.addEventListener("click", recordNum)});

ops = Array.from(document.getElementsByClassName("op"));
ops.forEach(op => {op.addEventListener("click", recordOp)});

eq = document.getElementById("equals");
eq.addEventListener("click", function() {
    exp = exp.split(" ");
    var ans = operate(exp[1], parseFloat(exp[0]), parseFloat(exp[2]));
    exp = "";
    displayExp(exp);
    display(ans);
    return;
});