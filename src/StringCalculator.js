class StringCalculator {
  add(numbers) {
    if(this._isEmpty(numbers)) {
      return 0;
    }

    const { delimiter, numbersString } = this._extractDelimiterAndNumbers(numbers);
    const numbersArray = this._parseNumbers(numbersString, delimiter);
    this._validateNoNegatives(numbersArray);
    return this._calculateSum(numbersArray);
  }

  _isEmpty(numbers) {
    return numbers === '';
  }

  _extractDelimiterAndNumbers(numbers) {
    if(numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      const delimiter = numbers.substring(2, delimiterEndIndex);
      const numbersString = numbers.substring(delimiterEndIndex + 1);
      return { delimiter, numbersString};
    }
    return { delimiter: ',', numbersString: numbers };
  }

  _parseNumbers(numbers, delimiter) {

    const normalizedNumbers = numbers.replace(/\n/g, delimiter);

    if (normalizedNumbers.includes(delimiter)) {
      return normalizedNumbers.split(delimiter);
    }
    return [numbers];
  }

  _validateNoNegatives(numbersArray) {
    const negatives = numbersArray.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
  }

  _calculateSum(numbersArray) {
    return numbersArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}

module.exports = StringCalculator;