function multiplesOfNum (num, length){
    let arrayOfNumMultiples = []
    for(let i = 1; i <= length; i++){
        let nextNum = num * i;
        arrayOfNumMultiples.push(nextNum)
    }

    return arrayOfNumMultiples
}

console.log(multiplesOfNum(7,5));
console.log(multiplesOfNum(12,10));
console.log(multiplesOfNum(17,6))