export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = 'No address'
  ) { };

}

// class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, 'New York, USA');
//   }
// }

class Hero {
  // private person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) { }
}

const tony = new Person('Tony', 'Stark', 'New York, USA');
const ironman = new Hero('Hulk', 46, 'Bruce Banner', tony);

console.log(ironman);
