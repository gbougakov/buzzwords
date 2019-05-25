const got = require('got')

module.exports = async (_, res) => {
  const creds = (await got('https://api.producthunt.com/v2/oauth/token', {
        method: 'POST',
        body: {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'client_credentials'
        },
        json: true
      })).body
  res.end(JSON.stringify(creds))
}