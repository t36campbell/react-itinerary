const axios = require('axios');
require('dotenv').config();

module.exports = async (query, variables) => {
    const {
        data: { data, errors },
    } = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${process.env.FAUNA_KEY}`,
        },
        data: {
            query,
            variables,
        },
    });
    if (errors) {
        console.error(errors);
        throw new Error('Something went wrong');
    }
    return data;
};