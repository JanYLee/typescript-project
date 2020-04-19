/** 
 * 类型断言, 用于自行判断参数类型
 */
// 写法一 使用as
function getLength (v: string | number): number {
  const str = v as string
  if(str.length) {
    return str.length
  } else {
    const number = v as number
    return number.toString().length
  }
}

// 写法二 
function getLength2 (v: string | number): number {
  if((<string>v).length) {
    return (<string>v).length
  } else {
    return v.toString().length
  }
}
