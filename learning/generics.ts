/**
 * 泛型
 */

function identity<T>(arg: T): T {
  return arg
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

interface IdLength {
  length: number
}

function getIdLength<T extends IdLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = getIdLength('str')
const obj = getIdLength({ length: 10 })
const arr = getIdLength([1, 2, 3])

/**
 * 泛型类
 */
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue.pop())

/**
 * 泛型接口
 */
interface KeyValue<T, U> {
  key: T
  value: U
}
let kv1: KeyValue<number, string> = { key: 123, value: 'str' }

let arr3: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

/**
 * 泛型函数
 */
interface IPlus<T> {
  (a: T, b: T): T
}

function plus (a: number, b: number): number {
  return a + b
}

const a: IPlus<number> = plus
console.log(a(1, 3))
