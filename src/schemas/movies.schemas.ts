import Joi from "joi";

const movieSchema = Joi.object({
    name: Joi.string().trim().empty(" ").required(), 
    platform: Joi.string().trim().empty(" ").required(), 
    genre: Joi.string().trim().empty(" ").required()
});

export { movieSchema };