const StringCalculator = require("../src/StringCalculator");

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    describe('add method', () => {

        test('should return 0 for empty string', () => {
            expect(calculator.add('')).toBe(0);
        });

        test('should return the number itself for single number', () => {
            expect(calculator.add('1')).toBe(1);
        });

        test('should return sum of two comma-separated numbers', () => {
            expect(calculator.add('1,5')).toBe(6);
        });

    });
});