import { Request, Response } from 'express';

class InvoiceController {
    getInvoice(req: Request, res: Response): void {
        console.log("Get Invoice");
        res.send ("Get Invoice");
  }
  Save(req: Request, res: Response): void {
    console.log("Save Invoice");
    res.send ("Save Invoice");
    //Save Product details in database
  }
  updateinvoice(req: Request, res: Response): void {
    console.log("Update Invoice");
    res.send ("Update Invoice");
  }
  deleteinvoice(req: Request, res: Response): void {
    console.log("Delete Invoice");
    res.send ("Delete Invoice");
  }
}

export default new InvoiceController();
