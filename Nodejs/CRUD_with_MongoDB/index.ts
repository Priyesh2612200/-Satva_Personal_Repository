import express, { Request, Response } from "express";
import mongoDBConfig from "./mongoDBConfig";
import UserDate from "./Model/UserSchema";
import cors from 'cors';
import bodyparser from 'body-parser';

const app = express()
const port = 2000
mongoDBConfig.dbConnect()

app.use(cors());
app.use(bodyparser.json());

app.get('/getdata', async (req: Request, res: Response) => {

    try {
        let userdata = await UserDate.find();
        res.status(201).json(userdata);
    }
    catch (e) {
        res.status(400).json(e);
    }
})

app.post('/savedata', async (req: Request, res: Response) => {
    const userdatas = req.body;
    try {
        let userresponses = await UserDate.insertMany(userdatas);
        res.status(201).json(userresponses);
    }
    catch (e) {
        res.status(400).json(e);
    }
})

// app.delete('/deletedata', async (req: Request, res: Response) => {

//     var myquery = { name: 'Priyesh' };

//     try {
//         const result = await app.collection("userdatas").deleteOne(myquery);
//         res.status(201).json(result);
//     } catch (e) {
//         res.status(400).json(e);
//     }
// });


app.delete('/deletedata/:id', async (req: Request, res: Response) => {
    try {
        // const deletedUser = await UserDate.deleteOne(req.params.id)
        const deletedUser = await UserDate.findByIdAndDelete(req.params.id);
        
        if (!deletedUser) throw Error('User not found');
        res.status(200).json({message:"Record Deleted Successfully!"});
    }
    catch (e) {
        res.status(400).json(e);
    }
})

app.put('/updatedata/:id', async (req: Request, res: Response) => {
    try {
        const deletedUser = await UserDate.findByIdAndUpdate(req.params.id,{name:'Shyam'});
        
        if (!deletedUser) throw Error('User not found');
        res.status(200).json({message:"Record Updated Successfully!"});
    }
    catch (e) {
        res.status(400).json(e);
    }
})


app.listen(port, () => {
    console.log('App is Running on port:2000');
})
