"use strict";
let nonActive = document.querySelectorAll('.non-active'); 

nonActive.forEach(element => {
    element.addEventListener('mouseenter',()=>{
        nonActive.forEach(element=>{
                  element.classList.remove('active')
        })
        element.classList.add('active')
        document.querySelector('#left').classList.remove('animation');        
        })
});

nonActive.forEach(element=>{
    element.addEventListener('click',()=>{
            document.body.style.backgroundImage=element.style.backgroundImage
    document.querySelector('#left').classList.add('animation');
    document.querySelector('#loc').innerText=element.innerText
    })

})


