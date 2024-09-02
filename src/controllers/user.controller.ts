import UserInterface from "../interface/userInterface";
import express, {Request, Response} from 'express'
import { handleError } from "../utils/util";

class UserController implements UserInterface
{
    constructor(){}

    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            
        } catch (error: unknown) {
           handleError(res, 500, error)
        }
    }

    async getUser(req: Request, res: Response): Promise<Response> {
        
    }

    async getAllUsers(req: Request, res: Response): Promise<Response> {
        
    }
}

export default UserController