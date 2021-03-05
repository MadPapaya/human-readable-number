module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }
    let a = ['one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let b = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let c = ['hundred '];

    let num = number.toString().split("");
    if (number>0 && number<20) {
        return a[number-1].slice(0,-1);
    } else if ((number >=20 && number<=90) && number%10 == 0) {
        return b[number/10 - 2].slice(0,-1);
    } else if (number>20 && number<100) {
        return (b[num[0]-2] + a[num[1] - 1].slice(0,-1));
    } else if ((number >=100 && number <=900) && number%100 == 0) {
        return (a[num[0] -1] + c[0].slice(0,-1));
    } else if ((number >=120 && number <=990) && (number%10 == 0 && num[1] != 1)) {
        return (a[num[0]-1] + c[0] + b[num[1]-2].slice(0,-1));
    } else if (number >100 && number <=999) {
        if (num[1] < 2 && num[1] >0) {
            return (a[num[0]-1] + c[0] + a[number-num[0]*100 - 1].slice(0, -1));
        }
        if (num[1] == 0 && num[2] != 0) {
            return (a[num[0]-1] + c[0] + a[num[2]-1].slice(0,-1));
        } else {
            return (a[num[0]-1] + c[0] + b[num[1]-2] + a[num[2] - 1].slice(0,-1));
        }
    }
}