function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(24);
const amIBoolean = whatsMyType<boolean>(false);

console.log(amIString.split(' '));
console.log(amINumber);
console.log(amIBoolean);


export { }
