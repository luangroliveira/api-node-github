const Joi = require('joi');

module.exports = {
    body: {
        name: Joi.string().required(),
        github_username: Joi.string().required(),
        bio: Joi.string(),
        avatar_url: Joi.string().required(),
        techs: Joi.array().required(),
        location: Joi.object().required()
    }
};