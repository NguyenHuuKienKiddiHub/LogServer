// validators/dataValidator.js
const Joi = require("joi");

// Define validation schema using Joi
const dataSchema = Joi.object({
  event: Joi.string().required(),
  pageGroup: Joi.string().required(),
  referer: Joi.string(),
  query: Joi.object(),
  params: Joi.object(),
  btn: Joi.object(),
  user: Joi.object({
    id: Joi.number().required(),
    username: Joi.string().required(),
  }),
});

// Validate data against the schema
function validateData(data) {
  return dataSchema.validate(data);
}

module.exports = validateData;
