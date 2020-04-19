function add(x: number, y: number, z: number = 2): number {
  if (typeof z === 'number') {
    return x + y + z
  }
  return x + y
}

const add2: (x: number, y: number, z?: number) => number = add
