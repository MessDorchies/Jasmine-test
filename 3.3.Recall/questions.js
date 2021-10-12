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
    return 'Write your method here';
}

let allElementsExceptFirstThree = (array) => {
    return 'Write your method here';
}

let addElementToBeginning = (array, element) => {
    return 'Write your method here';
}

let sortByLastLetter = (array) => {
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    return 'Write your method here';
}

let makeNegative = (number) => {
    return 'Write your method here';
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
