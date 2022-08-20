function addingEventListener() {
    const input = document.getElementById('button');

    // Create the clickAlert function
    function clickAlert(){
        alert('I was clicked!');
    }

    //add listener
    return input.addEventListener('click', clickAlert);
}

// Call the function
addingEventListener();


// Always remember to call the function if the addEventListener() is within another function.
// However, if the event listener is not within a function, 
// no need of doing so
