const inputEle = document.getElementById('inp');
const reverseButton = document.getElementById('reverseBtn');
const outputPara = document.getElementById('output');

function reverse ()
{
    let str = inputEle.value;
    outputPara.textContent = "your reverse data is :" + str.split('').reverse().join('');
    inputEle.value=''
}      
