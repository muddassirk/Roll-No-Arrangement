
let a = 0;

let arrayOne = [];

function add_rollNo_array() {
    arrayOne[a] = document.getElementById("userInput").value;
    console.log(arrayOne[a] + " Added at index " + a);
    a++;
    // console.log(arrayOne);
    document.getElementById("userInput").value = "";

   
}




function arrangeArr() {
    
    
    var _even = [];
    var _odd = [];

    for (var i = 0; i <= arrayOne.length; i++) {
        if (i % 2) {
            _even.push(i)
            document.getElementById("row_even").innerHTML = _even;
        } else {
            _odd.push(i)
            document.getElementById("row_odd").innerHTML = _odd;

        }
        
    }
    
    // console.log(_even)
    // console.log(_odd)

  
}




function displayBtn() {
    let userInput = document.getElementById("userInput").value;
    // userInput = parseInt(userInput);
    // console.log(arrayOne);    

    let newRoll = document.createElement("p");
    newRoll.innerHTML = userInput;
    document.body.appendChild(newRoll);


}









// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// array.sort((a, b) => b % 2 - a % 2 || a - b);
// console.log(array);





