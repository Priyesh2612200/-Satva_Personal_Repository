
import { Request, Response } from "express";
import { responseModel } from "../Model/responseModel";
import { Weather } from '../Interface/invesmentinterface';
import Investment from '../Investment.json';


class InvoiceController {
    Get(req: Request, res: Response) {
    let response = new responseModel();
   
    let InvestmentBody: Weather = Investment;
    
        try {
            response.status = 200
            response.message = "Invoice Get Successfully";
            response.data = InvestmentBody
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
        }
        res.send(response);
    }

    Save(req: Request, res: Response) {
        let response = new responseModel();

        
        try {
            response.status = 200
            response.message = "Invoice Save Successfully";
            response.data = req.body;
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
        }
        res.send(response);
    }

}
export default new InvoiceController();