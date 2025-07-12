console.log(window.location)
function fun ()
{
    // window.location.href="https://www.google.com"
    // window.location.reload()
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((res) =>
    {
        document.getElementById('vd').srcObject =res
    })
}