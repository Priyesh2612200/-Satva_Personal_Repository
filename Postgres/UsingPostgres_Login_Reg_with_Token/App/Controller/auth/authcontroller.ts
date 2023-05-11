
import { Request, Response } from 'express';
import { Empmodel } from '../../Models/interface';
import { responseModel } from '../../Models/responseModel'
import Authservice from '../../Services/auth'

import EmployeeRepository from '../../Repositary/index'
import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config()
import bcrypt from 'bcrypt';

const { validationResult } = require("express-validator");


const register = async (req: Request, res: Response) => {

  let user: Empmodel;
  user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,

  }

  try {

    //express-validator Response
    const errors = validationResult(req);
    // if there is error then return Error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    user.password = await Authservice.hashPassword(user.password as string)
    let users = await EmployeeRepository.authrepositary.create(user)

    let userResponses: Empmodel = {
      email: users.email,
      name: users.name
    }

    const token = jwt.sign(userResponses, process.env.APP_KEY as string, { expiresIn: 3600 })
    let response: responseModel = {
      status: 201,
      message: "data saved",
      data: { user: userResponses, accesstoken: token },
      error: null
    }

    res.status(201).json(response);
  }

  catch (e) {
    console.log("error", e)
    let response: responseModel = {
      status: 400,
      message: "data save failed",
      data: null,
      error: e as string
    }

    res.status(400).json(response);
  }


}


const login = async (req: Request, res: Response) => {

  let UserData: Empmodel;
  UserData = {
    email: req.body.email,
    password: req.body.password
  }

  try {

    console.log(UserData);

    const userResponse = await EmployeeRepository.authrepositary.findByEmail(UserData.email)
    var responseModel: responseModel


    if (userResponse && !await bcrypt.compare(UserData.password, userResponse!.password)) {
      responseModel = {
        status: 201,
        message: "please check login details",
        data: null,
        error: null
      }
    }
    else {
      if (userResponse != null) {
        UserData.id = userResponse.id
        UserData.name = userResponse.name as string

        const token = await jwt.sign(UserData, process.env.APP_KEY as string, { expiresIn: 3600 })

        let userResponses: Empmodel = {
          id: userResponse.id,
          name: userResponse.name,
          email: userResponse.email,


        }
        responseModel = {
          status: 201,
          data: { user: userResponses, accessToken: token },
          message: "Loggedin Successfully",
          error: null
        }
      }
      else {
        responseModel = {
          status: 201,
          data: null,
          message: "please check your login details",
          error: null
        }
      }
    }


    res.status(201).send(responseModel);

  } catch (e) {
    console.log("error", e)


    res.status(400).json(e);
  }
}


const verifytoken = async (req: any, res: Response) => {

  try {
    const userResponse = await EmployeeRepository.authrepositary.getUser(req.id)
    let response: responseModel = {
      status: 201,
      message: "User Get SuccessFully!",
      data: userResponse,
      error: null
    }
    res.status(201).json(response);
  } catch (e) {
    console.log(`Error: ${e}`)
    let response: responseModel = {
      status: 400,
      message: "User save failed",
      data: null,
      error: e as string
    }
    res.status(400).json(response);
  }
}


export default {
  login,
  register,
  verifytoken
}


