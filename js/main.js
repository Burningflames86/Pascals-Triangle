const container = document.querySelector('.container');
const inputText = document.getElementById('input');
const button = document.getElementById('button');
const node = container.childNodes;
function factorialize(num) {
    if (num === 0 || num === 1)
      {
        return 1;
      }
    else{
    for (var i = num - 1; i >= 1; i--) 
      {
      num *= i;
      }
    return num;
    }
}

function combination(n){
    value = n-n;
    str = '';
    for(let i = 0; i <= n; i++){
      r = value + i;
      a = ((factorialize(n)/(factorialize(r)*factorialize(n-(r)))));
      str += a+" ";
    }
  return str;
}

function final(s){
var store = [];
    for(let i = 0; i<=s ;i++){
    store[i] = combination(i);
    }
  return store;
}


function display(n){
let sts = '';
for(let i = 0; i<= final(n).length-1; i++){
  sts += `<div> ${final(n)[i]} </div>`
}
return sts;}

button.addEventListener('click', ha);
inputText.addEventListener('keyup', ha);

function ha(){
  if(/[a-zA-Z]/.test((inputText.value).toString())){
    alert("Enter valid input");
  }else if(inputText.value > 18){
    alert("Calm Down Mate!! You wanna explode your device or what");
  }
  else{
  container.innerHTML = display(inputText.value);
  for (let i = 0; i < node.length; i++) {
    node[i].style.animationDelay = `${(i*0.1)+0.1}s`;
  }
  }
}






