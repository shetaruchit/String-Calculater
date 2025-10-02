class StringCalculator {
  add(numbers) {
    if(this._isEmpty(numbers)) {
      return 0;
    }

    const numbersArray = this._parseNumbers(numbers);
    return this._calculateSum(numbersArray);
  }

  _isEmpty(numbers) {
    return numbers === '';
  }

  _parseNumbers(numbers) {
    if (numbers.includes(',')) {
      return numbers.split(',');
    }
    return [numbers];
  }

  _calculateSum(numbersArray) {
    return numbersArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}

module.exports = StringCalculator;