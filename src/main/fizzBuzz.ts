export const fizzBuzz = (number: number): string  => {
    switch (true) { 
        case (number % 3 === 0 && number % 5 === 0):
            return "FizzBuzz"
        case (number % 3 === 0):
            return "Fizz"
        case (number % 5 === 0):
            return "Buzz";
        default:
            return String(number)
    }
}