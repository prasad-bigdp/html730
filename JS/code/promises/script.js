let mood = "bad"
//backend
let p = new Promise(function (resolve, reject) 
{
    if (mood == "good")
    {
        setTimeout(() => resolve("take 1 lakh"), 2000) 
    }
    else
    {
        setTimeout(() => reject("I will not give"), 2000) 
    }
})
console.log(p)
//frontend
p
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
