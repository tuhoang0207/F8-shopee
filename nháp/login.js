function logIn () {
    var a  = document.getElementById("years").value;
    var b = document.getElementById("birth").value;
    
    var total = a - b;
    console.log(`Your Age in ${a} is ${total}`);
}

