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