/*
    15 : 3 = Fizz
    15 : 5 = Buzz
    15 : (3) va (5) = FizzBuzz
*/

function fizzBuzz(n) {
    let result = [];

    for(let i = 0; i <= n; i++){
        if(i % 15 === 0){
            result.push('FizzBuzz')
        }else if(i % 3 === 0){
            result.push('Fizz')
        }else if(i % 5 === 0){
            result.push('Buzz')
        }else {
            result.push(String(i))
        }
    }
    return result;
}

console.log(fizzBuzz(30));