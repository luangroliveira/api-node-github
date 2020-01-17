const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        try {
            const devs = await Dev.find();
            return response.json(devs);
        } catch (error) {
            return response.json(error);
        }
    },

    async show(request, response) {
        try {
            const dev = await Dev.find({
                github_username: request.params.id,
            });
            return response.json(dev);
        } catch (error) {
            return response.json(error);
        }
    },

    async store(request, response) {
        try {
            const { github_username, techs, latitude, longitude } = request.body;
            let dev = await Dev.findOne({ github_username });"
            if (!dev) {
                const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
                const { name = login, avatar_url, bio } = api_response.data;
                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs: parseStringAsArray(techs),
                    location: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                });
            }
            return response.json(dev);
        } catch (error) {
            return response.json(error);
        }
    }
}