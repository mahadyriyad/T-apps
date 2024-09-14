const counterEl = document.getElementById("counter")
const btnOne = document.getElementById("plus")
const btnTwo = document.getElementById("minus")


let counter=0


/*
btnOne.addEventListener('click', ()=>{
    counter=counter+1
    counterEl.textContent=counter


    if(counter>= 10)
    {
        btnOne.setAttribute('disabled', true)
    }
    else{
        btnOne.removeAttribute('disabled',false)
    }
    
})
btnTwo.addEventListener('click', ()=>{
    counter=counter-1
    counterEl.textContent=counter




    if(counter <= 0)
        {
            btnTwo.setAttribute('disabled', true)
        }
        else{
            btnTwo.removeAttribute('disabled',false)
        }
        

})
*/
                            //   or 


const upDatevalu =(value)=>{
    counter=counter+value
    counterEl.textContent=counter


    if(counter>= 10)
    {
        btnOne.setAttribute('disabled', true)
    }
    else{
        btnOne.removeAttribute('disabled',false)
    }

    // for mainus 

    if(counter <= 0)
        {
            btnTwo.setAttribute('disabled', true)
        }
        else{
            btnTwo.removeAttribute('disabled',false)
        }

}
btnOne.addEventListener('click', ()=>{
    upDatevalu(1)

})
btnTwo.addEventListener('click', ()=>{

    upDatevalu(-1)
})