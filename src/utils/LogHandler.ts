import {Request, Response, NextFunction} from 'express';

const LogHandler = async (req: Request, res: Response, next: NextFunction) => {
    console.log(
        'TYPE : %s URL : %s  params : %s',
        req.method,
        req.originalUrl,
        JSON.stringify(req.params)
    );

    return next();
}

export default LogHandler;