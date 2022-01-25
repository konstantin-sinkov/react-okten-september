import Joi from "joi";

export const carValidator = Joi.object({
    // required() - necessary field
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яіІїЇґєЄ]{1,20}$')).required().messages({
        'string.empty': '"model" must not be empty',
        'string.pattern.base': 'Only letters, min 1 max 250'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year must be from 1990 till current year'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Price must be from 1 to 1000000',
        'number.min': 'Price must be great then 0',
        'number.max': 'Price must be less then 0'
    })
})