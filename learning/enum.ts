/**
 * 枚举
 */
enum MyNumber {
  One,
  Two,
  Three,
}

console.log(MyNumber.One)

const enum Fruit {
  apple = 'apple',
  orange = 'orange',
  banana = 'banana'
}

console.log('apple' === Fruit.apple)
