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
    return 'Write your method here';
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
