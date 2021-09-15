import {Request, Response, NextFunction} from 'express';

interface CustomError extends Error{
    status?: number

};

const ErrorHandler = async (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;

    if (500 === statusCode) {
        console.error(err.stack || err);
    }
    res.status(statusCode);

    return next(err);
}

export default ErrorHandler;