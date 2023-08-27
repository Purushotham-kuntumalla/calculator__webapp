


//function to display the input on the screen
function printValtoDisplay(value){
    document.getElementById('displayPanel').textContent += value;
}

function printValtoScreen(value){
    document.getElementById('displayPanel').textContent = value

    if ( value) {
        
    }else{
        document.getElementById('displayPanel').textContent = value
    }
}

// function to clear the screen 
function clearScreen(){
    let screen = document.getElementById('displayPanel')
    screen.textContent = ''
}
// function to clear the input one on one 
function clearScreenPanel(){
    let screen = document.getElementById('displayPanel').textContent.trim()
    let trim = screen.slice(0,-1)
    document.getElementById('displayPanel').textContent = trim
}

// function to print the result and perform the action 
function printResult(){
    let expression = document.getElementById('displayPanel').textContent;
   const operation = eval(expression)
    document.getElementById('displayPanel').textContent = operation
   
    
}

// function to update the content 
