const StringCalculator = require("../src/StringCalculator");

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    describe('add method', () => {
        test('should return 0 for empty string', () => {
            expect(calculator.add(' ')).toBe(0);
        });
    });
});