import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function paramsSchemaValidation(schema: ObjectSchema) {
    
    return (req: Request, res: Response, next: NextFunction) => {
    
        const { error } = schema.validate(req.query, { abortEarly: false });

        if (error) {
            const errors = error.details.map((detail) => `${detail.message}`);

            if (error.details[0].type === "number.conflict") return res.status(409).send(`🚫 Conflict!\n\n${errors}`);
            
            return res.status(422).send(`🚫 Unprocessable entity!\n\n${errors}`);
        }

        next();
    }
}
