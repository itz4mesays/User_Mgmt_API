import express, { Request, Response} from 'express'
interface UserInterface  {
    createUser(req: Request, res: Response) : Promise<Response>, //Each method returns a Promise<Response>, which indicates that the method is asynchronous and will eventually return an Express Response object.
    getUser(req: Request, res: Response) : Promise<Response>,
    getAllUsers(req: Request, res: Response): Promise<Response>
}

export default UserInterface