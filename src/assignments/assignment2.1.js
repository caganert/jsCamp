//assignment 2.1.1 (Finding Prime Numbers)
console.log("=======Prime Numbers=======")

function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        let counter=0
        for(let j=2; j<number; j++)
        {
            if(number%j==0)
            {
                counter++
            }
        }
        if(counter==0)
        {
            console.log(number + " is a prime number.")
        }
        else{
            console.log(number + " is not a prime number.")
        }
    }
}

findPrime(52)
findPrime(21,71)
findPrime(82,73,43,75)

//assignment 2.1.2 (Friend Numbers)
console.log("\n=======Friend Numbers=======")

function checkFriendNumbers(number1, number2) {
    let total1=0, total2=0
    for(let i = 1; i < number1; i++)
    {
        if(number1%i==0)
        {
            total1 = total1 + i
        }
    }
    for( i = 1; i < number2; i++)
    {
        if(number2%i==0)
        {
            total2 = total2 + i
        }
    }
    if(total1==number2 && total2 == number1)
    {
        console.log(number1 + " and " +number2 + " are friend numbers.")
    }
    else{
        console.log(number1 + " and " +number2 + " are not friend numbers.")
    }
}

checkFriendNumbers(12,25)
checkFriendNumbers(49,70)
checkFriendNumbers(220,284)
checkFriendNumbers(1184,1210)

//assignment 2.1.3 (Perfect Numbers)
console.log("\n=======Perfect Numbers=======")

function isPerfectNumber(number) {
    let total=0
    for(let i = 1; i < number; i++)
    {
        if(number%i==0)
        {
            total += i
        }
    }
    
    if(total==number)
    {
        return true
    }
    else{
        return false
    }
}

function perfectNumbers() {
    console.log("Perfect Numbers (1-1000")
    for (let i = 1; i <= 1000; i++) {
        if(isPerfectNumber(i)){
            console.log(i)
        }
        
    }
}

perfectNumbers()

//assignment 2.1.4 (Listing Prime Numbers)
console.log("\n=======List of Prime Numbers (1-1000)=======")

function listPrime(){
    console.log("Prime Numbers (1-1000")
    for (let i = 1; i <= 1000; i++) {
        let counter = 0
        for(let j=2; j < i; j++)
        {
            if(i%j==0)
            {
                counter++
            }
        }
        if(counter==0)
        {
            console.log(i)
        }
    }
}

listPrime()
