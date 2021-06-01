//  Caps Lock Activated?
// Write some text in the input field,
//  using the Cap Lock key on and off in the input field:

// Hint: The getModifierState() method

//  Caps Lock Activated?
const password = document.querySelector('#password');
const message = document.querySelector('.message');
password.addEventListener('keyup', function (e) {
    if (e.getModifierState('CapsLock')) {
        message.textContent = 'Caps lock is on';
    } else {
        message.textContent = ' ';
    }
});

function myCaps(event) {
    var x= event.getModifierState("CapsLock");
    document.getElementsById('caps').innerHTML= "The Caps is On!" + x;
}

function myCaps(event) {
    var x = event.getModifierState("CapsLock");
    document.getElementById('caps').innerHTML = 'Caps Lock Activated ' + x;
}