// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event, context) {
  console.log('probando la funcion')
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Hello World"})
};
}