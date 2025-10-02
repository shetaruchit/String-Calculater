# String-Calculater
String Calculator TDD Kata implementation following the three laws of TDD. Clean, modular JavaScript code with 100% test coverage using Jest. 
## About

This project demonstrates Test-Driven Development (TDD) principles by implementing a string calculator that can:
- Handle empty strings
- Add single and multiple numbers
- Support different delimiters
- Handle new lines between numbers
- Validate against negative numbers

## The Three Laws of TDD

This implementation strictly follows the three laws of TDD:

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
npm install
```

### Running Tests
```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Project Structure
```
├── src/
│   └── StringCalculator.js    # Main implementation
├── tests/
│   └── StringCalculator.test.js    # Test suite
├── package.json
└── README.md
```

## Implementation Steps

Each step was implemented following TDD principles with frequent commits:

1. ✅ Empty string returns 0
2. ✅ Single number returns the number
3. ✅ Two comma-separated numbers return their sum
4. ✅ Handle any amount of numbers
5. ✅ Handle new lines between numbers
6. ✅ Support different delimiters
7. ✅ Throw exception for negative numbers
8. ✅ Show all negative numbers in exception message

## Features Implemented

### Basic Functionality
- **Empty String**: `add("")` returns `0`
- **Single Number**: `add("1")` returns `1`
- **Two Numbers**: `add("1,5")` returns `6`
- **Multiple Numbers**: `add("1,2,3,4,5")` returns `15`

### Advanced Features
- **New Line Support**: `add("1\n2,3")` returns `6`
- **Custom Delimiters**: `add("//;\n1;2")` returns `3`
- **Negative Number Validation**: `add("-1,2")` throws `"negative numbers not allowed -1"`
- **Multiple Negatives**: `add("2,-4,3,-5")` throws `"negative numbers not allowed -4,-5"`

## Code Quality

- **100% Test Coverage**: All code paths are tested
- **Clean Architecture**: Modular design with single responsibility methods
- **Error Handling**: Proper exception handling for invalid inputs
- **Readable Code**: Well-named methods and clear logic flow

## Commit History

Each feature was implemented with the Red-Green-Refactor cycle, with commits after each step to show the evolution of the code:

```
60163c7 RED-GREEN: Throw exception for negative numbers
00cc001 RED-GREEN: Support different delimiters
c08dfa9 RED-GREEN: Handle new lines between numbers
8a4b439 RED-GREEN-REFACTOR: Handle any amount of numbers
8f1867d RED-GREEN: Handle any amount of numbers
28fa44e RED-GREEN: Two comma-separated numbers return sum
cdcaecc RED-GREEN: Single number returns itself
ef34c81 RED-GREEN: Empty string returns 0
9d7a120 Initial project setup with Jest testing framework
```