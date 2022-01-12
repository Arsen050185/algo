const canSum = (number, arr, memo={}) => {
    if(number in memo) return memo[number];
    if (number === 0) return true;

    if(number < 0) return false;
    
    for (let num of arr){
        const remainer = number - num;
        if(canSum(remainer, arr, memo) ===  true){
            memo[number] = true
            return true;
        }
    }
    memo[number] = false

    return memo[number]
}

console.log(canSum(7, [2,4]));
console.log(canSum(7, [3,4]));
console.log(canSum(300, [7, 14]));