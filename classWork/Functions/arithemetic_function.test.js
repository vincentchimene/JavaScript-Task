
const { add,subtract } = require ('./arithemetic_function')

test("test addition of two positive numbers", () =>{
    
    let firstNumber = 82;
    let secondNumber = 18;

    expect(add(firstNumber, secondNumber)).toBe(100)





})


test("test that addition of a positive and a negative number works accurately" ,() =>{

    let firstNumber = 88;
    let secondNumber = -18;

    expect(add(firstNumber, secondNumber)).toBe(70)
    


})


test("test that addition of a negative and a negative number works accurately", () =>{

    let firstNumber = -5;
    let secondNumber = -10;

    expect(add(firstNumber, secondNumber)).toBe(-15)
    


})


test("test subtraction of two positive numbers works", () =>{
    
    let firstNumber = 88;
    let secondNumber = 18;

    expect(subtract(firstNumber, secondNumber)).toBe(70)





})
