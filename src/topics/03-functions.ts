// function addNumbers(a: number, b: number) {
//   return a + b;
// }

// const addNumbersArrow = (a: number, b: number):string => {
//   return `${a + b}`
// }

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);

// console.log({ result, result2 });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  if (character.hp >= 100) {
    character.hp = 100;
    return
  }
  character.hp += amount;
}

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Heal points: ${this.hp}`);
  }
}

healCharacter(strider, 10);
healCharacter(strider, 30);

console.log(strider.showHp());







export { };
