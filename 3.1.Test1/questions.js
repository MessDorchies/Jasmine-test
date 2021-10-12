
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2; 
}
let afficherCar5 =  (texte) => {
    return texte.charAt(4);
}
let afficher9Car =  (texte) => {
    return texte.slice(0,9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    return (typeof texte === 'string') ? true : false;
}

let AfficherExtensionString =  (texte) => {
    return texte.substr(texte.length - 3, texte.length);
}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length -1;
}
let InverseString =  (texte) => {
    let inversed = "";
    for(let i = 0; i <= texte.length; i++){
        inversed += texte.charAt(texte.length-i);
    }
    return inversed;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let absArray = [];
    array.forEach(element => {
        absArray.push(Math.abs(element));
    })
    return absArray
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon,2));
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2));
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids / Math.pow(taille,2)).toFixed(2));
}
