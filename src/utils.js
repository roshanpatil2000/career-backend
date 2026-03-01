
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5500'], // Specify allowed origins
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = { corsOptions }