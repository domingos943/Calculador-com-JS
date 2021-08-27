function getHistory(){ // the codes bellow were written by Domingos
return document.getElementById("history_value").innerText; // gets the text from the history, by:Domingos ,OOP, {get}
}
function printHistory(num){
    document.getElementById("history_value").innerText=num; // sets a text to history, by:Domingos, OOP {set}
}
function getOutput(){
    return document.getElementById("output_value").textContent;  // gets the text from the output ,OOP {get}
}
function printOutput(num){
    if(num==""){
        document.getElementById("output_value").textContent=num; // if an empty string is detected return this.empty string
    }
    else{   
    document.getElementById("output_value").textContent=getFormatedNumber(num); // else show the value formet to english numbering standards
    }
}
function getFormatedNumber(num){  
    if(number=="") return "";    // this function formats the text to english numbering standards
var n = Number(num);
var value = n.toLocaleString("en");
return value;
}
function reverseNumberFormat(num){  // this function takes away the english format from the param num
return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator"); // an operator variable to run the operator array
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){  // an event listener to handle the callback function as the buttons are clicked
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
        if(output){ //if there is a value in output
            output=output.substr(0,output.length-1);  //takes a string from the output
            printOutput(output);
           }
        } 
        else {
            var output =getOutput();
            var history =getHistory();  // the hsitory board does not take operators if the output is empty
            if(output!=""){
                output=reverseNumberFormat(output);
                history=history+output;
           if(this.id=="="){
               var result = eval(history);
               printOutput(result);
               printHistory("");
           } else{
               history=history+this.id;
               printHistory(history);
               printOutput("");
           }
        
       }
    }
    });
}
    var number=document.getElementsByClassName("number"); // a number variable to run the number array
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){  // an event listener to handle the callback function as the buttons are clicked
        var output = reverseNumberFormat(getOutput()); // this varalbe reverses the output format 
        //if(output!=NaN){
        output+=this.id; // takes the current element and identifies its id  ---this.id---, if the output is a number
        printOutput(output);
        //}
    });
}

// menu codes ... copyrights Domingos;
var calculator_click = document.getElementById("calc");
calculator_click.addEventListener("click",function(){
    var bring_In = document.getElementById("calculator");
    bring_In.style.opacity = 1;

})
var main_click = document.getElementById("main");
main_click.addEventListener("click",function(){
    var bring_In = document.getElementById("calculator");
    bring_In.style.opacity = 0;

})

