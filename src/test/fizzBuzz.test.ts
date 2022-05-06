import {fizzBuzz} from "../main/fizzBuzz";

describe('Fizz Buzz kata', () => {
    it("should return Fizz if the number is a multiple of 3", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    })

    it("should return Buzz if the number is multiple of 5",()=> {
        expect(fizzBuzz(10)).toBe("Buzz");
    })

    it("should return FizzBuzz if the number is multiple of 3 and 5",()=> {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })

    it("should return number as string if the number is not multiple of 3 or 5",()=> {
        expect(fizzBuzz(4)).toBe("4");
    })
})
