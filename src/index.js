const twoDigitToRead = (number, numberNames, twoDigit) => {
    let res = '';
    if(number < 20 && number > 14){
        const firstDigit = number % 10;
            res += twoDigit[firstDigit] + 'teen';
        }
        if(number >= 20){
            const firstDigit = (number - number % 10)/10;
            res += twoDigit[firstDigit] + 'ty';
        if(number%10 > 0){
            res += ' ' + numberNames[number%10];
        }
        }
        if(number <= 14){
            res += numberNames[number];
        }
        return res;
}

module.exports = function toReadable(number) {
    let res = '';
  const numberNames = ['zero','one','two','three','four',
    'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen', 'fourteen'];
    const twoDigit = {
        2: 'twen',
        3: 'thir',
        4: 'for',
        5: 'fif',
        6: 'six',
        7: 'seven', 
        8: 'eigh',
        9: 'nine'
    }
  const numberLength = (number + '').length;
  if(numberLength === 3){
    res += numberNames[(number - number % 100)/100] + ' hundred';
    number = number % 100;
    if(number !== 0){
        res += ' ';
        res += twoDigitToRead(number,numberNames, twoDigit);
    }
  }
  if(numberLength < 3){
    res += twoDigitToRead(number,numberNames, twoDigit);
  }
  return res;
}

