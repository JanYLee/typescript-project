class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }

  run() {
    return `${this.name} is running`
  }
}

const jay = new Animal('jay')
console.log(jay.run())

/**
 * 继承
 */
class Dog extends Animal {
  roar() {
    return `${this.name} is roaring`
  }
}

const egyi = new Dog('egyi')
console.log(egyi.run(), egyi.roar())

/** 
 * 重写方法
 */
class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  run() {
    return `cat ${super.run()}`
  }
}
const tom = new Cat('tom')
console.log(tom.run())
