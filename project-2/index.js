const GenerateRgbColor= ()=>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)


    return `rgb(${r},${g},${b})`
}

const updateClr = () =>{
    const clr = GenerateRgbColor()
    document.getElementById('clrbox').style.backgroundColor= clr

    document.getElementById('clrcode').innerText= clr
}




const cpyClrCode =() =>{
    const clrcode= document.getElementById('clrcode')
    const inputTag= document.createElement('input')
    document.body.appendChild(inputTag)
    inputTag.value= clrcode.innerText


    inputTag.select()
    document.execCommand('copy')
    document.body.removeChild(inputTag)

alert('Copied')

}


document.getElementById('cpybtn').addEventListener('click',()=>{
    cpyClrCode()
})





function refresh(){

    updateClr()

}



