import { Request, Response } from 'express';
import internal from 'stream';

class customerController {

    // getcustomer(req: Request, res: Response): void {
    //     console.log("Get Customer");
    //     res.send("Get Customer");
    // }
    getcustomer(req: Request, res: Response): void {
        console.log("get Customer Details");


        function add(a: number, b: number, timeout: number): Promise<number> {
            return new Promise((resolve, reject) => {
              const result = a + b;
              if (result >= 0) {
                setTimeout(() => resolve(result), timeout);
              } else {
                reject(new Error("Invalid input. Result is negative."));
              }
            });
          }
          

        async function multiply(a: number, b: number): Promise<number> {
            const result = a * b;
            if (result >= 0) {
                return result;
            } else {
                throw new Error("Invalid input. Result is negative.");
            }
        }

        Promise.all([add(3, 4,2000), multiply(2, 5)])
            .then(([addResult, multiplyResult]) => {
                console.log("Result of addition: ", addResult);
                console.log("Result of multiplication: ", multiplyResult);
                res.send(`Result of addition: ${addResult}, Result of multiplication: ${multiplyResult}`);
            })
            .catch((error) => {
                console.log("Error: ", error);
                res.status(400).send(`Error: ${error.message}`);
            });
    }

    Save(req: Request, res: Response): void {
        console.log("Save Customer");
        res.send("Save Customer");
        //Save Product details in database
    }
    updatecustomer(req: Request, res: Response): void {
        console.log("Update Customer");
        res.send("Update Customer");
    }
    deletecustomer(req: Request, res: Response): void {
        console.log("Delete Customer");
        res.send("Delete Customer");
    }
}

export default new customerController();
