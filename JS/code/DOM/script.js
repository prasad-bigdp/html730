console.log(document)
console.log(document.getElementsByTagName('h2')[0]);
console.log(document.getElementsByClassName('heading')[0])
console.log(document.getElementById('head'))
console.log(document.querySelector('h2'));
console.log(document.querySelectorAll("h2"))


console.log(document.getElementsByTagName('p')[0])
console.log(document.getElementsByClassName('para')[0]);
console.log(document.getElementById('para1'));
console.log(document.querySelector('.para'));
console.log(document.querySelectorAll('.para')[0])

// -------
const x = document.getElementById('head');
console.log(x.textContent)
x.textContent = "Bye World"

const p = document.getElementById('para1')
p.textContent = "Bye"
function incr ()
{
    const p1 = document.getElementById("count")
	let c = p1.textContent
	c++
	p1.textContent = c  
}

function evenOdd ()
{
    const numPara = document.getElementById('count')
    const para= document.getElementById('para')
    if (numPara.textContent % 2 == 0)
    {
      para.textContent ="even"  
    }
    else
    {
        para.textContent="odd"
    }
}












