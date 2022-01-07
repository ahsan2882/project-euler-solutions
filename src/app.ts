// problem 1
{
    let sum: number = 0;
    for (let i = 1; i < 1000; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }

    let prob1div = document.querySelector(".problem1")!;
    prob1div.innerHTML += "<h4>Multiples of 3 or 5</h4>";
    prob1div.innerHTML += "<p>" + sum + "</p>"
}

// problem 2

{
    let sum = 0;
    let initfib = 1;
    let nextfib = 2;
    let sumEvenFib = 2;
    const fibonacci = (n: number): number => {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    let i = 1;

    while (fibonacci(i) < 4000000) {
        if (fibonacci(i) % 2 === 0) {
            sum += fibonacci(i);
        }
        i++;
    }

    let prob2div = document.querySelector(".problem2")!;
    prob2div.innerHTML += "<h4>Even Fibonacci numbers</h4>";
    prob2div.innerHTML += "<p>" + sum + "</p>";
}
// problem3
{
    let number = 600851475143;
    for (let i = 2; i < number; i++) {
        while (number % i === 0) {
            number = number / i;
        }
    }

    let prob3div = document.querySelector(".problem3")!;
    prob3div.innerHTML += "<h4>Largest Prime Factor</h4>";
    prob3div.innerHTML += "<p>" + number + "</p>";
}

// problem4
{
    const isPalin = (n: number): boolean => {
        let prod = (n).toString();
        let reverseProd = [...prod.split("")].reverse().join("");
        if (prod === reverseProd) {
            return true;
        }
        return false;
    }
    let palinProd: number[] = []
    let product = 1;
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            product = i * j;
            if (isPalin(product)) {
                palinProd.push(product);
            }
        }
    }

    let prob4div = document.querySelector(".problem4")!;
    prob4div.innerHTML += "<h4>Largest Palindrome Product</h4>";
    prob4div.innerHTML += "<p>" + Math.max(...palinProd) + "</p>";
}
//problem 5
{
    //get lcm of numbers from 1 to 20

    const gcd = (n1: number, n2: number): number => {
        if (n2 === 0) {
            return n1;
        }
        return gcd(n2, (n1 % n2));
    }

    const lcm = (x: number, y: number) => {
        let hcf = gcd(x, y);
        return ((x * y) / hcf);
    }
    let multiple = lcm(1, 2);
    for (let i = 3; i <= 20; i++) {
        multiple = lcm(i, multiple)
    }

    let prob5div = document.querySelector(".problem5")!;
    prob5div.innerHTML += "<h4>Lowest common multiple</h4>";
    prob5div.innerHTML += "<p>" + multiple + "</p>";
}

//problem 6
{
    let sumOfSquares = 0;
    let squaredSum = 0;

    for (let i = 1; i <= 100; i++) {
        sumOfSquares += i * i;
        squaredSum += i;
    }
    squaredSum = squaredSum * squaredSum;

    let prob6div = document.querySelector(".problem6")!;
    prob6div.innerHTML += "<h4>Sum Square Difference</h4>";
    prob6div.innerHTML += "<p>" + Math.abs(squaredSum - sumOfSquares) + "</p>";
}
// problem 7
{
    let MAXSIZE = 999999;
    const getNthPrime = (primes: number[]) => {
        let isPrime: boolean[] = Array(MAXSIZE).fill(true);
        let p, i;
        for (p = 2; p * p < MAXSIZE; p++) {
            if (isPrime[p]) {
                for (i = p * p; i < MAXSIZE; i += p) {
                    isPrime[i] = false;
                }
            }
        }
        for (p = 2; p < MAXSIZE; p++) {
            if (isPrime[p]) {
                primes.push(p);
            }
        }
    }

    let primes: number[] = [];
    getNthPrime(primes);

    let prob7div = document.querySelector(".problem7")!;
    prob7div.innerHTML += "<h4>10001st Prime Number</h4>";
    prob7div.innerHTML += "<p>" + primes[10000] + "</p>";
}

// problem 8
{
    let numberString = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    let maxProduct = 1;
    for(let i = 0; i < numberString.length - 12; i++){
        let subNumString = numberString.substring(i, i+13);
        if(subNumString.includes('0')){
            continue;
        } else{
            let numChar = subNumString.split("").map((item) => parseInt(item));
            let prod = numChar.reduce((prev, next) => prev*next);
            if(maxProduct < prod){
                maxProduct = prod;
            }
        }
    }
    let prob8div = document.querySelector(".problem8")!;
    prob8div.innerHTML += "<h4>Largest product in series</h4>";
    prob8div.innerHTML += "<p>" + maxProduct + "</p>";
}

// problem 9

{
    const checkTriplet = (a: number, b: number, c: number): boolean => {
        if ((a * a) + (b * b) === (c * c)) {
            return true;
        }
        return false;
    }
    const prod = (n:number) => {
        // check special triplet that sum to n
        let a, b, c;
        for (c = n; c > 0; c--) {
            for (b = c - 1; b > 0; b--) {
                for (a = b - 1; a > 0; a--) {
                    if (a + b + c === 1000) {
                        if (checkTriplet(a, b, c)) {
                            return a*b*c;
                        }
                    }
                }
            }
        }
        return 0;
    }
    let answer = prod(1000);
    let prob9div = document.querySelector(".problem9")!;
    prob9div.innerHTML += "<h4>Special Pythagorean Triplet</h4>";
    prob9div.innerHTML += "<p>" + answer + "</p>";
}

// problem 10
{
    var maxLimit = 2000000;
    const getPrimes = (primes: number[]) => {
        let isPrime: boolean[] = Array(maxLimit).fill(true);
        let p, i;
        for (p = 2; p * p < maxLimit; p++) {
            if (isPrime[p]) {
                for (i = p * p; i < maxLimit; i += p) {
                    isPrime[i] = false;
                }
            }
        }
        for (p = 2; p < maxLimit; p++) {
            if (isPrime[p]) {
                primes.push(p);
            }
        }
    }

    let primes: number[] = [];
    getPrimes(primes);
    let answer = primes.reduce((prev, next) => prev + next);
    let prob10div = document.querySelector(".problem10")!;
    prob10div.innerHTML += "<h4>Summation of Primes</h4>";
    prob10div.innerHTML += "<p>" + answer + "</p>";
}

// problem11
{

}