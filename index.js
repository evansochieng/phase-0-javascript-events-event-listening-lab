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


// Always remember to call the function
