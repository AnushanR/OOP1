// Using Object.create

// a universal method that is applicable to all elfs
const elfsCanDo = {
  attack() {
    return "attack with " + this.weapon
  }
}

// function to create new elfs 
function createElf(name, weapon) {

  // creates a new object using elfsCanDo as the prototype... (allows for protoyp)
  let newElf = Object.create(elfsCanDo)
  newElf.name = name;
  newElf.weapon = weapon
  return newElf
}

let peterTheElf = createElf("Peter", "Sword")
let samTheElf = createElf("Sam", "Bow")

console.log(peterTheElf.attack())

console.log(samTheElf.attack())

