let CreationTableauLangages =  () => {
    let LangArray = ["Html","CSS", "Java","PHP"];
    return LangArray;
}

let CreationTableauNombres =  () => {
    let NumArray = [0,1,2,3,4,5];
    return NumArray;
}

let RemplacementElement =  (langages) => {
    let LangArray = langages;
    LangArray.splice(2,1,"Javascript");
    return LangArray;
}

let AjoutElementLangages =  (langages) => {
    let LangArray = langages;
    LangArray.push("Ruby","Python");
    return LangArray
}

let AjoutElementNombres =  (nombres) => {
    let NumArray = nombres;
    let NumNegat = [-2,-1];
    return NumNegat.concat(NumArray);
}

let SuppressionPremierElement =  (langages) => {
    let langArray = langages;
    langArray.shift();
    return langArray;
}

let SuppressionDernierElement =  (langages) => {
    let langArray = langages;
    langArray.pop();
    return langArray;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let string = reseaux_sociaux_chaine.split(',');
    return string;
}

let ConversionTableauChaine =  (langages) => {
    let array = langages;
    return langages.join();
}

let TriTableau =  (reseaux_sociaux) => {
    let array = reseaux_sociaux;
    return array.sort();
}

let InversionTableau =  (langages) =>{
    let array = langages;
    return array.reverse();
}
