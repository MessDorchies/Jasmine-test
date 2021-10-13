let selectElementsStartingWithA = (array) => {
    let startWithA = [];
    array.forEach(element => {
        if(element.startsWith('a')){
            startWithA.push(element);
        }
    });
    return startWithA;
}

let selectElementsStartingWithVowel = (array) => {
    let startWithVowel = [];
    array.forEach(element => {
        if(element.startsWith('a') || element.startsWith('e') || element.startsWith('i') || element.startsWith('o') || element.startsWith('u') || element.startsWith('y')){
            startWithVowel.push(element);
        }
    });
    return startWithVowel;
}

let removeNullElements = (array) => {
    let newArray = [];
    array.forEach(element => {if(element !== null) newArray.push(element)})
    return newArray;
}

let removeNullAndFalseElements = (array) => {
    let newArray = [];
    array.forEach(element => {if(element !== null && element !== false) newArray.push(element)})
    return newArray;
}

let reverseWordsInArray = (array) => {
    let newArray = [];
    array.forEach(element => {
        let inver = "";
        for(let i =1; i <= element.length; i++){
            inver += element[element.length-i];
        }
        newArray.push(inver);
    })
    return newArray;
}

let everyPossiblePair = (array) => {
    let newArray = [];
        for(let i = 0; i < array.length; i++){
            for(let j = i+1; j < array.length; j++){
                if(array[i] !== array[j]){
                    if(newArray.length === 0){
                        newArray.push([array[i],array[j]])
                    }
                    else{
                        newArray.push([array[j],array[i]])
                    }   
                }
            }
        }
    return newArray.sort();
}

let allElementsExceptFirstThree = (array) => {
    let newArray = [];
    for(let i = 3; i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

let addElementToBeginning = (array, element) => {
    let newArray = [element];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;

}

let sortByLastLetter = (array) => {
    let newArray = [];
    let secondArray = [];
    array.forEach(element => {
        let inver = "";
        for(let i =1; i <= element.length; i++){
            inver += element[element.length-i];
        }
        newArray.push(inver);
    })
    newArray.sort();
    newArray.forEach(element => {
        let inver = "";
        for(let i =1; i <= element.length; i++){
            inver += element[element.length-i];
        }
        secondArray.push(inver)
    })
    return secondArray;
}

let getFirstHalf = (string) => {
    let firstHalf = "";
    let secondHalf = "";
    for(let i = 0; i < string.length; i++){
        if(i < string.length/2){
            firstHalf += string[i];
        }
        else{
            secondHalf += string[i]
        }
    }
    return firstHalf;
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let numPalin = 0;
    array.forEach(element => {
        let inver = "";
        for(let i =1; i <= element.length; i++){
            inver += element[element.length-i];
            if (element === inver ) numPalin++;
        }
    })
    return numPalin;
}

let shortestWord = (array) => {
    let shortTillNow = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].length < array[shortTillNow].length) shortTillNow = i;
    }
    return array[shortTillNow];
}

let longestWord = (array) => {
    let longTillNow = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].length > array[longTillNow].length) longTillNow = i;
    }
    return array[longTillNow];
}

let sumNumbers = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element
    })
    return sum;
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element
    })
    return sum/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArray = [];
    for(let i = 0; i < 6; i++){
        newArray.push(array[i])
    }
    return newArray;
}

let convertArrayToObject = (array) => {
    let myObject = new Object;
    for(let i = 0; i < array.length; i+=2){
        myObject[array[i]] = array[i+1];
    }
    return myObject;
}

let getAllLetters = (array) => {
    let newArray = [];
    let arraySorted = [];
    array.forEach(element => {
        for(let i = 0; i < element.length; i++){
            newArray.push(element[i])
        }
    })
    newArray.sort();
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] !== newArray[i-1]){
            arraySorted.push(newArray[i]);
        }
    }
    return arraySorted;

}

let swapKeysAndValues = (object) => {
    let newObject = {};
    for(let key in object){
        newObject[object[key]] = key;
    }
    return newObject;

}

let sumKeysAndValues = (object) => {
    let newArray = [];
    for(let key in object){
        newArray.push(object[key]);
        newArray.push(parseInt(key));
    }
    let sum = 0;
    newArray.forEach(element => {
        sum += element;
    })
    return sum;
}

let removeCapitals = (string) => {
    let newString = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[i].toUpperCase() ){
            newString += string[i];
        }
        else if(string[i] === " "){
            newString += " ";
        }
    }
    return newString;
}

let roundUp = (number) => {
    return Math.round(number)+1;
}

let formatDateNicely = (date) => {
    let dateToString = "";
    dateToString += (date.getDate() < 10) ? "0" + date.getDate() + "/" : date.getDate() + "/";
    dateToString += (date.getMonth() <10) ? "0" + (date.getMonth() +1) + "/" : (date.getMonth() +1) + "/";
    dateToString += date.getFullYear();
    return dateToString;
}

let getDomainName = (string) => {
    let domaineName = ""
    let pass = false;
    for(let i = 0; i < string.length-4; i++){
        if(string[i] === "@"){
            pass = true;
        }
        else if(pass){
            domaineName += string[i]
        }
    }
    return domaineName;
}

let titleize = (string) => {
    let newString = "";
    for(let i = 0; i < string.length; i++ ){
        if(string[i-1] === " " && string[i-2] !== ".") {
           (string[i] === "t" || string[i] === "a") ? newString += string[i] : newString += string[i].toUpperCase();
        }
        else if( i === 0){
            newString += string[i].toUpperCase();
        }
        else if(string[i-2] === "."){
            newString += string[i].toUpperCase();
        }
        else{
            newString += string[i];
        }
        
    }
    return newString;
}

let checkForSpecialCharacters = (string) => {
    let format = /[_\W]0-9/;
    let format2 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(string.match(format) || string.match(format2)){
        return true;
    }
    else{
        return false
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    for(let i = number-1; i > 1; i--){
        number *= i;
    }
    return number;
}

let findAnagrams = (string) => {
    let allAnagram = [];
    for (let i = 0; i < string.length*2; i++) {
        let anagram = "";
        if(string.length === 3){
            
            if(i === 0){
                anagram += string[2] + string[1] + string[0];
            }
            else if( i === 1){
                anagram += string[1] + string[0] + string[2];
            }
            else if( i === 2){
                anagram += string[2] + string[0] + string[1];
            }
            else if( i === 3){
                anagram += string[0] + string[2] + string[1];
            }
            else if( i === 4){
                anagram += string[1] + string[2] + string[0];
            }
            else{
                anagram += string[0] + string[1] + string[2];
            }
            
        }
        else if(string.length === 2){
            if(i === 0){
                anagram += string[0] + string[1]
            }
            else{
                anagram += string[1] + string[0];
            }
        }
        allAnagram.push(anagram);
        
      }
    return allAnagram;
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5/9));
}

let letterPosition = (array) => {
    for(let i = 0; i < array.length; i++){
    if(array[i] === 'a' || array[i] === 'A'){
        array[i] = 1;
    }
    else if(array[i] === 'b' || array[i] === 'B'){
        array[i] = 2;
    }
    else if(array[i] === 'c' || array[i] === 'C'){
        array[i] = 3;
    }
    else if(array[i] === 'd' || array[i] === 'D'){
        array[i] = 4;
    }
    else if(array[i] === 'e' || array[i] === 'E'){
        array[i] = 5;
    }
    else if(array[i] === 'f' || array[i] === 'F'){
        array[i] = 6;
    }
    else if(array[i] === 'g' || array[i] === 'G'){
        array[i] = 7;
    }
    else if(array[i] === 'h' || array[i] === 'H'){
        array[i] = 8;
    }
    else if(array[i] === 'i' || array[i] === 'I'){
        array[i] = 9;
    }
    else if(array[i] === 'j' || array[i] === 'J'){
        array[i] = 10;
    }
    else if(array[i] === 'k' || array[i] === 'K'){
        array[i] = 11;
    }
    else if(array[i] === 'l' || array[i] === 'L'){
        array[i] = 12;
    }
    else if(array[i] === 'm' || array[i] === 'M'){
        array[i] = 13;
    }
    else if(array[i] === 'n' || array[i] === 'N'){
        array[i] = 14;
    }
    else if(array[i] === 'o' || array[i] === 'O'){
        array[i] = 15;
    }
    else if(array[i] === 'p' || array[i] === 'P'){
        array[i] = 16;
    }
    else if(array[i] === 'q' || array[i] === 'Q'){
        array[i] = 17;
    }
    else if(array[i] === 'r' || array[i] === 'R'){
        array[i] = 18;
    }
    else if(array[i] === 's' || array[i] === 'S'){
        array[i] = 19;
    }
    else if(array[i] === 't' || array[i] === 'T'){
        array[i] = 20;
    }
    else if(array[i] === 'u' || array[i] === 'U'){
        array[i] = 21;
    }
    else if(array[i] === 'v' || array[i] === 'V'){
        array[i] = 22;
    }
    else if(array[i] === 'w' || array[i] === 'W'){
        array[i] = 23;
    }
    else if(array[i] === 'x' || array[i] === 'X'){
        array[i] = 24;
    }
    else if(array[i] === 'y' || array[i] === 'Y'){
        array[i] = 25;
    }
    else if(array[i] === 'z' || array[i] === 'Z'){
        array[i] = 26;
    }
    }
    return array;
}
