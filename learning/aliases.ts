/**
 * 类型别名, 用于简写一些过长的类型
 */
type AddFnType = (x: number, y: number) => number
function add(x: number, y: number): number {
  return x + y
}

const myAdd: AddFnType = add

type ValueResolver = () => string
type ValueOrResolver = string | ValueResolver
function getValue(v: ValueOrResolver) {
  if (typeof v === 'string') {
    return v
  }
  return v
}
