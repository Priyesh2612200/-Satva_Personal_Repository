
//simple function
function sub(a: number, b: number) {
    return a - b;
  }
console.log(sub(5,3));

//promise function
function mul(a: number, b: number): Promise<number> {
    return new Promise((resolve, rejects) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            rejects(new Error('Both arguments are not numbers'));
        }

        resolve(a * b);
    });
}


mul(2, 9)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


//arrow function
const temp = (a: number, b: number): number => {
    return a + b;
    }
      
console.log(temp(20, 9));

//await & async function    
const example = async (a: number, b: number): Promise<number> => {
    return await (a + b);
  }
  
  example(5, 9)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  
//optinal 'c' value not required
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
    }
console.log(add(65,5))

//Default Parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
  
  console.log(pow(10));

//Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
  
  console.log(divide({dividend: 18, divisor: 2}));