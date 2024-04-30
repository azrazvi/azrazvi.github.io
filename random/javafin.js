    // Initialize counter value and buttons
    let counterValue = 0;
    const counterElement = document.getElementById('counter');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    // Function to handle button clicks and update counter
    //function incrementCounter() {
    //  counterValue++;
    //  counterElement.textContent = counterValue;
//}
    var i = 0;

    const button = document.querySelector("button1");
            button1.addEventListener('click', buttonClick);
    
            
            //when you click the button, the value in the box increases by x amount
            function buttonClick() {
              document.getElementById('inc').value = i += (random(-10,90));
            }
    
    // Add event listeners to buttons
    button1.addEventListener('click', incrementCounter);
