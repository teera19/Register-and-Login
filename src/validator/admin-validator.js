const Joi = require("joi");

exports.createProductSchema = Joi.object({
  price: Joi.number().required(),
  detail: Joi.string().required(),
});
