let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons); //arr use for all button//
arr.forEach((button) => {
  button.addEventListener("click", (e) => {  //when we click the button then pass the (e)//
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {   //AC is all clear button//
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") { //DEL is delete button//
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
