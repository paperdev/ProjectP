import {Request, Response, NextFunction} from 'express';

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const result = {
            title : 'login'
        };
        res.send(result);
    } catch (error) {
        return next(error);
    }
}