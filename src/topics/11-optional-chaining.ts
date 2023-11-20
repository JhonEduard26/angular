interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jhon"
}

const passenger2: Passenger = {
  name: "Maria",
  children: ['José', 'Raúl']
}

const returnChildrenNumber = (passenger: Passenger): number => {

  const howManyChildren = passenger.children?.length ?? 0;

  return howManyChildren;
}

console.log(returnChildrenNumber(passenger1));
console.log(returnChildrenNumber(passenger2));
