function compoundInterest(principle, years, interest){
    let total = principle

    for(let i = 0; i < years; i++){
        total = total * (1+interest);
    }
    return Math.round(total*100)/100;
}

console.log(compoundInterest(100, 10, .02));