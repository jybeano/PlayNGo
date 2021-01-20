// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')

window.addEventListener('keypress',myFunction)

function myFunction(e) {
    if(e.keyCode === 13) {
        console.log("Pressed Enter Key")
        const displayedNum = display.textContent
        if(displayedNum !== "FF") {
            hexStr = parseInt(displayedNum,16)
            hexStr += 1
            display.textContent = hexStr.toString(16).toUpperCase()
            console.log(display.textContent)
        } else {
            display.textContent = '0'
            console.log(display.textContent)
        }
    }
}
    
// {    
    // if (e.target.matches('button')){
    //     const key = e.target
    //     const action = key.dataset.action
    //     const operators = ['add','subtract','divide','multiply']
    //     const keyContent = key.textContent
    //     const displayedNum = display.textContent
        
    //     if(!action){
    //         if(displayedNum === '0'){
    //             display.textContent = keyContent
    //         }
    //         else{
    //             display.textContent += keyContent
    //         }
    //         console.log('Number ' + keyContent)
    //     }
        
    //     if (operators.indexOf(action) !== -1){
    //         key.classList.add('is-depressed')
    //         console.log('Operator ' + keyContent)
    //     }
        
    //     if (action === 'decimal') {
    //         if (!displayedNum.includes('.')){
    //         display.textContent += '.'
    //         }
    //         console.log('Decimal Point')
    //     }
          
    //     if (action === 'clear') {
    //         console.log('Clear')
    //     }
          
    //     if (action === 'calculate') {
    //         console.log('Equal')
    //     }

    // }
// }