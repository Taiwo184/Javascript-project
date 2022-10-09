var input = document.getElementById("userinput")
var button = document.getElementById("enter")
var output = document.getElementById("output1")

class NumeralConverter {
    constructor(number){
        this.number = number;
        this.result = "";
    }

    processNumeral(symbol, symbolValue){
        while(this.number >= symbolValue){
            this.result += symbol;
            this.number -= symbolValue;
        }
    }
}
function convertToRoman (number){
    let converter = new NumeralConverter(number);
    converter.processNumeral("I", 1);
    //converter.processNumeral("X", 10);
   // converter.processNumeral("IX", 9;
   // converter.processNumeral("V", 5);
    //converter.processNumeral("IV", 4);
   // converter.processNumeral("I", 0);
    //converter.processNumeral();
    //converter.processNumeral();
    return converter.result
}
 function createElement(){
 document.getElementById("output1").innerHTML = convertToRoman(number);


 }


button.addEventListener("click", createElement);
//console.log(convertToRoman(3))
    
