export default class MathUtils {
  static add(num1: number = 1, num2: number = 1): number {
    let len1: number = 0, len2: number = 0, m: number = 1;
    try {
      len1 = num1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
      len2 = num2.toString().split(".")[1].length;
    } catch (e) {
    }
    m = Math.max(len1, len2);
    num1 = parseInt(num1.toString().replace(".", "")) * Math.pow(10, m - len1);
    num2 = parseInt(num2.toString().replace(".", "")) * Math.pow(10, m - len2);
    return (num1 + num2) / Math.pow(10, m);
  }

  static sub(num1: number = 1, num2: number = 1): number {
    let len1: number = 0, len2: number = 0, m: number = 1;
    try {
      len1 = num1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
      len2 = num2.toString().split(".")[1].length;
    } catch (e) {
    }
    m = Math.max(len1, len2);
    num1 = parseInt(num1.toString().replace(".", "")) * Math.pow(10, m - len1);
    num2 = parseInt(num2.toString().replace(".", "")) * Math.pow(10, m - len2);
    return (num1 - num2) / Math.pow(10, m);
  }

  static div(num1: number = 1, num2: number = 1): number {
    let len1: number = 0, len2: number= 0, temp: number;
    try {
      len1 = num1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
      len2 = num2.toString().split(".")[1].length;
    } catch (e) {
    }
    temp = parseInt(num1.toString().replace(".", "")) / parseInt(num2.toString().replace(".", ""));
    if (len2 - len1 < 0 || temp !== parseInt(temp.toString())) {
      return MathUtils.mul(temp, Math.pow(10, len2 - len1));
    }
    return temp * Math.pow(10, len2 - len1);
  }

  static mul(num1: number = 1, num2: number = 1): number {
    let m: number = 0, str1: string = num1.toString(), str2: string = num2.toString();
    try {
      m += str1.split(".")[1].length
    } catch (e) {
    }
    try {
      m += str2.split(".")[1].length
    } catch (e) {
    }
    return parseInt(str1.replace(".", "")) * parseInt(str2.replace(".", "")) / Math.pow(10, m);
  }

  static mod(num1: number = 1, num2: number = 1): number {
    let len1: number = 0, len2: number = 0, m: number = 1;
    try {
      len1 = num1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
      len2 = num2.toString().split(".")[1].length;
    } catch (e) {
    }
    m = Math.pow(10, Math.max(len1, len2));
    return ((num1 * m) % (num2 * m)) / m;
  }

  static bigAdd(a: string, b: string): string {
    let carry: number = 0;
    let length: number = a.length > b.length ? a.length : b.length;
    let sum: number[] = [];
    const format = str => str.length === length ? str : '0'.repeat(length - str.length) + str;
    format(a);
    format(b);
    for (let i: number = length - 1; i > -1; i--) {
      let remain: number = 0;
      let singleSum: number = parseInt(a[i]) + parseInt(b[i]) + carry;
      if (singleSum >= 10) {
        remain = singleSum - 10;
        carry = 1;
      } else {
        remain = singleSum;
        carry = 0;
      }
      sum[i] = remain;
    }
    return carry ? '1' + sum.join('') : sum.join('');
  }
}