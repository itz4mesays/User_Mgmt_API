import UserInterface from "../interface/userInterface";
import {Request, Response} from 'express'
import { handleError, successResponse } from "../utils/util";
import { NewUserRequest } from "../utils/types";
import { validateUser } from "../validations/form_validations";
import User from "../models/user";
import Joi from "joi";
import { Schema, Model } from "mongoose";
import { IUser } from "../interface/interfaces";
import user from "../models/user";

class UserController implements UserInterface
{
    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { error } : Joi.ValidationResult = validateUser.validate(req.body, { abortEarly: true });
            
            if (error) {
                return handleError(res, 422, error.details[0].message);
            }

            // Type assertion to match NewUserRequest
            const userData : NewUserRequest = req.body
             // Assuming req.body matches the User type
            const newUser = new User({
                ...userData,
                created_at: new Date()  // Optional if you want to set it explicitly
            });

            const savedUser = await newUser.save();
            return successResponse(res, 201, savedUser , "User details have been created")
        } catch (error: unknown) {
           return handleError(res, 500, error)
        }
    }

    async getUser(req: Request, res: Response): Promise<Response> {
        try {
            const id : string = req.params.id
            const user : IUser | null = await User.findById<IUser>(id).exec()
            if (!user) {
                return handleError(res, 404, "User not found")
            }
            
            return successResponse(res, 200, user!, "Success")
        } catch (error: unknown) {
           return handleError(res, 500, error)
        }
    }

    async getAllUsers(req: Request, res: Response): Promise<Response> {
        try {
            const { page = 1, limit = 10 } = req.query;

            // Parse the page and limit values from the query string
            const pageNumber : number = parseInt(page as string);
            const limitNumber : number = parseInt(limit as string);

            // Calculate the total number of documents
            const totalUsers = await User.countDocuments();

            // Fetch the users with pagination
            const users = await User.find()
                .skip((pageNumber - 1) * limitNumber)
                .limit(limitNumber)
                .exec();

            // Prepare the pagination metadata
            const pagination : object = {
                currentPage: pageNumber,
                totalPages: Math.ceil(totalUsers / limitNumber),
                totalUsers,
            };

            const data = {
                users,
                pagination
            }
            return successResponse(res, 200, data , "Success")
        } catch (error: unknown) {
           return handleError(res, 500, error)
        }
    }
}

export default UserController